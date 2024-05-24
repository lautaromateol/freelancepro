import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import AddTaskButton from "./AddTaskButton";
import CreateTaskForm from "./CreateTaskForm";

/* eslint-disable react/prop-types */
export default function TasksContainer({ projectId, title, render, data }) {

  const [openInput, setOpenInput] = useState(false)

  const { setNodeRef } = useDroppable({
    id: title
  })

  return (
    <div ref={setNodeRef} className="h-[30rem] rounded-lg shadow-sm p-8 flex flex-col gap-4 text-center border overflow-y-auto">
      <p className="text-2xl font-semibold mb-4">{title}</p>
      {data.map(render)}
      {
        openInput ?
          <CreateTaskForm status={title} projectId={projectId} setOpenInput={setOpenInput} />
          :
          <AddTaskButton setOpenInput={setOpenInput} />
      }
    </div>
  )
}
