import { useNavigate } from "react-router-dom"
import { useProject } from "../features/projects/useProject"
import { useDeleteProject } from "../features/projects/useDeleteProject"
import Modal from "../ui/Modal"
import Spinner from "../ui/Spinner"
import PageSection from "../ui/PageSection"
import PageHeading from "../ui/PageHeader"
import Button from "../ui/Button"
import EditProjectForm from "../features/projects/EditProjectForm"
import ConfirmDelete from "../ui/ConfirmDelete"
import Tasks from "../features/tasks/Tasks"
import ProjectInfo from "../features/projects/ProjectInfo"
import { useTasks } from "../features/tasks/useTasks"

export default function Project() {

  const navigate = useNavigate()

  const { project, isPending: isLoadingProjects } = useProject()

  const { tasks, isPending: isLoadingTasks } = useTasks()

  const { deleteProject, isPending: isDeleting } = useDeleteProject()

  const isPending = isLoadingProjects || isLoadingTasks

  if (isPending) return <Spinner />

  return (
    <PageSection>
      <div className="flex items-center justify-between shadow-md rounded-lg border border-1 p-8">
        <div>
          <PageHeading>{project.name}</PageHeading>
          <span className="inline-block bg-green-200 text-green-800 text-xl rounded-lg p-2">{project.status}</span>
        </div>
        <div className="flex items-center justify-end gap-4 w-[30rem]">
          <Modal>
            <Modal.Opens opens="edit-form">
              <Button disabled={isDeleting}>
                Edit
              </Button>
            </Modal.Opens>
            <Modal.Opens opens="delete-modal">
              <Button disabled={isDeleting} style="danger">
                Delete
              </Button>
            </Modal.Opens>
            <Modal.Window window="edit-form">
              <EditProjectForm project={project} />
            </Modal.Window>
            <Modal.Window window="delete-modal">
              <ConfirmDelete onClick={() => deleteProject(project.id, {
                onSuccess: () => navigate("/projects")
              })} resourceName="project" />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <main className="grid grid-cols-2 gap-x-10">
        <section className="flex flex-col gap-14">
          <ProjectInfo tasks={tasks} project={project} />
          <Tasks tasks={tasks} projectId={project.id} />
        </section>
        <section>
          <p className="text-4xl font-semibold mb-6">Notes</p>
          <article className="p-4 shadow-sm rounded-lg border border-1 text-2xl">
            {project.description}
          </article>
        </section>
      </main>
    </PageSection>
  )
}
