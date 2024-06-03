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

export default function NavList() {
  return (
    <ul className="flex gap-2">
        {pages.map(({name, to}) => (
          <NavItem to={to} key={name}>
            {name}
          </NavItem>
        ))}
    </ul>
  )
}

