import ProjectRow from "./ProjectRow";

/* eslint-disable react/prop-types */
export default function PendingTasks({ data }) {

  return (
    <div className="rounded-lg border bg-slate-50 p-8 overflow-y-auto">
      <h2 className='text-3xl font-semibold text-center mb-8'>Pending Tasks</h2>
      <div className="flex flex-col gap-6">
        {data.map((project) => <ProjectRow project={project} key={project.id}/>)}
      </div>
    </div>
  )
}