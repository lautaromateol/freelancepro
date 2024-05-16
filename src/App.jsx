import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import Task from "./pages/Task"
import Tasks from "./pages/Tasks"
import NotFound from "./ui/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard"/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:projectId" element={<Project />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="task/:taskId" element={<Task />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
