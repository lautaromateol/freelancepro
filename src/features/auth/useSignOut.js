import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut as signOutAPI } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";

export function useSignOut(){

  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate: signOut, isPending } = useMutation({
    mutationFn: signOutAPI,
    onSuccess: () => {
      queryClient.removeQueries()
      navigate("/login", { replace: true })
    }
  })

  return { signOut, isPending }

}