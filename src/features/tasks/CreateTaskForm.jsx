import { useState } from "react"
import { useCreateTasks } from "./useCreateTasks"

/* eslint-disable react/prop-types */
export default function CreateTaskForm({ projectId, setOpenInput, status }) {

  const { createTask, isPending } = useCreateTasks()

  const [name, setName] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if(!name) {
      setOpenInput(false)
      return
    }

    const newTask = {
      name,
      user_id: 1,
      status,
      projectId
    }

    createTask(newTask, {
      onSuccess: () => setOpenInput(false)
    })

  }

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full text-2xl border-b-2 border-shade focus:border-primary focus:outline-none"
        placeholder="Enter task name"
        disabled={isPending}
        type="text" />
    </form>
  )
}
