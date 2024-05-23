import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getExpenses } from "../../services/apiExpenses";

export function useExpenses() {

  const { projectId } = useParams()

  const { data: expenses, isPending } = useQuery({
    queryKey: ["expenses", projectId],
    queryFn: () => getExpenses(projectId)
  })

  return { expenses, isPending }

}