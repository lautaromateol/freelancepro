/* eslint-disable react/prop-types */
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useCreateProject } from "./useCreateProject"
import { useUpdateProject } from "./useUpdateProject"
import { isBefore } from "date-fns"
import { Textarea } from "@tremor/react"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Label from "../../ui/Label"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import toast from "react-hot-toast"

export default function CreateProjectForm({ onCloseModal, userId, projectToEdit = {} }) {

  const { createProject, isPending: isCreatingProject } = useCreateProject()

  const { updateProject, isPending: isUpdatingProject } = useUpdateProject()

  const { id: editId, ...editValues } = projectToEdit

  const isEditSession = Boolean(editId)

  const [checked, setChecked] = useState(isEditSession ? projectToEdit?.budget === 0 : false)

  const { formState, register, handleSubmit, getValues, control } = useForm({
    defaultValues: isEditSession ? editValues : {}
  })

  const { errors } = formState

  const isPending = isCreatingProject || isUpdatingProject

  function onSubmit(data) {

    isEditSession ?
      updateProject({ data: { ...data, budget: checked ? 0 : data.budget }, id: editId }, {
        onSuccess: () => {
          toast.success("Project updated successfully!")
          onCloseModal()
        }
      })
      :
      createProject({
        ...data,
        startDate: new Date(data.startDate),
        finishDate: new Date(data.finishDate),
        budget: checked ? 0 : data.budget,
        user_id: userId
      }, {
        onSuccess: () => onCloseModal()
      })
  }

  return (
    <div className="px-4 py-2">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-tremor-metric text-tremor-brand dark:text-dark-tremor-brand font-bold">Add New Project</h2>
        <span className="text-tremor-title font-thin text-tremor-brand-emphasis dark:text-dark-tremor-brand-emphasis">Fill out the details to create a new project.</span>
        <FormRow>
          <Label htmlFor="name">Project Name</Label>
          <Input
            type="text"
            id="name"
            register={register}
            condition={{ required: "This field is required" }}
            disabled={isPending}
            errorMessage={errors?.name?.message}
            placeholder="Enter project name" />
        </FormRow>
        <FormRow>
          <Label htmlFor="description">Notes</Label>
          <Controller
            name="description"
            control={control}
            defaultValue={isEditSession ? editValues.description : ""}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <Textarea
                {...field}
                rows={5}
                id="description"
                disabled={isPending}
                error={errors?.description?.message ? true : false}
                errorMessage={errors?.description?.message}
                placeholder="Enter important information about the project" />
            )}
          />
        </FormRow>
        <div className="grid grid-cols-4 gap-4">
          <FormRow className="col-span-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              type="date"
              id="startDate"
              register={register}
              condition={{
                required: "This field is required",
                validate: (value) => isBefore(new Date(value), new Date(getValues().finishDate)) || "Start date must be before delivery date"
              }}
              errorMessage={errors?.startDate?.message}
              disabled={isPending} />
          </FormRow>
          <FormRow className="col-span-2">
            <Label htmlFor="finishDate">Finish Date</Label>
            <Input
              type="date"
              id="finishDate"
              register={register}
              condition={{ required: "This field is required" }}
              disabled={isPending}
              errorMessage={errors?.finishDate?.message}
              placeholder="Enter end date" />
          </FormRow>
        </div>
        <FormRow>
          <Label htmlFor="budget">Budget</Label>
          <Input
            type="number"
            id="budget"
            min={1}
            disabled={isPending || checked}
            register={register}
            condition={{ required: checked ? false : "This field is required" }}
            errorMessage={errors?.budget?.message}
            placeholder="Enter project budget" />
          <div className="flex items-center justify-start gap-2">
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            <Label>No Budget</Label>
          </div>
        </FormRow>
        <Button disabled={isPending} type="submit">Add project</Button>
      </Form>
    </div>
  )
}
