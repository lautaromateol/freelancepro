/* eslint-disable react/prop-types */
export default function ProjectDescription({project}) {
  return (
    <div>
      <p className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mb-4">Notes</p>
      <article className="p-2 shadow-sm rounded-md border border-1 text-tremor-default dark:text-dark-tremor-content-emphasis">
        {project.description}
      </article>
    </div>
  )
}
