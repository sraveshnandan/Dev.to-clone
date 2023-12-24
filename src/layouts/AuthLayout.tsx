import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      {/* wrapper  */}
      <div className="w-full py-16 bg-white flex items-center justify-center min-h-screen h-fit">
        <Outlet />

      </div>



    </>
  )
}

export default AuthLayout