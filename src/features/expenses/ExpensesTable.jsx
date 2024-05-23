/* eslint-disable react/prop-types */
import Table from "../../ui/Table"
import ExpenseRow from "./ExpenseRow"

export default function ExpensesTable({expenses}) {
  return (
    <Table columns={"grid-cols-[1fr_3fr_1fr_1fr_1fr]"}>
      <Table.Header>
        <div>Date</div>
        <div>Description</div>
        <div>Ammount</div>
        <div>Status</div>
        <div>Paid</div>
      </Table.Header>
      <Table.Body data={expenses} render={(expense) => <ExpenseRow key={expense.id} expense={expense} />} />
    </Table>
  )
}
