import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteProject as deleteProjectAPI } from "../../services/apiProjects"
import toast from "react-hot-toast"

export function useDeleteProject() {

  const queryClient = useQueryClient()

  const { mutate: deleteProject, isPending } = useMutation({
    mutationFn: (id) => deleteProjectAPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"])
      toast.success("Project deleted successfuly!")
    },
    onError: () => toast.error("Project couldn't be deleted. Try again later.")
  })

  return { deleteProject, isPending }
}
