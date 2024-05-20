/* eslint-disable react/prop-types */
import { useState } from "react"
import AddTaskButton from "./AddTaskButton"
import CreateTaskForm from "./CreateTaskForm"
import Task from "./Task"

export default function Tasks({ tasks, projectId }) {

  const [openInput, setOpenInput] = useState(false)

  return (
    <div>
      <p className="text-4xl font-semibold mb-6">Tasks</p>
      <div className="flex flex-col gap-6 mb-10">
       {tasks?.map((task) => (
        <Task task={task} key={task.id} />
       ))}
      </div>
      {
        openInput ?
          <CreateTaskForm projectId={projectId} setOpenInput={setOpenInput} />
          :
          <AddTaskButton setOpenInput={setOpenInput} />
      }

    </div>
  )
}
