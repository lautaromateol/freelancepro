import { useProjects } from "../features/projects/useProjects"
import { useSearchParams } from "react-router-dom"
import { HiOutlineFolderOpen } from "react-icons/hi"
import CreateProject from "../features/projects/CreateProject"
import PageSection from "../ui/PageSection"
import PageHeading from "../ui/PageHeader"
import PageSubHeading from "../ui/PageSubHeading"
import ProjectChart from "../features/projects/ProjectChart"
import Spinner from "../ui/Spinner"
import Paginate from "../ui/Paginate"
import Filters from "../ui/Filters"

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

  if (!projects.length) return (
      <section className="flex items-center justify-center">
        <div className="rounded-lg bg-slate-50 p-8 max-w-[40rem] border-2">
          <HiOutlineFolderOpen className="mx-auto size-[5rem] mb-6" />
          <h4 className="text-4xl font-bold mb-6 text-center">You don&apos;t have any project!</h4>
          <p className="text-2xl mb-6 text-gray-500 text-center">It seems that you don&apos;t have created any project yet. Start working in something new today!</p>
          <CreateProject />
        </div>
      </section>
  )

  return (
    <PageSection>
      <header className="flex items-center justify-between">
        <div>
          <PageHeading>Your Projects</PageHeading>
          <PageSubHeading>A summary of your active projects and key statistics.</PageSubHeading>
        </div>
        <Filters options={options} />
      </header>
      <section className="grid grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectChart project={project} key={project.id} />
        ))}
      </section>
      <Paginate count={count} />
    </PageSection>
  )
}
