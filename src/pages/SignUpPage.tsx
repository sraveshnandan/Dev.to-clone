import { BiLogoApple, BiLogoGithub, BiLogoGmail, BiLogoGoogle } from "react-icons/bi"
import { SocilaSignInButton } from "../components"
import { useState } from "react"
import { Link } from "react-router-dom";


const SignUpPage = () => {

  const [full_name, setFull_name] = useState<string>("");
  const [userName, setUserName] = useState<string>("")
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toggle, settoggle] = useState<boolean>(false)

  const handleSubmit = (ev: SubmitEvent) => {
    ev.preventDefault()

  }


  if (toggle) {
    return (
      <div className="flex flex-col">

        {/* header  */}
        <div className="w-full justify-center items-center flex flex-col">

          <Link to="/" className="p-3 shadow-lg  my-2 cursor-pointer w-fit rounded-md bg-black text-white font-semibold">DEV</Link>

          <span className="text-2xl text-black font-semibold">Join the DEV Community</span>

          <span className="text-sm w-[70%] my-1 text-center text-gray-500">DEV community is a community of 1,00,000 amazing developers.</span>

        </div>


        <form onSubmit={() => handleSubmit} className=" w-full border-gray-200 flex flex-col  border-[1px]  rounded-md mf:p-2 p-4 m-2">



          <span className=" my-1 text-black font-semibold ">Create your account</span>

          {/* Profile Picture  */}
          <div className="flex flex-col px-2 ">
            <span className="my-1">Profile Picture</span>

            <input
              type="file"
              onChange={(ev) => console.log(ev.target.files)}
              id="profile-picture"
              className="bg-slate-200 placeholder:text-red-600 p-2 rounded-md"

              placeholder="Profile Picture"
            />

          </div>

          {/* Name  */}
          <div className="w-full px-1 text-gray-900 rounded-md  flex flex-col items-start border-black">
            <label htmlFor="name" className="my-1 font-medium ">Full Name <span className="text-red-600">*</span></label>
            <input type="text"
              id="name"
              required
              className="border-[.1px] px-3 py-1 font-medium placeholder:text-gray-500 border-black w-full outline-none rounded-md"
              value={full_name}
              placeholder="John  Doe"
              onChange={(ev) => setFull_name(ev.target.value)} />
          </div>



          {/* User Name  */}


          <div className="w-full px-1 text-gray-900 rounded-md  flex flex-col items-start border-black">
            <label htmlFor="Username" className="my-1 font-medium ">Username <span className="text-red-600">*</span></label>
            <input type="text"
              id="userName"
              required
              className="border-[.1px] px-3 py-1 font-medium placeholder:text-gray-500 border-black w-full outline-none rounded-md"
              value={userName}
              placeholder="username"
              onChange={(ev) => setUserName(ev.target.value)} />
          </div>




          {/* Email  */}
          <div className="w-full px-1 text-gray-900  my-2  rounded-md  flex flex-col items-start border-black">
            <label htmlFor="email" className="my-1 font-medium ">Email <span className="text-red-600">*</span></label>
            <input type="text"
              id="email"
              required
              className="border-[1px] px-3 py-1 font-medium placeholder:text-gray-500 border-black w-full outline-none rounded-md"
              value={email}
              placeholder="email@email.com"
              onChange={(ev) => setEmail(ev.target.value)} />
          </div>



          <div className="w-full px-1 text-gray-900  my-2  rounded-md  flex flex-col items-start border-black">
            <label htmlFor="password" className="my-1 font-medium ">Password <span className="text-red-600">*</span></label>
            <input type="password"
              id="password"
              required
              className="border-[1px] px-3 py-1 font-medium placeholder:text-gray-500 border-black w-full outline-none rounded-md"
              value={password}
              placeholder="password@123"
              onChange={(ev) => setPassword(ev.target.value)} />
          </div>


          {/* Submit Button  */}

          <button className="bg-primary hover:saturate-50 w-full px-5 py-1  rounded-md text-white " type="submit">Sign up</button>

        </form>
      </div>
    )

  }
  return (
    <>
      <div className="flex flex-col mf:w-[40%] w-full m-2 gap-4">

        {/* header  */}
        <div className="w-full justify-center items-center flex flex-col">

          <Link to="/" className="p-3 shadow-lg  my-2 cursor-pointer w-fit rounded-md bg-black text-white font-semibold">DEV</Link>

          <span className="text-2xl text-black font-semibold">Join the DEV Community</span>

          <span className="text-sm my-1 text-center text-gray-500">DEV community is a community of 1,00,000 amazing developers.</span>

        </div>

        {/* Social Login Fields  */}

        <div className="flex flex-col text-sm   gap-2 justify-center text-center">

          <SocilaSignInButton title="Sign up with Apple" icon={<BiLogoApple size={24} />} />

          <SocilaSignInButton title="Sign up with Github" icon={<BiLogoGithub size={24} />} />

          <SocilaSignInButton title="Sign up with  Google" icon={<BiLogoGoogle size={24} />} />

          <button className="border-[1px] border-black text-center justify-between flex gap-4 items-center hover:border-0 hover:bg-slate-200 hover:font-semibold  rounded-md px-5   py-2" type="button" onClick={() => settoggle(!toggle)}> <span className="flex  items-center justify-between w-[65%]"><BiLogoGmail />Sign up with Email</span></button>
        </div>








        <span className="text-sm text-center">By signing up, you are agreeing to our <b className="font-semibold text-primary"> privacy policy</b>, terms of use and  <b className="font-semibold text-primary">code of conduct</b>.</span>

        <div className="w-full text-center  flex flex-col items-center justify-center">
          <hr className="border-0 w-[80%] my-2 h-[.5px] bg-slate-200 text-center" />

          <span>Already have an Acount. <Link to="/login" className="text-primary underline">login</Link>.</span>
        </div>

      </div>


    </>
  )
}

export default SignUpPage