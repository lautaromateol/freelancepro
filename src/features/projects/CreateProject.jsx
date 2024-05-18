import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

export default function CreateProject() {
  return (
    <div className="p-4">
      <Modal>
        <Modal.Opens opens="create-project">
          <Button>Create Project</Button>
        </Modal.Opens>
        <Modal.Window window="create-project">
          <CreateProjectForm />
        </Modal.Window>
      </Modal>
    </div>
  )
}
