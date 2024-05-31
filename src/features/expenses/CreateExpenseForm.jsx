/* eslint-disable react/prop-types */
import { useForm, Controller } from "react-hook-form"
import { useParams } from "react-router-dom"
import { useCreateExpenses } from "./useCreateExpenses"
import { Select, SelectItem } from "@tremor/react"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Label from "../../ui/Label"
import Input from "../../ui/Input"
import Textarea from "../../ui/Textarea"
import Button from "../../ui/Button"

export default function CreateExpenseForm({ onCloseModal, userId }) {

  const { projectId } = useParams()

  const { formState, register, handleSubmit, control } = useForm()

  const { errors } = formState

  const { createExpense, isPending } = useCreateExpenses()

  function onSubmit(data) {
    console.log(data)
    const newExpense = {
      ...data,
      projectId,
      user_id: userId
    }

    createExpense(newExpense, {
      onSuccess: () => onCloseModal()
    })
  }

  return (
    <div className="p-8">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-tremor-metric text-tremor-brand dark:text-dark-tremor-brand font-bold">Add New Expense</h2>
        <span className="text-tremor-title font-thin text-tremor-brand-emphasis dark:text-dark-tremor-brand-emphasis">Fill out the details of the expense.</span>
        <FormRow>
          <Label htmlFor="description">Description</Label>
          <Textarea
            errorMessage={errors?.description?.message}
            rows={5}
            id="description"
            register={register}
            condition={{ required: "This field is required" }}
            disabled={isPending} />
        </FormRow>
        <FormRow>
          <Label htmlFor="budget">Ammount</Label>
          <Input
            errorMessage={errors?.ammount?.message}
            type="number" id="ammount"
            min={1} register={register}
            condition={{ required: "This field is required" }}
            disabled={isPending} />
        </FormRow>
        <FormRow>
          <Label htmlFor="category">Category</Label>
          <Controller
            name="category"
            control={control}
            defaultValue=""
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <Select
                {...field}
                id="category"
                error={errors?.category?.message ? true : false}
                errorMessage={errors?.category?.message}
              >
                <SelectItem value="Tools and Software">Tools and Software</SelectItem>
                <SelectItem value="Workspace">Workspace</SelectItem>
                <SelectItem value="Marketing and Advertising">Marketing and Advertising</SelectItem>
                <SelectItem value="Training and Professional Development">Training and Professional Development</SelectItem>
                <SelectItem value="Professional and Administrative Services">Professional and Administrative Services</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </Select>
            )}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="status">Status</Label>
          <Controller
            name="status"
            control={control}
            defaultValue=""
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <Select
                {...field}
                error={errors?.status?.message ? true : false}
                errorMessage={errors?.status?.message}
                id="status"
              >
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Paid">Paid</SelectItem>
              </Select>
            )}
          />
        </FormRow>
        <Button disabled={isPending} type="submit">Add expense</Button>
      </Form>
    </div>
  )
}
