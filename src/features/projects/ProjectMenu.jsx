/* eslint-disable react/prop-types */
import { HiOutlineArrowUpOnSquare, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useDeleteProject } from "./useDeleteProject";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

export default function ProjectMenu({ project }) {

  const navigate = useNavigate()

  const { deleteProject } = useDeleteProject()

  return (
    <Modal>
    <Menus>
      <Menus.Menu>
        <Menus.Toggle id={project.id} />
        <Menus.List id={project.id}>
          <Menus.Button icon={<HiOutlineArrowUpOnSquare />} onClick={() => navigate(`/projects/${project.id}`)}>
            Visit Project Page
          </Menus.Button>
          <Modal.Opens opens="edit-form">
            <Menus.Button icon={<HiOutlinePencil />}>
              Edit Project
            </Menus.Button>
          </Modal.Opens>
          <Menus.Button onClick={() => deleteProject(project.id)} icon={<HiOutlineTrash />}>
            Delete Project
          </Menus.Button>
        </Menus.List>
        <Modal.Window window="edit-form">
          <CreateProjectForm projectToEdit={project} />
        </Modal.Window>
      </Menus.Menu>
    </Menus>
  </Modal>
  )
}
