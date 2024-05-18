/* eslint-disable react/prop-types */
export default function Button({children, onClick, type, disabled}) {
  return (
    <button disabled={disabled} type={type} className="p-4 text-slate-50 bg-primary text-2xl font-medium rounded-lg w-full hover:bg-tint transition-colors" onClick={onClick}>
      {children}
    </button>
  )
}
