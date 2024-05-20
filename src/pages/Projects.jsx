import { useProjects } from "../features/projects/useProjects"
import PageSection from "../ui/PageSection"
import PageHeading from "../ui/PageHeader"
import PageSubHeading from "../ui/PageSubHeading"
import ProjectChart from "../features/projects/ProjectChart"
import Spinner from "../ui/Spinner"
import Paginate from "../ui/Paginate"
import Filters from "../ui/Filters"
import { useSearchParams } from "react-router-dom"

const options = [
  {
    label: "In Progress",
    value: "in-progress"
  },
  {
    label: "Complete",
    value: "complete"
  },
]

export default function Projects() {

  const { projects, isPending, count } = useProjects()

  const [searchParams] = useSearchParams()

  const statusParam = searchParams.get("status") || options.at(0).value

  const status = statusParam.split("-").length > 1 ? statusParam.split("-").map((word) => word.at(0).toUpperCase() + word.slice(1)).join(" ") : statusParam.at(0).toUpperCase() + statusParam.slice(1)

  const filteredProjects = projects?.filter((project) => project.status === status)

  if (isPending) return <Spinner />


  return (
    <PageSection>
      <div className="flex items-center justify-between">
        <div>
          <PageHeading>Your Projects</PageHeading>
          <PageSubHeading>A summary of your active projects and key statistics.</PageSubHeading>
        </div>
        <Filters options={options} />
      </div>
      <div className="grid grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectChart project={project} key={project.id} />
        ))}
      </div>
      <Paginate count={count} />
    </PageSection>
  )
}
