/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

export default function NavItem({children, icon, to}) {
  return (
      <li className="p-2 text-xl text-slate-800 rounded-r-full hover:bg-slate-100 hover:text-tremor-brand-emphasis">
        <NavLink
          className={({ isActive }) => {
            return `flex items-center justify-start gap-4 ${isActive && "text-tremor-brand"}`
          }}
          to={to}>
          {icon}
          {children}
        </NavLink>
      </li>
  )
}
