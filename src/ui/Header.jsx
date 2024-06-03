import { HiArrowTopRightOnSquare, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import { HiMenu } from "react-icons/hi";
import { useUser } from "../features/auth/useUser"
import { useSignOut } from "../features/auth/useSignOut"
import { useDarkMode } from "../context/DarkModeContext"
import { useState } from "react";
import Logo from "./Logo"
import NavList from "./NavList"

export default function Header() {

  const { user } = useUser()

  const { signOut, isPending } = useSignOut()

  const { isDarkMode, setDarkMode } = useDarkMode()

  const [open, setIsOpen] = useState(false)

  return (
    <>
      <header className="hidden md:flex items-center justify-between px-10 bg-tremor-background-muted dark:bg-dark-tremor-background-muted h-[6rem] border-b border-b-1">
        <nav className="flex items-center gap-4">
          <Logo />
          <NavList />
        </nav>
        <div className="flex items-center gap-4">
          <p className="text-tremor-default text-tremor-brand dark:text-dark-tremor-brand">{user.user_metadata.fullName || user.user_metadata.email}</p>
          <button onClick={() => setDarkMode(!isDarkMode)}>
            {
              isDarkMode ?
                <HiOutlineSun className="text-tremor-brand dark:text-dark-tremor-brand" />
                :
                <HiOutlineMoon className="text-tremor-brand dark:text-dark-tremor-brand" />
            }
          </button>
          <button onClick={signOut} disabled={isPending}>
            <HiArrowTopRightOnSquare className="text-xl text-tremor-brand dark:text-dark-tremor-brand hover:text-tremor-brand" />
          </button>
        </div>
      </header>

      <header className="md:hidden sticky bg-tremor-background-muted dark:bg-dark-tremor-background-muted border-b">
        <div className="flex items-center justify-between py-2 px-5">
          <Logo />
          <div className="flex items-center justify-center gap-4">
            <p className="text-tremor-default text-tremor-brand dark:text-dark-tremor-brand">{user.user_metadata.fullName || user.user_metadata.email}</p>
            <button onClick={() => setDarkMode(!isDarkMode)}>
              {
                isDarkMode ?
                  <HiOutlineSun className="text-tremor-brand dark:text-dark-tremor-brand" />
                  :
                  <HiOutlineMoon className="text-tremor-brand dark:text-dark-tremor-brand" />
              }
            </button>
            <HiMenu onClick={() => setIsOpen(!open)} className="text-tremor-brand dark:text-dark-tremor-brand" />
          </div>
        </div>
        {open && <NavList setIsOpen={setIsOpen} />}
      </header>
    </>
  )
}
