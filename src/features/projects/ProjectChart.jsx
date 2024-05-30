import { formatDate } from "../../utils/helpers"
import { isAfter, isBefore, isToday, startOfDay } from "date-fns"
import ProjectMenu from "./ProjectMenu"

/* eslint-disable react/prop-types */
export default function ProjectChart({ project }) {

  const inTime = project.status === "In Progress" && isBefore(startOfDay(new Date()), startOfDay(new Date(project.finishDate)))

  const outOfTime = project.status === "In Progress" && isAfter(startOfDay(new Date()), startOfDay(new Date(project.finishDate)))

  const deliverToday = project.status === "In Progress" && isToday(new Date(project.finishDate))

  return (
    <div className="flex flex-col justify-between bg-tremor-background-muted dark:bg-dark-tremor-background-muted rounded-md shadow-sm border border-1 h-[10rem] p-4">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{project.name}</h4>
          <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">{project.status}</span>
        </div>
        <ProjectMenu project={project} />
      </div>
      <div className="flex justify-between items-center">
        <div className="w-2/3">
          <p className="text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis mb-1">Status</p>
          <span className={`${inTime ? "bg-green-500" : outOfTime ? "bg-danger text-white" : deliverToday ? "bg-yellow-500" : "bg-green-500"} p-1 rounded-full text-tremor-label`}>{
            inTime
              ? "In time"
              : outOfTime
                ? "Out of time"
                : deliverToday
                  ? "Deliver today"
                  : "Delivered"
          }
          </span>
        </div>
        <div>
          <p className="text-tremor-default">Delivery Date</p>
          <span className="text-tremor-label text-tremor-content dark:text-dark-tremor-content">{formatDate(project.finishDate)}</span>
        </div>
      </div>
    </div>
  )
}
