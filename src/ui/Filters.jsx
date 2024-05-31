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
    <div className="flex items-center gap-2 bg-tremor-background-muted dark:bg-dark-tremor-background-muted p-1 rounded-md shadow-sm">
      {options.map((option) => (
        <button key={option.value} onClick={() => handleClick(option.value)} className={`${option.value === status ? "bg-tremor-brand text-tremor-brand-faint hover:bg-tremor-brand-emphasis" : "text-tremor-content-strong dark:text-dark-tremor-content-strong"} p-1 text-tremor-default rounded-md font-medium transition-colors`}>
          {option.label}
        </button>
      ))}
    </div>
  )
}
