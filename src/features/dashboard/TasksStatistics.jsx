import ProjectCompletionChart from "./ProjectCompletionChart";
import PendingTasks from "./PendingTasks";

/* eslint-disable react/prop-types */

function calculateCompletion(projects, tasks) {
  return projects.map((project) => {
    const projectTasks = tasks.filter((task) => task.projectId === project.id)
    const completionPercentage = projectTasks.length ? ((projectTasks.filter((task) => task.status === "Done").length) / projectTasks.length) * 100 : 0
    return {
      name: project.name,
      completionPercentage,
    }
  })
}

function getPendingTasks(projects, tasks) {
  return projects.map((project) => {
    const projectTasks = tasks.filter((task) => task.projectId === project.id)
    const projectPendingTasks = projectTasks.filter((task) => task.status === "To-Do" || task.status === "Doing")
    return {
      id: project.id,
      name: project.name,
      finishDate: project.finishDate,
      pending: projectPendingTasks,
    }
  }).filter((project) => project.pending.length > 0)
}

export default function TasksStatistics({ projects, tasks }) {

  const data = calculateCompletion(projects, tasks)

  const pendingTasks = getPendingTasks(projects, tasks)

  return (
    <section className="grid grid-cols-[2.5fr_1fr] gap-4">
      <ProjectCompletionChart data={data} />
      <PendingTasks data={pendingTasks} />
    </section>
  )
}
