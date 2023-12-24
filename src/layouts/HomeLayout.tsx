import { Link } from "react-router-dom"
import { Card, LeftSideMenu, TopicsCard } from "../components";
import { Topics } from "../assets";


const HomeLayout = ({ children }: any) => {
  return (
    <>
      {/* wrapper  */}
      <div className='flex gap-3 mt-16  w-full '>

        {/* left side conatiner  */}
        <div className="w-1/4  flex items-end flex-col ">
          {/* left side container card  */}
          <Card containerStyles="p-3  w-[75%]" children={
            <div className="flex flex-col ">
              <span className="text-lg mb-4 font-bold">Build Connections: Welcome <br />to <span className="bg-slate-200 rounded-md p-1">DEV Sphere</span></span>
              <span className="text-sm text-slate-400 leading-1 line-clamp-3">Embark on a journey of discovery and collaboration. At DEV Sphere, we're dedicated to nurturing a dynamic space where minds converge, ideas flourish, and connections thrive."</span>

              {/* CTA Buttons  */}
              <div className="flex w-full flex-col my-2  items-center">
                <Link className="p-1 w-full text-center rounded-md font-semibold text-primary border-[1px] border-primary" to="/login">Create account</Link>
                <Link className="p-2 rounded-md hover:text-primary font-semibold text-slate-400" to="/login">Log in</Link>
              </div>



            </div>

          } />
          {/* left side menu  */}
          <LeftSideMenu />
          {/* copyright message  */}
          <span className="text-slate-400 w-[70%] mt-8 text-sm ">
            <b className="text-black hover:text-primary cursor-pointer"> DEV Sphere -- </b>is  to cultivate a collaborative haven where diversity fuels innovation and collective wisdom thrives. Join hands to shape an inclusive space where every voice contributes to our tapestry of knowledge.
          </span>


          <span className="text-slate-400 w-[70%] mt-2  text-sm ">
            Made with <b className="text-primary">Typescript on MERN stack</b>.
          </span>

          <span className="text-slate-400 w-[70%] mt-2  text-sm ">
            DEV Sphere &copy; 2023 - 2024.
          </span>




        </div>

        {/* middle post conatiner  */}
        <div className="w-2/4 data flex  flex-col ">
          <div className="flex gap-2 items-center py-4">

          </div>
          {children}
        </div>

        {/* right side conatiner  */}
        <div className="w-1/4   flex flex-col items-start justify-start">
          <TopicsCard data={Topics} />
        </div>
      </div>

    </>
  )
}

export default HomeLayout