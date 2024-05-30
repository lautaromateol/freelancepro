/* eslint-disable react/prop-types */
export default function PageHeading({ children }) {
  return (
    <h2 className="font-semibold text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong mb-2">
      {children}
    </h2>
  )
}
