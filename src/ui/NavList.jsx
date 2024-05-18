import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineHome } from "react-icons/hi";
import NavItem from "./NavItem";

const pages = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: <HiOutlineHome />
  },
  {
    name: "Projects",
    to: "/projects",
    icon: <HiOutlineBriefcase />
  },
  {
    name: "Calendar",
    to: "/calendar",
    icon: <HiOutlineCalendar />
  },
]

export default function NavList() {
  return (
    <ul className="flex flex-col gap-4 p-4">
        {pages.map(({name, to, icon}) => (
          <NavItem to={to} icon={icon} key={name}>
            {name}
          </NavItem>
        ))}
    </ul>
  )
}

