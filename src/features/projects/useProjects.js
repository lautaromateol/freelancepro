import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProjects } from "../../services/apiProjects";
import { useSearchParams } from "react-router-dom";
import { RESULTS_PER_PAGE } from "../../utils/constants";

export function useProjects() {

  const queryClient = useQueryClient()

  const [searchParams] = useSearchParams()

  const page = Number(searchParams.get("page")) || 1

  const { data: { projects, count } = {} , isPending } = useQuery({
    queryKey: ["projects", page],
    queryFn: () => getProjects({ page })
  })

  const totalPages = Math.ceil(projects / RESULTS_PER_PAGE)

  if(totalPages !== page) {
    queryClient.prefetchQuery({
      queryKey: ["projects", page + 1],
      queryFn: () => getProjects({ page: page + 1 })
    })
  }

  if(page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["projects", page - 1],
      queryFn: () => getProjects({ page: page - 1 })
    })
  }

  return { projects, isPending, count }
}