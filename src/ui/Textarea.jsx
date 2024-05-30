/* eslint-disable react/prop-types */
import { Textarea as TextareaInput } from '@tremor/react';

export default function Textarea({ id, rows, register, condition, placeholder, errorMessage, disabled }) {
  return (
    <TextareaInput
      {...register(id, condition)}
      className="w-full"
      rows={rows}
      id={id}
      error={errorMessage ? true : false}
      errorMessage={errorMessage}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}