import { useUser } from "../features/auth/useUser";
import CreateProject from "../features/projects/CreateProject";
import NavList from "./NavList";
import Spinner from "./Spinner";

export default function Nav() {

  const { user, isPending } = useUser()

  if(isPending) return <Spinner />

  return (
    <aside className="row-span-full flex flex-col justify-center gap-2 p-2 border-r border-r-1 bg-tremor-background-muted dark:bg-dark-tremor-background-muted">
      <CreateProject userId={user.id} />
      <NavList />
    </aside>
  )
}
