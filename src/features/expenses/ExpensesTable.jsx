/* eslint-disable react/prop-types */
import Spinner from "../../ui/Spinner"
import Table from "../../ui/Table"
import ExpenseRow from "./ExpenseRow"
import { useExpenses } from "./useExpenses"

export default function ExpensesTable() {

  const { expenses, isPending } = useExpenses()

  if(isPending) return <Spinner />

  return (
    <Table columns={"grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr]"}>
      <Table.Header>
        <div>Date</div>
        <div>Description</div>
        <div>Ammount</div>
        <div>Category</div>
        <div>Status</div>
        <div>Paid</div>
      </Table.Header>
      <Table.Body data={expenses} render={(expense) => <ExpenseRow key={expense.id} expense={expense} />} />
    </Table>
  )
}
