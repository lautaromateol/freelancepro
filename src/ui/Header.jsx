import { HiArrowTopRightOnSquare } from "react-icons/hi2"
import { useUser } from "../features/auth/useUser"
import { useSignOut } from "../features/auth/useSignOut"

export default function Header() {

  const { user } = useUser()

  const { signOut, isPending } = useSignOut()

  return (
    <header className="flex items-center justify-end gap-4 px-16 bg-slate-50 h-[8rem] border-b border-b-1">
      <p className="text-2xl text-primary">{user.user_metadata.fullName}</p>
      <button onClick={signOut} disabled={isPending}>
        <HiArrowTopRightOnSquare className="text-4xl text-primary hover:text-tint" />
      </button>
    </header>
  )
}
