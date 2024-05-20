/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

export default function NavItem({children, icon, to}) {
  return (
      <li className="p-4 text-3xl text-slate-800 rounded-r-full hover:bg-slate-100 hover:text-indigo-600">
        <NavLink
          className={({ isActive }) => {
            return `flex items-center justify-start gap-4 ${isActive && "text-indigo-600"}`
          }}
          to={to}>
          {icon}
          {children}
        </NavLink>
      </li>
  )
}
