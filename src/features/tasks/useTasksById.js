import { useQuery } from "@tanstack/react-query";
import { getTasksById } from "../../services/apiTasks";

export function useTasksById(userId){

  const { data: tasks, isPending } = useQuery({
    queryKey: ["userTasks"],
    queryFn: () => getTasksById(userId)
  })

  return { tasks, isPending }

}