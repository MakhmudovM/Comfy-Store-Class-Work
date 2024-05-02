import { Outlet } from "react-router-dom"

//components
import { Header, Navbar } from "../components"

function HomeLayout() {
  return (
    <>
    <Header/>
    <Navbar/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default HomeLayout