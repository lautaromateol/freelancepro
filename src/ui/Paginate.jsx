/* eslint-disable react/prop-types */
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { RESULTS_PER_PAGE } from "../utils/constants";

export default function Paginate({count}) {

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
    <div className="flex justify-between items-center text-2xl">
      <p>Showing <strong>{start}-{end}</strong> of <strong>{count}</strong> results</p>
      <div className="flex items-center justify-center gap-2">
        <button disabled={disabledPrev} onClick={handlePrevious} className={`${disabledPrev ? "cursor-not-allowed" : " text-white bg-primary hover:bg-tint transition-colors"} p-2 font-medium flex items-center gap-2 rounded-lg`}>
          <HiOutlineChevronLeft />
          Previous
        </button>
        <button disabled={disabledNext} onClick={handleNext} className={`${disabledNext ? "cursor-not-allowed" : " text-white bg-primary hover:bg-tint transition-colors"} p-2 font-medium flex items-center gap-2 rounded-lg`}>
          Next
          <HiOutlineChevronRight />
          </button>
      </div>
    </div>
  )
}
