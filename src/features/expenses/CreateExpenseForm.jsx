/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Label from "../../ui/Label"
import Input from "../../ui/Input"
import Select from "../../ui/Select"
import Textarea from "../../ui/Textarea"
import Button from "../../ui/Button"
import { useParams } from "react-router-dom"
import { useCreateExpenses } from "../expenses/useCreateExpenses"

export default function CreateExpenseForm({ onCloseModal }) {

  const { projectId } = useParams()

  const { formState, register, handleSubmit } = useForm()

  const { errors } = formState

  const { createExpense, isPending } = useCreateExpenses()

  function onSubmit(data) {
    const newExpense = {
      ...data,
      projectId,
      user_id: 1
    }

    createExpense(newExpense, {
      onSuccess: () => onCloseModal()
    })
  }

  return (
    <div className="p-16">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-5xl text-primary font-bold mb-2">Add New Expense</h2>
        <span className="text-3xl font-thin text-tint">Fill out the details of the expense.</span>
        <FormRow>
          <Label htmlFor="description">Description</Label>
          <Textarea rows={5} id="description" register={register} disabled={isPending} />
          <div className="h-5 text-danger">
            {errors?.description?.message && <p>{errors.description.message}</p>}
          </div>
        </FormRow>
        <FormRow>
          <Label htmlFor="budget">Ammount</Label>
          <Input type="number" id="ammount" min={1} register={register} disabled={isPending} />
          <div className="h-5 text-danger">
            {errors?.ammount?.message && <p>{errors.ammount.message}</p>}
          </div>
        </FormRow>
        <FormRow>
          <Label htmlFor="status">Status</Label>
          <Select id="status" disabled={isPending} register={register}>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
          </Select>
        </FormRow>
        <Button disabled={isPending} type="submit">Add expense</Button>
      </Form>
    </div>
  )
}
