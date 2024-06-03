import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <main className="p-10 overflow-y-auto">
        <Outlet />
      </main>
    </>
  )
}
