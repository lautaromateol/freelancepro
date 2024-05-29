/* eslint-disable react/prop-types */

export default function SummaryChart({ title, data, icon }) {
  return (
    <div className="flex flex-col h-[12rem] justify-between bg-slate-50 rounded-lg border p-8">
      <div className="flex items-center justify-between">
        <p className="text-3xl">{title}</p>
        <span className="text-3xl">
          {icon}
        </span>
      </div>
      <p className="text-4xl font-bold">{data}</p>
    </div>
  )
}
