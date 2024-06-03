import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProjects } from "../../services/apiProjects";
import { useSearchParams } from "react-router-dom";
import { RESULTS_PER_PAGE } from "../../utils/constants";

export function useProjects(userId) {

  const queryClient = useQueryClient()

  const [searchParams] = useSearchParams()

  const statusParam = searchParams.get("status") || "all"
  
  const status = statusParam.split("-").length > 1 ? statusParam.split("-").map((word) => word.at(0).toUpperCase() + word.slice(1)).join(" ") : statusParam.at(0).toUpperCase() + statusParam.slice(1)

  const filter = status === "All" ? null : { field: "status", value: status }

  const page = Number(searchParams.get("page")) || 1

  const { data: { projects, count } = {} , isPending } = useQuery({
    queryKey: ["projects", page, filter],
    queryFn: () => getProjects({ filter, page, userId })
  })

  const totalPages = Math.ceil(projects / RESULTS_PER_PAGE)

  if(totalPages !== page) {
    queryClient.prefetchQuery({
      queryKey: ["projects", page + 1, filter],
      queryFn: () => getProjects({ filter, page: page + 1, userId })
    })
  }

  if(page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["projects", page - 1, filter],
      queryFn: () => getProjects({ filter, page: page - 1, userId })
    })
  }

  return { projects, isPending, count }
}