import { HiOutlinePlusCircle } from "react-icons/hi";

/* eslint-disable react/prop-types */
export default function AddTaskButton({ setOpenInput }) {
  return (
    <button onClick={() => setOpenInput(true)} className="flex items-center justify-center gap-1 text-tremor-default text-tremor-brand font-medium hover:text-tremor-brand-emphasis transition-colors">
      <HiOutlinePlusCircle />
      Add Task
    </button>
  )
}
