/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

export default function NavItem({children, to, setIsOpen}) {
  return (
      <li onClick={() => setIsOpen(false)} className="text-tremor-default">
        <NavLink
          className={({ isActive }) => {
            return `${isActive ? "text-tremor-brand-emphasis dark:text-dark-tremor-brand-emphasis" : "text-tremor-brand dark:text-dark-tremor-brand"} text-tremor-title md:text-tremor-default`
          }}
          to={to}>
          {children}
        </NavLink>
      </li>
  )
}
