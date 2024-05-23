import { formatDate } from "../../utils/helpers";
import { useUpdateTask } from "./useUpdateTask";

/* eslint-disable react/prop-types */
export default function Task({ task }) {

  const checked = task.status === "Done"

  const { updateTask, isPending: isUpdatingTask } = useUpdateTask()

  const isPending = isUpdatingTask

  function handleChange() {

  }

  return (
    <div className="flex items-center justify-between rounded-lg shadow-sm p-8 bg-slate-50">
      <div className="flex flex-col items-start">
        <p className={`text-3xl ${checked && "line-through"}`}>{task.name}</p>
        <p className="text-xl text-gray-500">{task.status}</p>
      </div>
      <time className="text-2xl text-gray-500">
        {formatDate(task.created_at)}
      </time>
    </div>
  )
}
