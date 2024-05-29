import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuthentication";

export function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    staleTime: 3600 * 60
  })

  return { user, isPending, isAuthenticated: user?.role === "authenticated" }
}