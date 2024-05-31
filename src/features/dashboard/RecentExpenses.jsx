import { Card } from "../../ui/Card";
import ExpenseRow from "./ExpenseRow";

/* eslint-disable react/prop-types */
export default function RecentExpenses({ data }) {
  return (
    <Card height="h-[25rem]">
      <h3 className="text-tremor-title text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
        Recent Expenses
      </h3>
      <header className="grid grid-cols-[1fr_1fr_2fr_1fr] text-tremor-default text-tremor-content dark:text-dark-tremor-content border-b py-4 mt-6 mb-2">
        <p>Project</p>
        <p>Date</p>
        <p>Concept</p>
        <p>Quantity</p>
      </header>
      <div className="flex flex-col gap-6">
        {data.map((expense) => <ExpenseRow expense={expense} key={expense.id} />)}
      </div>
    </Card>
  )
}
