import Spinner from "../../ui/Spinner";
import { formatDate } from "../../utils/helpers";
import ProgressBar from "../tasks/ProgressBar";
import { useTasks } from "../tasks/useTasks";
import { useProject } from "./useProject";

/* eslint-disable react/prop-types */
export default function ProjectInfo() {

  const { tasks, isPending: isLoadingTasks } = useTasks()

  const { project, isPending: isLoadingProjects }  = useProject()

  const isPending = isLoadingProjects || isLoadingTasks

  if(isPending) return <Spinner />

  const progress = !tasks.length ? 0 : ((tasks.filter(({status}) => status === "Done").length) / tasks.length) * 100

  return (
    <div className="grid grid-cols-2 gap-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Budget</p>
        <p className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong">{project.budget.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Start Date</p>
        <p className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong">{formatDate(project.startDate)}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">End Date</p>
        <p className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong">{formatDate(project.finishDate)}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Progress</p>
        <ProgressBar progress={progress} />
      </div>
    </div>
  )
}
