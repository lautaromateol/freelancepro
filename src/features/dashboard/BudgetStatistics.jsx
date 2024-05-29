/* eslint-disable react/prop-types */

import BudgetDistribution from "./BudgetDistribution"
import RecentExpenses from "./RecentExpenses"

function calculateDistribution(expenses) {
  const categories = [...new Set(expenses.map(({category}) => category))]

  const expensesAmmount = expenses.reduce((acc, obj) => acc + obj.ammount, 0)

  const categoriesExpenses = categories.map((category) => {
    return {
      category,
      ammount: 0
    }
  })

  expenses.forEach((expense) => {
    const index = categoriesExpenses.findIndex((obj) => obj.category === expense.category)

    categoriesExpenses[index].ammount += expense.ammount
  })

  return categoriesExpenses.map((obj) => {
    return {
      category: obj.category,
      distribution: (obj.ammount / expensesAmmount) * 100
    }
  })
}

function getRecentExpenses(projects, expenses) {
  return expenses.map((expense) => {
    return {
      ...expense,
      project: projects.find((project) => project.id === expense.projectId).name
    }
  })
}


export default function BudgetStatistics({ projects, expenses }) {

  const expensesDistribution = calculateDistribution(expenses)

  const recentExpenses = getRecentExpenses(projects, expenses)

  return (
    <section className="grid grid-cols-2 gap-4">
      <RecentExpenses data={recentExpenses} />
      <BudgetDistribution data={expensesDistribution} />
    </section>
  )
}
