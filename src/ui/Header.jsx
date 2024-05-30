import { HiArrowTopRightOnSquare } from "react-icons/hi2"
import { useUser } from "../features/auth/useUser"
import { useSignOut } from "../features/auth/useSignOut"

export default function Header() {

  const { user } = useUser()

  const { signOut, isPending } = useSignOut()

  return (
    <header className="flex items-center justify-end gap-4 px-10 bg-tremor-background-muted dark:bg-dark-tremor-background-muted h-[6rem] border-b border-b-1">
      <p className="text-tremor-default text-tremor-brand">{user.user_metadata.fullName || user.user_metadata.email}</p>
      <button onClick={signOut} disabled={isPending}>
        <HiArrowTopRightOnSquare className="text-xl text-primary hover:text-tint" />
      </button>
    </header>
  )
}
