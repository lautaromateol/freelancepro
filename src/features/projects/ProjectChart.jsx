import { useNavigate } from "react-router-dom"
import { HiOutlineArrowUpOnSquare, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2"
import Menus from "../../ui/Menus"
import Modal from "../../ui/Modal"
import EditProjectForm from "./EditProjectForm"
import { useDeleteProject } from "./useDeleteProject"

/* eslint-disable react/prop-types */
export default function ProjectChart({ project }) {

  const navigate = useNavigate()

  const { deleteProject, isPending } = useDeleteProject()

  const endDate = new Date(project?.finishDate)
  const day = endDate.getDate()
  const month = endDate.getMonth() + 1
  const year = endDate.getFullYear()
  const formatedDay = day.toString().padStart(2, "0")
  const formatedMonth = month.toString().padStart(2, "0")
  const formatedDate = `${formatedDay}/${formatedMonth}/${year}`

  return (
    <div className="flex flex-col justify-between bg-slate-50 rounded-lg shadow-sm border border-1 min-h-[16rem] p-8">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-4xl font-bold mb-1">{project.name}</h4>
          <span className="text-xl text-gray-600">{project.status}</span>
        </div>
        <Modal>
          <Menus>
            <Menus.Menu>
              <Menus.Toggle id={project.id} />
              <Menus.List id={project.id}>
                <Menus.Button icon={<HiOutlineArrowUpOnSquare />} onClick={() => navigate(`/project/${project.id}`)}>
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
                <EditProjectForm project={project} />
              </Modal.Window>
            </Menus.Menu>
          </Menus>
        </Modal>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl">Progress</p>
          <span>Bar</span>
        </div>
        <div>
          <p className="text-2xl">Delivery Date</p>
          <span className="text-xl text-gray-600">{formatedDate}</span>
        </div>
      </div>
    </div>
  )
}
