import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject as updateProjectAPI } from "../../services/apiProjects";
import toast from "react-hot-toast";

export function useUpdateProject(){

  const queryClient = useQueryClient()

  const { mutate: updateProject, isPending } = useMutation({
    mutationFn: ({data, id}) => updateProjectAPI(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]),
      toast.success("Project updated successfully!")
    },
    onError: () => toast.error("Project couldn't be updated. Try again later")
  })

  return { updateProject, isPending }

}