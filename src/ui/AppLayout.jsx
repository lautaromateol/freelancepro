import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <Header />
      {/* <Nav /> */}
      <main className="p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
