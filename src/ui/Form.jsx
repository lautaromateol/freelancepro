/* eslint-disable react/prop-types */
export default function Form({children, onSubmit}) {
  return (
    <form className="w-[40rem] bg-slate-50 space-y-8" onSubmit={onSubmit}>
      {children}
    </form>
  )
}