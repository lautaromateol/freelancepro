import { useNavigate } from "react-router-dom"
import { HiOutlineArrowUpOnSquare, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2"
import { useDeleteProject } from "./useDeleteProject"
import { formatDate } from "../../utils/helpers"
import Menus from "../../ui/Menus"
import Modal from "../../ui/Modal"
import EditProjectForm from "./EditProjectForm"
import { isAfter, isBefore, isToday, startOfDay } from "date-fns"

/* eslint-disable react/prop-types */
export default function ProjectChart({ project }) {

  const navigate = useNavigate()

  const inTime = project.status === "In Progress" && isBefore(startOfDay(new Date()), startOfDay(new Date(project.finishDate)))

  const outOfTime = project.status === "In Progress" && isAfter(startOfDay(new Date()), startOfDay(new Date(project.finishDate)))

  const deliverToday = project.status === "In Progress" && isToday(new Date(project.finishDate))

  const { deleteProject } = useDeleteProject()

  return (
    <div className="flex flex-col justify-between bg-slate-50 rounded-lg shadow-sm border border-1 min-h-[16rem] p-8">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-4xl font-semibold mb-1">{project.name}</h4>
          <span className="text-xl text-gray-600">{project.status}</span>
        </div>
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
                <EditProjectForm project={project} />
              </Modal.Window>
            </Menus.Menu>
          </Menus>
        </Modal>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-2/3">
          <p className="text-2xl mb-2">Status</p>
          <span className={`${inTime ? "bg-green-500" : outOfTime ? "bg-red-500 text-white" : deliverToday ? "bg-yellow-500" : "bg-green-500"} px-2 py-1 rounded-full text-lg`}>{
            inTime
              ? "In time"
              : outOfTime
                ? "Out of time"
                : deliverToday
                  ? "Deliver today"
                  : "Delivered"
          }
          </span>
        </div>
        <div>
          <p className="text-2xl mb-2">Delivery Date</p>
          <span className="text-xl text-gray-600">{formatDate(project.finishDate)}</span>
        </div>
      </div>
    </div>
  )
}
