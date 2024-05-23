/* eslint-disable react/prop-types */
export default function ProjectDescription({project}) {
  return (
    <div>
      <p className="text-4xl font-semibold mb-8">Notes</p>
      <article className="p-4 shadow-sm rounded-lg border border-1 text-2xl">
        {project.description}
      </article>
    </div>
  )
}
