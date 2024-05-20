import { useQuery } from "@tanstack/react-query";
import { getProject } from "../../services/apiProjects";
import { useParams } from "react-router-dom";

export function useProject() {

  const { projectId } = useParams()

  const { data: project, isPending } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProject(projectId)
  })

  return { project, isPending }
}