import { formatDate } from "../../utils/helpers";
import ProgressBar from "../tasks/ProgressBar";

/* eslint-disable react/prop-types */
export default function ProjectInfo({ project, tasks }) {

  const progress = !tasks.length ? 0 : ((tasks.filter(({status}) => status === "Complete").length) / tasks.length) * 100

  return (
    <div className="grid grid-cols-2 gap-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-2xl text-gray-500">Budget</p>
        <p className="text-3xl">{project.budget.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl text-gray-500">Start Date</p>
        <p className="text-3xl">{formatDate(project.startDate)}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl text-gray-500">End Date</p>
        <p className="text-3xl">{formatDate(project.finishDate)}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl text-gray-500">Progress</p>
        <ProgressBar progress={progress} />
      </div>
    </div>
  )
}
