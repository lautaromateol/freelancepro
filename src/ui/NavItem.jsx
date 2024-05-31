/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

export default function NavItem({children, icon, to}) {
  return (
      <li className="p-2 text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong hover:text-tremor-brand rounded-r-full dark:hover:text-dark-tremor-brand hover:bg-tremor-background-subtle dark:hover:bg-dark-tremor-background-subtle">
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
