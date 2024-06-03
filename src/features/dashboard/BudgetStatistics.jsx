/* eslint-disable react/prop-types */

import BudgetDistribution from "./BudgetDistribution"
import RecentExpenses from "./RecentExpenses"

function calculateDistribution(expenses) {
  const categories = [...new Set(expenses.map(({category}) => category))]

  // const expensesAmmount = expenses.reduce((acc, obj) => acc + obj.ammount, 0)

  const categoriesExpenses = categories.map((category) => {
    return {
      name: category,
      value: 0
    }
  })

  expenses.forEach((expense) => {
    const index = categoriesExpenses.findIndex((obj) => obj.name === expense.category)

    categoriesExpenses[index].value += expense.ammount
  })

  return categoriesExpenses

  // return categoriesExpenses.map((obj) => {
  //   return {
  //     name: obj.category,
  //     value: (obj.ammount / expensesAmmount) * 100
  //   }
  // })
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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <RecentExpenses data={recentExpenses} />
      <BudgetDistribution data={expensesDistribution} />
    </section>
  )
}
