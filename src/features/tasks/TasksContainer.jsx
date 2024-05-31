import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import AddTaskButton from "./AddTaskButton";
import CreateTaskForm from "./CreateTaskForm";

/* eslint-disable react/prop-types */
export default function TasksContainer({ projectId, title, render, data, userId }) {

  const [openInput, setOpenInput] = useState(false)

  const { setNodeRef } = useDroppable({
    id: title
  })

  return (
    <div ref={setNodeRef} className="h-[20rem] bg-tremor-background dark:bg-dark-tremor-background rounded-md shadow-sm p-4 flex flex-col gap-2 text-center border overflow-y-auto">
      <p className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mb-4">{title}</p>
      {data.map(render)}
      {
        openInput ?
          <CreateTaskForm userId={userId} status={title} projectId={projectId} setOpenInput={setOpenInput} />
          :
          <AddTaskButton setOpenInput={setOpenInput} />
      }
    </div>
  )
}
