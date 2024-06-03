/* eslint-disable react/prop-types */
import { useUser } from "../auth/useUser";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import CreateProjectForm from "./CreateProjectForm";

export default function CreateProject() {

  const { user, isPending } = useUser()

  if(isPending) return <Spinner />

  return (
    <div className="p-4">
      <Modal>
        <Modal.Opens opens="create-project">
          <Button>Create Project</Button>
        </Modal.Opens>
        <Modal.Window window="create-project">
          <CreateProjectForm userId={user.id} />
        </Modal.Window>
      </Modal>
    </div>
  )
}
