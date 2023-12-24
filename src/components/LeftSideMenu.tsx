import { BiAbacus, BiBookBookmark, BiBookOpen, BiDotsHorizontal, BiLogoFacebook, BiLogoGithub, BiLogoGmail, BiLogoInstagramAlt, BiLogoTwitter, BiMapPin, BiMicrophone, BiQuestionMark, BiShield, BiSolidHome } from "react-icons/bi"
import { Link } from 'react-router-dom'

const LeftSideMenu = () => {
  return (
    <>

      <ul className="flex font-semibold text-sm  text-slate-600 items-start w-[70%] flex-col gap-2 my-4">
        <Link to="/" className="flex gap-2 hover:text-primary items-center"><BiSolidHome />home</Link>

        <Link to="/" className="flex gap-2 hover:text-primary items-center"><BiAbacus />About</Link>

        <Link to="/" className="flex gap-2 hover:text-primary items-center"><BiMapPin />Contact</Link>

        <Link to="/" className="flex gap-2 hover:text-primary items-center"><BiQuestionMark />FAQ</Link>

        <Link to="/" className="flex gap-2 hover:text-primary items-center"><BiBookBookmark />Reading List</Link>

        <Link to="/" className="flex gap-2 hover:text-primary items-center"><BiMicrophone />Podcast</Link>

        <Link to="/" className="flex gap-2 hover:text-primary items-center"><BiBookOpen />Guides</Link>

        <span className="text-black my-2 font-semibold">others</span>


        <Link to="/" className="flex gap-2 hover:text-primary items-center"><BiShield />Privecy Policy</Link>

        <Link to="/" className="flex gap-2 hover:text-primary items-center"><BiDotsHorizontal />Terms of use</Link>
      </ul>

      {/* social links  */}
      <div className="flex w-[70%] justify-evenly  text-xl gap-2 items-center">
        <Link to="/" className="hover:text-primary"> <BiLogoGithub /></Link>
        <Link to="/" className="hover:text-primary"> <BiLogoTwitter /></Link>
        <Link to="/" className="hover:text-primary"> <BiLogoFacebook /></Link>
        <Link to="/" className="hover:text-primary"> <BiLogoInstagramAlt /></Link>
        <Link to="/" className="hover:text-primary"> <BiLogoGmail /></Link>


      </div>


    </>
  )
}

export default LeftSideMenu