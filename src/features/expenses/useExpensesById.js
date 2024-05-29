import { useQuery } from "@tanstack/react-query"
import { getExpensesById } from "../../services/apiExpenses"

export function useExpensesById(userId) {

  const { data: expenses, isPending } = useQuery({
    queryKey: ["userExpenses"],
    queryFn: () => getExpensesById(userId)
  })

  return { expenses, isPending }

}