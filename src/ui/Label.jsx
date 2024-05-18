/* eslint-disable react/prop-types */
export default function Label({children, htmlFor}) {
  return (
    <label className="text-2xl text-gray-800 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor={htmlFor}>
      {children}
    </label>
  )
}
