/* eslint-disable react/prop-types */
import { useProject } from "./useProject";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import Spinner from "../../ui/Spinner";

export default function EditProjectButton() {

  const { project, isPending }  = useProject()

  if(isPending) return <Spinner />

  return (
    <Modal>
      <Modal.Opens opens="edit-form">
        <Button>
          Edit
        </Button>
      </Modal.Opens>
      <Modal.Window window="edit-form">
        <CreateProjectForm projectToEdit={project} />
      </Modal.Window>
    </Modal>
  )
}
