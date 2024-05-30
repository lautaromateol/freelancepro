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
    <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-md shadow-sm">
      {options.map((option) => (
        <button key={option.value} onClick={() => handleClick(option.value)} className={`${option.value === status && "bg-tremor-brand text-white hover:bg-tremor-brand-emphasis"} p-1 text-tremor-default rounded-md font-medium transition-colors`}>
          {option.label}
        </button>
      ))}
    </div>
  )
}
