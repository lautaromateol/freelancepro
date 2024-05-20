/* eslint-disable react/prop-types */
export default function Button({ children, onClick, type, disabled = false, size = "normal", style }) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${size === "normal" ? "px-4 py-2" : "p-2"} ${style === "danger" ? "bg-red-500 hover:bg-red-700" : "bg-primary hover:bg-tint"} text-slate-50 text-2xl rounded-lg w-full transition-colors`}
      onClick={onClick}>
      {children}
    </button>
  )
}
