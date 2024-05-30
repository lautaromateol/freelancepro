/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/helpers"

export default function ExpenseRow({ expense }) {
  return (
    <div className="grid grid-cols-[1fr_1fr_2fr_1fr] text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-b py-4">
      <div>{expense.project}</div>
      <div>{formatDate(expense.created_at)}</div>
      <div>{expense.description}</div>
      <div>{expense.ammount.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
    </div>
  )
}
