/* eslint-disable react/prop-types */
export default function ProjectChart({project}) {

  const endDate = new Date(project?.finishDate)
  const day = endDate.getDate()
  const month = endDate.getMonth() + 1
  const year = endDate.getFullYear()
  const formatedDay = day.toString().padStart(2, "0")
  const formatedMonth = month.toString().padStart(2, "0")
  const formatedDate = `${formatedDay}/${formatedMonth}/${year}`

  return (
    <div className="flex flex-col justify-between bg-slate-50 rounded-lg shadow-sm border border-1 min-h-[16rem] p-8">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-4xl font-bold mb-1">{project.name}</h4>
          <span className="text-xl text-gray-600">{project.status}</span>
        </div>
        <button className="font-bold text-2xl">...</button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl">Progress</p>
          <span>Bar</span>
        </div>
        <div>
          <p className="text-2xl">Delivery Date</p>
          <span className="text-xl text-gray-600">{formatedDate}</span>
        </div>
      </div>
    </div>
  )
}
