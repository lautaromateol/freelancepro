import { useProject } from "../features/projects/useProject"
import { HiOutlineExclamationTriangle } from "react-icons/hi2"
import { useTasks } from "../features/tasks/useTasks"
import { Link } from "react-router-dom"
import Spinner from "../ui/Spinner"
import PageSection from "../ui/PageSection"
import PageHeading from "../ui/PageHeader"
import Tasks from "../features/tasks/Tasks"
import ProjectInfo from "../features/projects/ProjectInfo"
import ExpensesTable from "../features/expenses/ExpensesTable"
import CreateExpense from "../features/expenses/CreateExpense"
import EditProjectButton from "../features/projects/EditProjectButton"
import DeleteProjectButton from "../features/projects/DeleteProjectButton"
import ProjectDescription from "../features/projects/ProjectDescription"
import Button from "../ui/Button"

export default function Project() {

  const { project, isPending: isLoadingProjects} = useProject()

  const { tasks, isPending: isLoadingTasks } = useTasks()

  const isPending = isLoadingProjects || isLoadingTasks

  if (isPending) return <Spinner />

  if (!project) return (
    <section className="flex items-center justify-center">
      <div className="rounded-md bg-tremor-background shadow-md p-4 max-w-[20rem]">
        <HiOutlineExclamationTriangle className="mx-auto size-[2rem] mb-6" />
        <h4 className="font-semibold text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong mb-2 text-center">Project not found!</h4>
        <p className="text-text-tremor-default mb-2 text-tremor-content dark:text-dark-tremor-content text-center">The project that you were looking for was not found at our database.</p>
        <Link to="/projects">
          <Button>Back to Projects</Button>
        </Link>
      </div>
    </section>
  )

  return (
    <PageSection>
      <header className="flex items-center justify-between bg-tremor-background dark:bg-dark-tremor-background shadow-md rounded-md border border-1 p-4">
        <div>
          <PageHeading>{project.name}</PageHeading>
          <span className="inline-block bg-green-200 text-green-800 text-tremor-default rounded-md p-1">{project.status}</span>
        </div>
        <div className="flex items-center justify-end gap-2 w-[20rem]">
          <EditProjectButton />
          <DeleteProjectButton />
        </div>
      </header>
      <section className="grid grid-cols-2 gap-x-10">
        <ProjectInfo />
        <ProjectDescription />
      </section>
      <Tasks tasks={tasks} project={project} />
      {project.budget ? <section>
        <div className="flex items-center justify-between">
          <p className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mb-4">Expenses</p>
          <CreateExpense />
        </div>
        <ExpensesTable />
      </section> : null}
    </PageSection>
  )
}
