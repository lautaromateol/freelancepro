import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import AppLayout from "./ui/AppLayout"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import Calendar from "./pages/Calendar"
import NotFound from "./ui/NotFound"
import Login from "./pages/Login"
import ProtectedRoute from "./pages/ProtectedRoute"
import Register from "./pages/Register"

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "16px"
          }
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<Project />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
