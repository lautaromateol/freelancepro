import { HiOutlineBriefcase, HiOutlineCheck, HiOutlineHome } from "react-icons/hi";
import NavItem from "./NavItem";

const pages = [
  {
    name: "Home",
    to: "/dashboard",
    icon: <HiOutlineHome />
  },
  {
    name: "Projects",
    to: "/projects",
    icon: <HiOutlineBriefcase />
  },
  {
    name: "Tasks",
    to: "/tasks",
    icon: <HiOutlineCheck />
  }
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

