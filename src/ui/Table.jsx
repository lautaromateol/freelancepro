/* eslint-disable react/prop-types */
import { createContext, useContext } from "react"

// const Footer = styled.footer`
//   background-color: var(--color-grey-50);
//   display: flex;
//   justify-content: center;
//   padding: 1.2rem;

//   /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
//   &:not(:has(*)) {
//     display: none;
//   }
// `;

// const Empty = styled.p`
//   font-size: 1.6rem;
//   font-weight: 500;
//   text-align: center;
//   margin: 2.4rem;
// `;


const TableContext = createContext()

const commonRow = "grid gap-x-10 items-center"

export default function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="border-2 text-xl rounded-sm overflow-hidden">
        {children}
      </div>
    </TableContext.Provider>
  )
}

function Header({ children }) {

  const { columns } = useContext(TableContext)

  return (
    <header role="row" className={`${commonRow} ${columns} py-6 px-8 bg-slate-50 border-b-2 uppercase tracking-wider font-medium`}>
      {children}
    </header>
  )

}

function Row({ children }) {

  const { columns } = useContext(TableContext)

  return (
    <div role="row" className={`${commonRow} ${columns} bg-white py-6 px-8`}>
      {children}
    </div>
  )

}

function Body({ data, render }) {

  return (
    <section className="my-2">
      {data.map(render)}
    </section>
  )

}

Table.Header = Header
Table.Row = Row
Table.Body = Body