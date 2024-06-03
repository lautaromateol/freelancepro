import { HiArrowTopRightOnSquare, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import { useUser } from "../features/auth/useUser"
import { useSignOut } from "../features/auth/useSignOut"
import { useDarkMode } from "../context/DarkModeContext"
import Logo from "./Logo"
import NavList from "./NavList"

export default function Header() {

  const { user } = useUser()

  const { signOut, isPending } = useSignOut()

  const { isDarkMode, setDarkMode } = useDarkMode()

  return (
    <header className="flex items-center justify-between px-10 bg-tremor-background-muted dark:bg-dark-tremor-background-muted h-[6rem] border-b border-b-1">
      <div className="flex items-center gap-4">
        <Logo />
        <NavList />
      </div>
      <div className="flex items-center gap-4">
        <p className="text-tremor-default text-tremor-brand">{user.user_metadata.fullName || user.user_metadata.email}</p>
        <button onClick={() => setDarkMode(!isDarkMode)}>
          {
            isDarkMode ?
              <HiOutlineSun className="text-tremor-brand" />
              :
              <HiOutlineMoon className="text-tremor-brand" />
          }
        </button>
        <button onClick={signOut} disabled={isPending}>
          <HiArrowTopRightOnSquare className="text-xl text-tremor-brand hover:text-tremor-brand-emphasis" />
        </button>
      </div>
    </header>
  )
}
