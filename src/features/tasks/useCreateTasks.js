import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask as createTaskAPI } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useCreateTasks() {

  const queryClient = useQueryClient()

  const { mutate: createTask, isPending } = useMutation({
    mutationFn: createTaskAPI,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
    onError: () => toast.error("Task couldn't be created. Try again later.")
  })

  return { createTask, isPending }
}