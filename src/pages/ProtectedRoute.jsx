/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../features/auth/useUser"
import Spinner from "../ui/Spinner"

export default function ProtectedRoute({ children }) {

  const { isPending, isAuthenticated } = useUser()

  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuthenticated && !isPending) navigate("/login")
  }, [isPending, isAuthenticated, navigate])

  if(isPending) return <Spinner />

  if(isAuthenticated) return children
}
