/* eslint-disable react/prop-types */
import { useDeleteProject } from "./useDeleteProject";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useNavigate } from "react-router-dom";

export default function DeleteProjectButton({ project }) {

  const navigate = useNavigate()

  const { deleteProject, isPending: isDeleting } = useDeleteProject()

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
