/* eslint-disable react/prop-types */
export default function Select({ children, register, id, disabled, condition }) {
  return (
    <select
      {...register(id, condition)}
      id={id}
      disabled={disabled}
      className="flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
      {children}
    </select>
  )
}
