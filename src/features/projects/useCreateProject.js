import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject as createProjectAPI } from "../../services/apiProjects";

export function useCreateProject() {

  const queryClient = useQueryClient()

  const { mutate: createProject, isPending } = useMutation({
    mutationFn: createProjectAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"])
    }
  })

  return { createProject, isPending }
}