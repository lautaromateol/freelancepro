import { formatDate } from "../../utils/helpers";
import { useUpdateTask } from "./useUpdateTask";

/* eslint-disable react/prop-types */
export default function Task({ task }) {

  const checked = task.status === "Complete"

  const { updateTask, isPending } = useUpdateTask()

  function handleChange() {
    const newTask = {
      ...task,
      status: checked ? "Incomplete" : "Complete"
    }

    updateTask({ id: task.id, newTask })
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <input disabled={isPending} onChange={handleChange} checked={checked} type="checkbox" name="check" id="check" />
        <div className="flex flex-col">
          <p className={`text-3xl ${checked && "line-through"}`}>{task.name}</p>
          <p className="text-xl text-gray-500">{task.status}</p>
        </div>
      </div>
      <div className="text-2xl text-gray-500">
        {formatDate(task.created_at)}
      </div>
    </div>
  )
}
