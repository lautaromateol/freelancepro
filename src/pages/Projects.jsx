import { useProjects } from "../features/projects/useProjects"
import PageSection from "../ui/PageSection"
import PageHeading from "../ui/PageHeader"
import PageSubHeading from "../ui/PageSubHeading"
import ProjectChart from "../features/projects/ProjectChart"
import Spinner from "../ui/Spinner"

export default function Projects() {

  const { projects, isPending } = useProjects()

  if (isPending) return <Spinner />

  return (
    <PageSection>
      <div className="flex items-center justify-between">
        <div>
        <PageHeading>Your Projects</PageHeading>
        <PageSubHeading>A summary of your active projects and key statistics.</PageSubHeading>
        </div>
        <div>
          Filters
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectChart project={project} key={project.id} />
        ))}
      </div>
    </PageSection>
  )
}
