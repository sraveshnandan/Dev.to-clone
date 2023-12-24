import { useState } from "react";
import { Card } from "../components";
import { BiBell, BiSearch, BiSolidUser, } from "react-icons/bi"
import { Link } from "react-router-dom";


const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [auth, setAuth] = useState<boolean>(false);
  const [profileToggle, setProfileToggle] = useState<boolean>(false);

  return (
    <>
      < Card containerStyles="mf:px-20 fixed  top-0 right-0 left-0 rounded-none py-2 px-4" children={
        <div className="flex flex-row items-center justify-between">
          {/* Logo and serach bar  */}
          <div className="flex gap-1 font-semibold items-center">
            <span className="bg-black p-1 text-white rounded-md">DEV </span> <span>Sphere</span>

            <form className="flex mf:w-[350px] overflow-hidden mf:px-4 ml-2 items-center border-[1.5px] rounded-md border-slate-400 gap-1" >
              <input
                className="py-1 grow outline-none font-thin text-black placeholder:text-slate-400  "
                placeholder="Search..."
                value={searchQuery}
                onChange={(ev => setSearchQuery(ev.target.value))}
                type="text"
              />
              <button type="submit" className="text-xl"><BiSearch /></button>
            </form>
          </div>
          {/* CTA Button and profile avatar  */}

          <div className=" text-sm flex gap-2 items-center">

            {/* without authentication  */}
            {
              auth ? (
                <div className="flex items-center gap-2 ">
                  {/* create post button  */}
                  <Link className="p-2 rounded-md font-semibold text-primary border-[1px] border-primary" to="/create-post">Create post</Link>

                  {/* notification button  */}
                  <Link to="/notifications" className="text-2xl p-2 rounded-md bg-slate-200"><BiBell /></Link>

                  {/* Profile picture box  */}
                  <Link to="/" onClick={() => setProfileToggle(prev => !prev)} className="bg-slate-200 ml-4 p-2 rounded-full text-lg ring-2 hover:ring-primary hover:opacity-75 ring-slate-400 "><BiSolidUser /></Link>

                  {
                    profileToggle && (
                      <Card containerStyles=" rounded-md p-1  absolute top-16   right-20" children={

                        <div className="flex py-2 flex-col px-3">
                          {/* name and username  */}
                          <div className=" flex flex-col">

                            <span className="text-xl font-semibolds">Sravesh Nandan</span>
                            <span className="text-sm text-slate-400 -my-1">@sraveshnandan</span>
                            <hr className="border-0 h-[1px] -mx-4 bg-slate-200 mt-4" />
                          </div>

                          {/* menu links  */}
                          <ul className="flex my-2 flex-col gap-2 ">
                            <Link className="text-sm hover:text-primary" to="/profile">Dashbord</Link>
                            <Link className="text-sm hover:text-primary" to="/profile">create post</Link>
                            <Link className="text-sm hover:text-primary" to="/profile">saved post</Link>
                            <hr className="border-0 h-[1px] -mx-4 bg-slate-200 mt-2" />
                            <Link className="text-sm hover:text-primary" to="/profile">sign out</Link>
                          </ul>

                        </div>
                      } />
                    )
                  }

                </div>

              ) : (<div className="flex gap-4 items-center">
                <Link className="p-2 rounded-md hover:text-primary font-semibold text-slate-400" to="/login">Log in</Link>
                <Link className="p-2 rounded-md font-semibold text-primary border-[1px] border-primary" to="/sign-up">Create account</Link></div>)
            }


          </div >
        </div >

      } />
    </>

  )
}

export default NavBar