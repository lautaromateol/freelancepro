import { formatDate } from "../../utils/helpers"

/* eslint-disable react/prop-types */
export default function ProjectRow({project}) {

  return (
    <section>
      <div className="flex items-center justify-between mb-2 border-b py-4">
        <p className="text-3xl">{project.name}</p>
        <p className="text-2xl text-gray-500">Due Date {formatDate(new Date(project.finishDate))}</p>
      </div>

      <div className="flex flex-col gap-2">
      {project.pending.map((task) => (
        <p className="text-2xl text-gray-500" key={task.id}>- {task.name}</p>
      ))}
      </div>
    </section>
  )
}
