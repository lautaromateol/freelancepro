import { useProject } from "../features/projects/useProject"
import { useTasks } from "../features/tasks/useTasks"
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
import { useUser } from "../features/auth/useUser"

export default function Project() {

  const { project, isPending: isLoadingProjects } = useProject()

  const { tasks, isPending: isLoadingTasks } = useTasks()

  const { user, isPending: isLoadingUser } = useUser()

  const isPending = isLoadingProjects || isLoadingTasks || isLoadingUser

  if (isPending) return <Spinner />
  
  return (
    <PageSection>
      <header className="flex items-center justify-between shadow-md rounded-lg border border-1 p-8">
        <div>
          <PageHeading>{project.name}</PageHeading>
          <span className="inline-block bg-green-200 text-green-800 text-xl rounded-lg p-2">{project.status}</span>
        </div>
        <div className="flex items-center justify-end gap-4 w-[30rem]">
          <EditProjectButton project={project} />
          <DeleteProjectButton project={project} />
        </div>
      </header>
      <section className="grid grid-cols-2 gap-x-10">
        <ProjectInfo tasks={tasks} project={project} />
        <ProjectDescription project={project} />
      </section>
      <Tasks userId={user.id} tasks={tasks} project={project} />
      {project.budget ? <section>
        <div className="flex items-center justify-between">
          <p className="text-4xl font-semibold mb-8">Expenses</p>
          <CreateExpense userId={user.id} />
        </div>
        <ExpensesTable />
      </section> : null}
    </PageSection>
  )
}
