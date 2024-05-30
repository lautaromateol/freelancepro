/* eslint-disable react/prop-types */
import { TextInput } from '@tremor/react';

export default function Input({ type, id, register, disabled, placeholder, condition, min, errorMessage }) {
  return (
    <TextInput
      {...register(id, condition)}
      className="w-full"
      type={type}
      placeholder={placeholder}
      min={min}
      error={errorMessage ? true : false}
      errorMessage={errorMessage}
      disabled={disabled}
    />
  )
}



