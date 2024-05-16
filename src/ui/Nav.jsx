import Logo from "./Logo";
import NavList from "./NavList";

export default function Nav() {
  return (
    <aside className="row-span-full flex flex-col gap-4 p-4 border-r border-r-1 bg-slate-50">
      <Logo />
      <NavList />
    </aside>
  )
}
