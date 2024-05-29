import { useMutation } from "@tanstack/react-query"
import { signUp as signUpAPI } from "../../services/apiAuthentication"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export function useSignup() {

  const navigate = useNavigate()

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({fullName, email, password}) => signUpAPI(fullName, email, password),
    onSuccess: ({user}) => {
      toast.success(`Account created successfully! Check ${user.user_metadata.email} to confirm your account.`)
      navigate("/login")
    }
  })

  return { signUp, isPending }
}