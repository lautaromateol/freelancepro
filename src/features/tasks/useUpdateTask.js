import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask as updateTaskAPI } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useUpdateTask() {

  const queryClient = useQueryClient()

  const { mutate: updateTask, isPending } = useMutation({
    mutationFn: ({id, newTask}) => updateTaskAPI(id, newTask),
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
    onError: () => toast.error("Task status couldn't be updated. Try again later.")
  })

  return { updateTask, isPending }
}