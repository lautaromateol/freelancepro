import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject as createProjectAPI } from "../../services/apiProjects";
import toast from "react-hot-toast";

export function useCreateProject() {

  const queryClient = useQueryClient()

  const { mutate: createProject, isPending } = useMutation({
    mutationFn: createProjectAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"])
      toast.success("Project created successfully!")
    },
    onError: () => toast.error("The project couldn't be created. Try again later.")
  })

  return { createProject, isPending }
}