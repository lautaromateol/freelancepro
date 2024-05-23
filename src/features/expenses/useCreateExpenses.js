import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExpense as createExpenseAPI } from "../../services/apiExpenses";
import toast from "react-hot-toast";

export function useCreateExpenses(){

  const queryClient = useQueryClient()

  const { mutate: createExpense, isPending } = useMutation({
    mutationFn: createExpenseAPI,
    onSuccess: () => {
      toast.success("Expense added successfully!")
      queryClient.invalidateQueries(["expenses"])
    },
    onError: () => toast.error("Expense couldn't be added. Try again later.")
  })

  return { createExpense, isPending }

}