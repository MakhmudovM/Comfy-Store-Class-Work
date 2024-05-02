import { Outlet } from "react-router-dom"

//components
import { Navbar } from "../components"

function HomeLayout() {
  return (
    <>
    <Navbar/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default HomeLayout