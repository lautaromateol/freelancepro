import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";

export default function AppLayout() {
  return (
    <div className="grid grid-cols-[28rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
