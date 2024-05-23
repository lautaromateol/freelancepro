import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateExpense as updateExpenseAPI } from "../../services/apiExpenses";

export function useUpdateExpense(){

  const queryClient = useQueryClient()

  const { mutate: updateExpense, isPending } = useMutation({
    mutationFn: ({id, newExpense}) => updateExpenseAPI(id, newExpense),
    onSuccess: () => queryClient.invalidateQueries(["expenses"]),
    onError: (error) => console.log(error)
  })

  return { updateExpense, isPending }

}