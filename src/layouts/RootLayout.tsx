import { Outlet } from "react-router-dom"
import { NavBar } from "../components"


const RootLayout = () => {
  return (
    <>
      <div className="max-w-[1440px]  relative mx-auto">
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout