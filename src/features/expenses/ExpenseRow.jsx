import { useUpdateExpense } from "./useUpdateExpense";
import { formatDate } from "../../utils/helpers";
import Table from "../../ui/Table";

/* eslint-disable react/prop-types */
export default function ExpenseRow({ expense }) {

  const checked = expense.status === "Paid"

  const { updateExpense, isPending } = useUpdateExpense()

  function handleChange() {
    const newExpense = {
      ...expense,
      status: checked ? "Pending" : "Paid"
    }
    updateExpense({ id: expense.id, newExpense })
  }

  return (
    <Table.Row>
      <div>{formatDate(expense.created_at)}</div>
      <div>{expense.description}</div>
      <div>{expense.ammount.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
      <div className="text-white">
        <span className={`${checked ? "bg-green-500" : "bg-yellow-500"} inline-block text-center w-2/3 px-2 py-1 rounded-full`}>
          {expense.status}
        </span>
      </div>
      <div>
        <input disabled={isPending} onChange={handleChange} checked={checked} type="checkbox" />
      </div>
    </Table.Row>
  )
}
