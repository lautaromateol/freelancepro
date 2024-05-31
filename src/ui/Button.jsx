/* eslint-disable react/prop-types */
export default function Button({ children, onClick, type, disabled = false, size = "normal", style }) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${size === "normal" ? "px-2 py-1" : "p-1"} ${style === "danger" ? "bg-danger hover:bg-red-700" : "bg-tremor-brand dark:bg-dark-tremor-brand hover:bg-tremor-brand-emphasis dark:hover:bg-tremor-brand-emphasis"} text-slate-50 text-base rounded-md w-full transition-colors`}
      onClick={onClick}>
      {children}
    </button>
  )
}
