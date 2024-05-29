/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { DndContext, DragOverlay, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useUpdateTask } from "./useUpdateTask";
import { useUpdateProject } from "../projects/useUpdateProject";
import TasksContainer from "./TasksContainer";
import Task from "./Task";

export default function Tasks({ tasks: initialTasks, project, userId }) {

  const [tasks, setTasks] = useState([])
  const [activeTask, setActiveTask] = useState([])

  const { updateProject } = useUpdateProject()

  const { updateTask } = useUpdateTask()

  const todoTasks = tasks?.filter((task) => task.status === "To-Do");
  const doingTasks = tasks?.filter((task) => task.status === "Doing");
  const doneTasks = tasks?.filter((task) => task.status === "Done");

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  const updateTaskStatus = (id, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDragStart = (event) => {
    const { active } = event

    const taskId = active.id;
    const task = tasks.find(({ id }) => id === taskId)

    setActiveTask(task)
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;

    const taskId = active.id
    const newStatus = over.id;

    const task = tasks.find(({ id }) => id === taskId)

    if (over && task.status !== over.id) {

      const newTask = {
        ...task,
        status: newStatus
      }

      updateTaskStatus(taskId, newStatus)

      if (project.status === "Complete") {
        updateProject({ data: { ...project, status: "In Progress" }, id: project.id })
        updateTask({ id: taskId, newTask }, {
          onSettled: () => setActiveTask(null)
        })
      } else if (project.status === "In Progress" && [...tasks, newTask].filter(({ status }) => status === "Done").length === tasks.length) {
        updateProject({ data: { ...project, status: "Complete" }, id: project.id })
        updateTask({ id: taskId, newTask }, {
          onSettled: () => setActiveTask(null)
        })
      } else updateTask({ id: taskId, newTask }, {
        onSettled: () => setActiveTask(null)
      })
    }
  };

  useEffect(() => {
    setTasks(initialTasks)
  }, [initialTasks])

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <section>
        <p className="text-4xl font-semibold mb-8">Tasks</p>
        <div className="w-full mx-auto">
          <div className="grid grid-cols-3 gap-8 mb-10">
            <SortableContext items={todoTasks} strategy={verticalListSortingStrategy}>
              <TasksContainer
                userId={userId}
                projectId={project.id}
                title="To-Do"
                data={todoTasks}
                render={(task) => <Task task={task} key={task.id} />}
              />
            </SortableContext>
            <SortableContext items={doingTasks} strategy={verticalListSortingStrategy}>
              <TasksContainer
                userId={userId}
                projectId={project.id}
                title="Doing"
                data={doingTasks}
                render={(task) => <Task task={task} key={task.id} />}
              />
            </SortableContext>
            <SortableContext items={doneTasks} strategy={verticalListSortingStrategy}>
              <TasksContainer
                userId={userId}
                projectId={project.id}
                title="Done"
                data={doneTasks}
                render={(task) => <Task task={task} key={task.id} />}
              />
            </SortableContext>
          </div>
        </div>
      </section>
      <DragOverlay>
        {activeTask ? <Task task={activeTask} /> : null}
      </DragOverlay>
    </DndContext>
  );
}
