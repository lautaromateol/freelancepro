/* eslint-disable react/prop-types */
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { RESULTS_PER_PAGE } from "../utils/constants";

export default function Paginate({count}) {

  console.log(count)

  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = Number(searchParams.get("page")) || 1

  const totalPages = Math.ceil(count / RESULTS_PER_PAGE)

  const start = (currentPage - 1) * RESULTS_PER_PAGE + 1

  const end = currentPage === totalPages ? count : currentPage * RESULTS_PER_PAGE

  const disabledPrev = currentPage === 1
  
  const disabledNext = currentPage === totalPages

  function handlePrevious() {
    if(disabledPrev) return
    searchParams.set("page", currentPage - 1)
    setSearchParams(searchParams)
  }

  function handleNext() {
    if(disabledNext) return
    searchParams.set("page", currentPage + 1)
    setSearchParams(searchParams)
  }

  return (
    <div className="flex justify-between items-center text-tremor-default">
      <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Showing <strong>{start}-{end}</strong> of <strong>{count}</strong> results</p>
      <div className="flex items-center justify-center gap-2">
        <button disabled={!count || disabledPrev} onClick={handlePrevious} className={`${disabledPrev ? "cursor-not-allowed text-tremor-content-strong dark:text-dark-tremor-content-strong" : "text-white dark bg-tremor-brand hover:bg-tremor-brand-emphasis transition-colors"} p-1 font-medium flex items-center gap-1 rounded-md`}>
          <HiOutlineChevronLeft />
          Previous
        </button>
        <button disabled={!count || disabledNext} onClick={handleNext} className={`${disabledNext ? "cursor-not-allowed text-tremor-content-strong dark:text-dark-tremor-content-strong" : "text-white bg-tremor-brand hover:bg-tremor-brand-emphasis transition-colors"} p-1 font-medium flex items-center gap-1 rounded-md`}>
          Next
          <HiOutlineChevronRight />
          </button>
      </div>
    </div>
  )
}
