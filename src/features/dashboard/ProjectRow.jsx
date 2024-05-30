import { formatDate } from "../../utils/helpers"

/* eslint-disable react/prop-types */
export default function ProjectRow({project}) {

  return (
    <section>
      <div className="flex items-center justify-between mb-2 border-b py-2">
        <p className="text-tremor-content-emphasis text-tremor-default dark:text-dark-tremor-content-emphasis">{project.name}</p>
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Due Date {formatDate(new Date(project.finishDate))}</p>
      </div>

      <div className="flex flex-col gap-2">
      {project.pending.map((task) => (
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content" key={task.id}>- {task.name}</p>
      ))}
      </div>
    </section>
  )
}
