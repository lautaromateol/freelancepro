import ExpenseRow from "./ExpenseRow";

/* eslint-disable react/prop-types */
export default function RecentExpenses({ data }) {
  return (
    <div className="rounded-lg border p-8 bg-slate-50">
      <h2 className='text-3xl font-semibold text-center mb-8'>Recent Expenses</h2>
      <div className="grid grid-cols-[1fr_1fr_2fr_1fr] text-2xl text-gray-500 border-b py-4 mb-2">
        <p>Project</p>
        <p>Date</p>
        <p>Concept</p>
        <p>Quantity</p>
      </div>
      <div className="flex flex-col gap-6">
        {data.map((expense) => <ExpenseRow expense={expense} key={expense.id} />)}
      </div>
    </div>
  )
}
