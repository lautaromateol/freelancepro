/* eslint-disable react/prop-types */
export default function Form({children, onSubmit}) {
  return (
    <form className="w-[20rem] space-y-4" onSubmit={onSubmit}>
      {children}
    </form>
  )
}