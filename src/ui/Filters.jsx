/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom"

export default function Filters({ options }) {

  const [searchParams, setSearchParams] = useSearchParams()

  const status = searchParams.get("status") || options.at(0).value

  function handleClick(value) {
    const page = searchParams.get("page")
    if(page) searchParams.set("page", 1)
    searchParams.set("status", value)
    setSearchParams(searchParams)
  }

  return (
    <div className="flex items-center gap-2 bg-slate-50 p-2 bstatus bstatus-1 rounded-lg shadow-sm">
      {options.map((option) => (
        <button key={option.value} onClick={() => handleClick(option.value)} className={`${option.value === status && "bg-primary text-white hover:bg-tint"} p-2 text-2xl rounded-lg font-medium transition-colors`}>
          {option.label}
        </button>
      ))}
    </div>
  )
}
