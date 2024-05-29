import { useQuery } from "@tanstack/react-query"
import { useTasksById } from "../features/tasks/useTasksById"
import { useExpensesById } from "../features/expenses/useExpensesById"
import { useUser } from "../features/auth/useUser"
import { getProjects } from "../services/apiProjects"
import PageSection from "../ui/PageSection"
import PageHeading from "../ui/PageHeader"
import PageSubHeading from "../ui/PageSubHeading"
import ProjectsStatistics from "../features/dashboard/ProjectsStatistics"
import TasksStatistics from "../features/dashboard/TasksStatistics"
import Spinner from "../ui/Spinner"
import BudgetStatistics from "../features/dashboard/BudgetStatistics"

export default function Dashboard() {
  
  const { user, isPending: isLoadingUser } = useUser()

  const { data: { projects } = {}, isPending: isLoadingProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects({ filter: null, page: null, userId: user?.id })
  })

  const { tasks, isPending: isLoadingTasks } = useTasksById(user?.id)

  const { expenses, isPending: isLoadingExpenses } = useExpensesById(user.id)

  const isPending = isLoadingProjects || isLoadingTasks || isLoadingExpenses || isLoadingUser

  if (isPending) return <Spinner />

  return (
    <PageSection>
      <header>
        <PageHeading>Dashboard</PageHeading>
        <PageSubHeading>A summary of your active projects and key statistics.</PageSubHeading>
      </header>
      <ProjectsStatistics projects={projects} />
      <TasksStatistics projects={projects} tasks={tasks} />
      <BudgetStatistics projects={projects} expenses={expenses} />
    </PageSection>
  )
}
