/* eslint-disable react/prop-types */
export default function FormRow({children, className}) {
  return (
    <div className={`flex flex-col gap-2 ${className ? className : ""}`}>
      {children}
    </div>
  )
}
