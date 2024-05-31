/* eslint-disable react/prop-types */
import { Select as SelectInput } from "@tremor/react"

export default function Select({ children, register, id, disabled, condition }) {
  return (
    <SelectInput
      {...register(id, condition)}
      id={id}
      disabled={disabled}
      >
      {children}
    </SelectInput>
  )
}
