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
import { useSearchParams } from "react-router-dom"

const options = [
  {
    label: "All",
    value: "all"
  },
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

  const [searchParams] = useSearchParams()

  const status = searchParams.get("status") || "all"

  const { user, isPending: isLoadingUser } = useUser()

  const { projects, isPending: isLoadingProjects, count } = useProjects(user.id)

  const isPending = isLoadingProjects || isLoadingUser

  if (isPending) return <Spinner />

  if (status === "all" && !count) return (
    <section className="flex items-center justify-center">
      <div className="rounded-md bg-tremor-background dark:bg-dark-tremor-background-muted shadow-md p-4 max-w-[20rem]">
        <HiOutlineFolderOpen className="text-tremor-content-strong dark:text-dark-tremor-content-strong mx-auto size-[2rem] mb-6" />
        <h4 className="font-semibold text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong mb-2 text-center">You don&apos;t have any project!</h4>
        <p className="text-text-tremor-default mb-2 text-tremor-content dark:text-dark-tremor-content text-center">It seems that you don&apos;t have any project yet. Start creating something new today!</p>
        <CreateProject />
      </div>
    </section>
  )

  return (
    <PageSection>
      <header className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div>
          <PageHeading>Your Projects</PageHeading>
          <PageSubHeading>View all your projects here.</PageSubHeading>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-1">
          <CreateProject />
          <Filters options={options} />
        </div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectChart project={project} key={project.id} />
        ))}
      </section>
      {!count ?
        <section className="flex items-center justify-center">
          <div className="rounded-md bg-tremor-background dark:bg-dark-tremor-background-muted shadow-md p-4 max-w-[20rem]">
            <HiOutlineFolderOpen className="text-tremor-content-strong dark:text-dark-tremor-content-strong mx-auto size-[2rem] mb-6" />
            <h4 className="font-semibold text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong mb-2 text-center">You don&apos;t have any project!</h4>
            <p className="text-text-tremor-default mb-2 text-tremor-content dark:text-dark-tremor-content text-center">It seems that you don&apos;t have any project with this status.</p>
            <CreateProject />
          </div>
        </section>
        : null
      }
      {count ? <Paginate count={count} /> : null}
    </PageSection>
  )
}
