/* eslint-disable react/prop-types */
export default function Label({children, htmlFor}) {
  return (
    <label className="text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis" htmlFor={htmlFor}>
      {children}
    </label>
  )
}
