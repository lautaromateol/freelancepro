/* eslint-disable react/prop-types */
import { useDeleteProject } from "./useDeleteProject";
import { useNavigate } from "react-router-dom";
import { useProject } from "./useProject";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Spinner from "../../ui/Spinner";

export default function DeleteProjectButton() {

  const navigate = useNavigate()

  const { deleteProject, isPending: isDeleting } = useDeleteProject()

  const { project, isPending }  = useProject()

  if(isPending) return <Spinner />

  return (
    <Modal>
      <Modal.Opens opens="delete-modal">
        <Button disabled={isDeleting} style="danger">
          Delete
        </Button>
      </Modal.Opens>
      <Modal.Window window="delete-modal">
        <ConfirmDelete onClick={() => deleteProject(project.id, {
          onSuccess: () => navigate("/projects")
        })} resourceName="project" />
      </Modal.Window>
    </Modal>
  )
}
