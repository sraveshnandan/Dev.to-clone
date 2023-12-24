import { BiLogoApple, BiLogoGithub, BiLogoGoogle } from "react-icons/bi"
import { Link } from "react-router-dom"
import { SocilaSignInButton } from "../components"
import { useState } from "react"
import axios from "axios"



const LoginPage = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const handleSubmit = async (ev: any) => {
    ev.preventDefault();
    const data = {
      email, password
    }
    try {
      const res = await fetch("http://localhost:4000/api/v1/user/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })

      const response = await res.json();
      console.log(response)


    } catch (error) {
      console.log(error)

    }


  }
  return (
    <>
      {/* wrapper  */}
      <div className="flex flex-col m-2 mf:w-[40%] w-full gap-4">

        {/* header  */}
        <div className="w-full justify-center items-center flex flex-col">

          <Link to="/" className="p-3 shadow-lg  my-2 cursor-pointer w-fit rounded-md bg-black text-white font-semibold">DEV</Link>

          <span className="text-2xl text-black font-semibold">Join the DEV Community</span>

          <span className="text-sm my-1 text-center text-gray-500">DEV community is a community of 1,00,000 amazing developers.</span>

        </div>

        {/* Social Login Fields  */}

        <div className="flex flex-col text-sm   gap-2 justify-center text-center">

          <SocilaSignInButton title="Continue with Apple" icon={<BiLogoApple size={24} />} />

          <SocilaSignInButton title="Continue with Github" icon={<BiLogoGithub size={24} />} />

          <SocilaSignInButton title="Continue with  Google" icon={<BiLogoGoogle size={24} />} />
        </div>

        {/* seperator  */}


        <div className="flex gap-2 my-3 w-full justify-center items-center">
          <hr className="border-0 w-[40%] h-[1px] bg-slate-400" />
          <span>OR</span>
          <hr className="border-0 w-[40%] h-[1px] bg-slate-400" />
        </div>


        {/* Login Form  */}
        <form onSubmit={handleSubmit} className=" w-full p-1 ">

          <div className="w-full px-1 text-gray-900   rounded-md  flex flex-col items-start border-black">
            <label htmlFor="email" className="my-1 font-medium ">Email <span className="text-red-600">*</span></label>
            <input type="text"
              id="email"
              required
              className="border-[1px] px-3 py-1 font-medium placeholder:text-gray-500 border-black w-full outline-none rounded-md"
              value={email}
              placeholder="email@email.com"
              onChange={(ev) => setEmail(ev.target.value)} />
          </div>


          <div className="w-full px-1 mt-2 text-gray-900   rounded-md  flex flex-col items-start border-black">
            <label htmlFor="password" className="my-1  font-medium ">Password <span className="text-red-600">*</span></label>
            <input type="password"
              id="password"
              placeholder="Password@123"
              required
              className="border-[1px] px-3 py-1 placeholder:text-gray-500 border-black w-full outline-none rounded-md"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)} />
          </div>


          {/* additional  */}
          <div className="w-full flex font-semibold items-center justify-between my-2">
            <div className="flex gap-1 cursor-pointer  text-sm text-black  items-center">
              <input type="checkbox" className="w-4 h-8 " name="" id="remember_me" />
              <label htmlFor="remember_me"> Remember me</label>


            </div>

            <Link to="/forgot-password" className="text-primary text-sm underline">Forgot Password</Link>
          </div>


          <button type="submit" className="my-4 w-full bg-primary text-white px-5 py-2 rounded-md">Login</button>

        </form>

        <span className="text-sm text-center">By signing in, you are agreeing to our <b className="font-semibold text-primary"> privacy policy</b>, terms of use and  <b className="font-semibold text-primary">code of conduct</b>.</span>

        <div className="w-full text-center  flex flex-col items-center justify-center">
          <hr className="border-0 w-[80%] my-2 h-[.5px] bg-slate-200 text-center" />

          <span>New to DEV Community? <Link to="/sign-up" className="text-primary underline">Create account</Link>.</span>
        </div>

      </div>


    </>
  )
}

export default LoginPage