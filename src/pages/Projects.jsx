import { useProjects } from "../features/projects/useProjects"
import { HiOutlineFolderOpen } from "react-icons/hi"
import CreateProject from "../features/projects/CreateProject"
import PageSection from "../ui/PageSection"
import PageHeading from "../ui/PageHeader"
import PageSubHeading from "../ui/PageSubHeading"
import ProjectChart from "../features/projects/ProjectChart"
import Spinner from "../ui/Spinner"
import Paginate from "../ui/Paginate"
import Filters from "../ui/Filters"
import { useUser } from "../features/auth/useUser"

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

  const { user, isPending: isLoadingUser } = useUser()
  
  const { projects, isPending: isLoadingProjects, count } = useProjects(user.id)

  const isPending = isLoadingProjects || isLoadingUser

  if (isPending) return <Spinner />

  if (projects.length < 1) return (
      <section className="flex items-center justify-center">
      <div className="rounded-md bg-tremor-background shadow-md p-4 max-w-[20rem]">
          <HiOutlineFolderOpen className="mx-auto size-[2rem] mb-6" />
          <h4 className="font-semibold text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong mb-2 text-center">You don&apos;t have any project!</h4>
          <p className="text-text-tremor-default mb-2 text-tremor-content dark:text-dark-tremor-content text-center">It seems that you don&apos;t have created any project yet. Start working in something new today!</p>
          <CreateProject userId={user.id} />
        </div>
      </section>
  )

  return (
    <PageSection>
      <header className="flex items-center justify-between">
        <div>
          <PageHeading>Your Projects</PageHeading>
          <PageSubHeading>View all your projects here.</PageSubHeading>
        </div>
        <Filters options={options} />
      </header>
      <section className="grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectChart project={project} key={project.id} />
        ))}
      </section>
      <Paginate count={count} />
    </PageSection>
  )
}
