import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/apiTasks";
import { useParams } from "react-router-dom";

export function useTasks(){

  const { projectId } = useParams()

  const { data: tasks, isPending } = useQuery({
    queryKey: ["tasks", projectId],
    queryFn: () => getTasks(projectId)
  })

  return { tasks, isPending }
}