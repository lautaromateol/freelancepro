/* eslint-disable react/prop-types */
export default function Button({ children, onClick, type, disabled = false, size = "normal", flex = false }) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${flex && "flex items-center justify-center gap-2"} ${size === "normal" ? "py-4 px-2" : "p-2"} text-slate-50 bg-primary text-2xl font-medium rounded-lg w-full hover:bg-tint transition-colors`}
      onClick={onClick}>
      {children}
    </button>
  )
}
