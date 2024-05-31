import { Card } from "../../ui/Card";
import ProjectRow from "./ProjectRow";

/* eslint-disable react/prop-types */
export default function PendingTasks({ data }) {

  return (
    <Card height="h-[40rem]">
      <h3 className="text-tremor-title text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
        Pending Tasks
      </h3>
      <div className="flex flex-col gap-6 mt-6">
        {data.map((project) => <ProjectRow project={project} key={project.id} />)}
      </div>
    </Card>
  )
}