/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

export default function EditProjectButton({ project }) {
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
