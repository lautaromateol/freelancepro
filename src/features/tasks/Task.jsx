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
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="flex items-center justify-between rounded-md shadow-sm p-4 bg-tremor-background-muted dark:bg-dark-tremor-brand-muted">
      <div className="flex flex-col items-start">
        <p className={`text-tremor-title ${checked && "line-through"}`}>{task.name}</p>
        <p className="text-tremor-label text-tremor-content dark:text-dark-tremor-content">{task.status}</p>
      </div>
      <time className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        {formatDate(task.created_at)}
      </time>
    </div>
  )
}
