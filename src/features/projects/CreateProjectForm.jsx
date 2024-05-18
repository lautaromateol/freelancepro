/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Label from "../../ui/Label"
import Input from "../../ui/Input"
import Textarea from "../../ui/Textarea"
import Button from "../../ui/Button"
import { useCreateProject } from "./useCreateProject"

export default function CreateProjectForm({ onCloseModal }) {

  const { formState, register, handleSubmit } = useForm()

  const { errors } = formState

  const { createProject, isPending } = useCreateProject()

  function onSubmit(data) {
    const newProject = {
      ...data,
      startDate: new Date(data.startDate),
      finishDate: new Date(data.finishDate),
      user_id: 1
    }
    createProject(newProject, {
      onSuccess: () => onCloseModal()
    })
  }

  return (
    <div className="p-16">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-5xl text-primary font-bold mb-2">Add New Project</h2>
        <span className="text-3xl font-thin text-tint">Fill out the details to create a new project.</span>
        <FormRow>
          <Label htmlFor="name">Project Name</Label>
          <Input type="text" id="name" register={register} disabled={isPending} />
          <div className="h-5 text-danger">
            {errors?.name?.message && <p>{errors.name.message}</p>}
          </div>
        </FormRow>
        <FormRow>
          <Label htmlFor="description">Description</Label>
          <Textarea rows={5} id="description" register={register} disabled={isPending} />
          <div className="h-5 text-danger">
            {errors?.name?.message && <p>{errors.description.message}</p>}
          </div>
        </FormRow>
        <div className="grid grid-cols-4 gap-4">
          <FormRow className="col-span-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input type="date" id="startDate" register={register} disabled={isPending} />
            <div className="h-5 text-danger">
            {errors?.name?.message && <p>{errors.startDate.message}</p>}
          </div>
          </FormRow>
          <FormRow className="col-span-2">
            <Label htmlFor="finishDate">Finish Date</Label>
            <Input type="date" id="finishDate" register={register} disabled={isPending} />
            <div className="h-5 text-danger">
            {errors?.name?.message && <p>{errors.finishDate.message}</p>}
          </div>
          </FormRow>
        </div>
        <FormRow>
          <Label htmlFor="budget">Budget</Label>
          <Input type="number" id="budget" min={1} register={register} disabled={isPending} />
          <div className="h-5 text-danger">
            {errors?.name?.message && <p>{errors.budget.message}</p>}
          </div>
        </FormRow>
        <Button disabled={isPending} type="submit">Add project</Button>
      </Form>
    </div>
  )
}
