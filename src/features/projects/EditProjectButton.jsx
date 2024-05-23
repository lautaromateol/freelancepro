/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import EditProjectForm from "./EditProjectForm";

export default function EditProjectButton({ project }) {
  return (
    <Modal>
      <Modal.Opens opens="edit-form">
        <Button>
          Edit
        </Button>
      </Modal.Opens>
      <Modal.Window window="edit-form">
        <EditProjectForm project={project} />
      </Modal.Window>
    </Modal>
  )
}
