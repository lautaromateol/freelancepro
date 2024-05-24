/* eslint-disable react/prop-types */
import Task from "./Task";
import TasksContainer from "./TasksContainer";
import { DndContext, DragOverlay, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useUpdateTask } from "./useUpdateTask";
import { useEffect, useState } from "react";

export default function Tasks({ tasks: initialTasks, projectId }) {

  const [tasks, setTasks] = useState([])
  const [activeTask, setActiveTask] = useState([])

  const { updateTask } = useUpdateTask()

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

      updateTask({ id: taskId, newTask }, {
        onSettled: () => setActiveTask(null)
      })
    }
  };

  const todoTasks = tasks?.filter((task) => task.status === "To-Do");
  const doingTasks = tasks?.filter((task) => task.status === "Doing");
  const doneTasks = tasks?.filter((task) => task.status === "Done");

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
                projectId={projectId}
                title="To-Do"
                data={todoTasks}
                render={(task) => <Task task={task} key={task.id} />}
              />
            </SortableContext>
            <SortableContext items={doingTasks} strategy={verticalListSortingStrategy}>
              <TasksContainer
                projectId={projectId}
                title="Doing"
                data={doingTasks}
                render={(task) => <Task task={task} key={task.id} />}
              />
            </SortableContext>
            <SortableContext items={doneTasks} strategy={verticalListSortingStrategy}>
              <TasksContainer
                projectId={projectId}
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
