/* eslint-disable react/prop-types */
import NavItem from "./NavItem";

const pages = [
  {
    name: "Dashboard",
    to: "/dashboard",
  },
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Calendar",
    to: "/calendar",
  },
]

export default function NavList({ setIsOpen }) {
  return (
    <>
      <ul className="hidden md:flex gap-2">
        {pages.map(({ name, to }) => (
          <NavItem to={to} key={name}>
            {name}
          </NavItem>
        ))}
      </ul>
      <ul className="md:hidden flex flex-col items-center justify-center gap-12 min-h-screen w-full bg-tremor-background-muted dark:bg-dark-tremor-background-muted">
        {pages.map(({ name, to }) => (
          <NavItem setIsOpen={setIsOpen} to={to} key={name}>
            {name}
          </NavItem>
        ))}
      </ul>
    </>
  )
}

