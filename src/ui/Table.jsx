/* eslint-disable react/prop-types */
import { createContext, useContext } from "react"

const TableContext = createContext()

const commonRow = "grid gap-x-10 items-center"

export default function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="border-2 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong rounded-md h-[20rem] overflow-y-auto">
        {children}
      </div>
    </TableContext.Provider>
  )
}

function Header({ children }) {

  const { columns } = useContext(TableContext)

  return (
    <header role="row" className={`${commonRow} ${columns} p-4 bg-tremor-background-muted dark:bg-dark-tremor-background-muted border-b-2 uppercase tracking-wider font-medium`}>
      {children}
    </header>
  )

}

function Row({ children }) {

  const { columns } = useContext(TableContext)

  return (
    <div role="row" className={`${commonRow} ${columns} bg-tremor-background dark:bg-dark-tremor-background p-4 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong`}>
      {children}
    </div>
  )

}

function Body({ data, render }) {

  if(!data.length) return(
    <section className="text-center font-medium text-tremor-title dark:text-dark-tremor-content-strong overflow-y-auto m-8">
      No data found.
    </section>
  )

  return (
    <section className="my-2">
      {data.map(render)}
    </section>
  )

}

function Footer({children}) {
  return(
    <footer className="bg-slate-50 flex justify-start border-t-2 p-4">
      {children}
    </footer>
  )
}

Table.Header = Header
Table.Row = Row
Table.Body = Body
Table.Footer = Footer