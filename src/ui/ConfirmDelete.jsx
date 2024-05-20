import Button from "./Button";

/* eslint-disable react/prop-types */
export default function ConfirmDelete({resourceName, onClick, onCloseModal}) {

  function handleClick() {
    onClick()
    onCloseModal()
  }

  return (
    <div className="h-[20rem] w-[40rem] flex flex-col justify-evenly gap-4 p-8">
      <p className="font-medium text-3xl">Are you sure that you want to delete this {resourceName}? This action is irreversible.</p>
      <div className="flex items-center justify-center gap-4">
        <Button style="danger" onClick={handleClick}>Delete</Button>
        <Button onClick={onCloseModal}>Cancel</Button>
      </div>
    </div>
  )
}
