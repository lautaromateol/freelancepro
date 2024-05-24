import { formatDate } from "../../utils/helpers";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

/* eslint-disable react/prop-types */
export default function Task({ task }) {

  const checked = task.status === "Done"

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0 : 1,
    zIndex: isDragging ? 1000 : "auto",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="flex items-center justify-between rounded-lg shadow-sm p-8 bg-slate-50">
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
