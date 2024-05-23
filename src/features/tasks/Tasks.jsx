/* eslint-disable react/prop-types */
import Task from "./Task"
import TasksContainer from "./TasksContainer"

export default function Tasks({ tasks, projectId }) {

  const todoTasks = tasks.filter((task) => task.status === "To-Do")
  const doingTasks = tasks.filter((task) => task.status === "Doing")
  const doneTasks = tasks.filter((task) => task.status === "Done")

  return (
    <section>
      <p className="text-4xl font-semibold mb-8">Tasks</p>
      <div className="w-full mx-auto">
        <div className="grid grid-cols-3 gap-8 mb-10">
          <TasksContainer projectId={projectId} title="To-Do" data={todoTasks} render={(task) => <Task task={task} key={task.id} />} />
          <TasksContainer projectId={projectId} title="Doing" data={doingTasks} render={(task) => <Task task={task} key={task.id} />} />
          <TasksContainer projectId={projectId} title="Done" data={doneTasks} render={(task) => <Task task={task} key={task.id} />} />
        </div>
      </div>
    </section>
  )
}
