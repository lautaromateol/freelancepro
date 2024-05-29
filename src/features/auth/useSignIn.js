import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn as signInAPI } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignIn() {

  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: ({ email, password }) => signInAPI(email, password),
    onSuccess: ({user}) => {
      queryClient.setQueryData(["user", user])
      navigate("/dashboard", { replace: true })
    },
    onError: () => {
      toast.error("Incorrect email or password.")
    }
  })

  return { signIn, isPending }

}