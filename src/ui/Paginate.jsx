/* eslint-disable react/prop-types */
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { RESULTS_PER_PAGE } from "../utils/constants";
import Button from "./Button";

export default function Paginate({count}) {

  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = Number(searchParams.get("page")) || 1

  const totalPages = Math.ceil(count / RESULTS_PER_PAGE)

  const start = (currentPage - 1) * RESULTS_PER_PAGE + 1

  const end = currentPage === totalPages ? count : currentPage * RESULTS_PER_PAGE

  function handlePrevious() {
    if(currentPage === 1) return
    searchParams.set("page", currentPage - 1)
    setSearchParams(searchParams)
  }

  function handleNext() {
    if(currentPage === totalPages) return
    searchParams.set("page", currentPage + 1)
    setSearchParams(searchParams)
  }

  return (
    <div className="flex justify-between items-center text-2xl">
      <p>Showing <strong>{start}-{end}</strong> of <strong>{count}</strong> results</p>
      <div className="flex items-center gap-2">
        <Button onClick={handlePrevious} flex={true} size="small">
          <HiOutlineChevronLeft />
          Previous
        </Button>
        <Button onClick={handleNext} flex={true} size="small">
          Next
          <HiOutlineChevronRight />
          </Button>
      </div>
    </div>
  )
}
