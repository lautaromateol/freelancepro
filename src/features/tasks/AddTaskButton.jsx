import { HiOutlinePlusCircle } from "react-icons/hi";

/* eslint-disable react/prop-types */
export default function AddTaskButton({ setOpenInput }) {
  return (
    <button onClick={() => setOpenInput(true)} className="w-full flex items-center justify-center gap-2 text-2xl text-primary font-medium hover:text-tint transition-colors">
      <HiOutlinePlusCircle />
      Add Task
    </button>
  )
}
