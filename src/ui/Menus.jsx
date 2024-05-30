/* eslint-disable react/prop-types */
import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"
import { HiEllipsisHorizontal } from "react-icons/hi2"

const MenusContext = createContext()

export default function Menus({children}) {

  const [openId, setOpenId] = useState("")
  const [position, setPosition] = useState(null)
  
  const close = () => setOpenId("")
  const open = setOpenId

  return (
    <MenusContext.Provider value={{ openId, close, open, position, setPosition }}>
      {children}
    </MenusContext.Provider>
  )
}

function Menu({children}) {
  return(
    <div className="flex items-center justify-end">
      {children}
    </div>
  )
}

function Toggle({id}) {

  const { openId, open, close, setPosition } = useContext(MenusContext)

  function handleClick(e) {
    e.stopPropagation()
    
    const rect = e.target.closest("button").getBoundingClientRect()

    setPosition({
      x: window.innerWidth - rect.x - rect.width,
      y: rect.y + rect.height + 8
    })

    openId === "" || openId !== id ? open(id) : close()
  }

  return(
    <button>
      <HiEllipsisHorizontal className="text-tremor-title font-bold" onClick={handleClick} />
    </button>
  )

}

function List({children, id}) {

  const { openId, position } = useContext(MenusContext)

  const positionX = Math.ceil(position?.x)
  const positionY = Math.ceil(position?.y)

  
  if(openId === id) return(
    <ul style={{ right: `${positionX}px`, top: `${positionY}px` }} className="fixed bg-tremor-background dark:bg-dark-tremor-background rounded-md shadow-md h-[10rem] border p-4 flex flex-col justify-between">
      {children}
    </ul>
  )

}

function Button({children, onClick, icon}) {

  const { close } = useContext(MenusContext)

  function handleClick() {
    onClick?.()
    close()
  }
  
  return(
    <li className="hover:bg-tremor-background-subtle px-4 py-2 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
      <button className="flex items-center justify-center gap-2" onClick={handleClick}>
        {icon}
        {children}
      </button>
    </li>
  )

}

Menus.Menu = Menu
Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button