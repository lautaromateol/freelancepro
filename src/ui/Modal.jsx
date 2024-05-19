/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import Overlay from "./Overlay";
import { HiXMark } from "react-icons/hi2";

const ModalContext = createContext()

export default function Modal({ children }) {

  const [name, setName] = useState("")

  const open = setName
  const close = () => setName("")

  return (
    <ModalContext.Provider value={{ open, close, name }}>
      {children}
    </ModalContext.Provider>
  )
}

function Opens({ children, opens }) {

  const { open } = useContext(ModalContext)

  return (
    <div>
      {cloneElement(children, { onClick: () => open(opens) })}
    </div>
  )
}

function Window({ children, window }) {

  const { name, close } = useContext(ModalContext)

  if (window !== name) return null

  return (
    <Overlay>
      <div className="overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 rounded-lg shadow-md px-6 py-4 transition-all">
        <button className="absolute right-6 top-6" onClick={close}><HiXMark className="text-4xl" /></button>
        {cloneElement(children, { onCloseModal: () => close() })}
      </div>
    </Overlay>
  )
}

Modal.Opens = Opens
Modal.Window = Window