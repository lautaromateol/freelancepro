import { useUser } from "../features/auth/useUser";
import CreateProject from "../features/projects/CreateProject"
import Logo from "./Logo";
import NavList from "./NavList";
import Spinner from "./Spinner";

export default function Nav() {

  const { user, isPending } = useUser()

  if(isPending) return <Spinner />

  return (
    <aside className="row-span-full flex flex-col gap-2 p-2 border-r border-r-1 bg-tremor-background-muted dark:bg-dark-tremor-background-muted">
      <Logo />
      <CreateProject userId={user.id} />
      <NavList />
    </aside>
  )
}
