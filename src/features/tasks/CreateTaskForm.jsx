import { useCreateTasks } from "./useCreateTasks"
import { useForm } from "react-hook-form"
import Input from "../../ui/Input"

/* eslint-disable react/prop-types */
export default function CreateTaskForm({ projectId, setOpenInput, status, userId }) {

  const { createTask, isPending } = useCreateTasks()

  const { register, handleSubmit } = useForm()

  function onSubmit({name}) {
    if (!name) {
      setOpenInput(false)
      return
    }

    const newTask = {
      name,
      user_id: userId,
      status,
      projectId
    }

    createTask(newTask, {
      onSuccess: () => setOpenInput(false)
    })

  }

  return (
    <form className="flex items-center" onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        id="name"
        placeholder="Enter task name"
        disabled={isPending}
        type="text"
      />
    </form>
  )
}



