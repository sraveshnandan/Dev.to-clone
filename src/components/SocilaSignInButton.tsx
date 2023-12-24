
import { SocialSignInButton } from '../vite-env'
import { Link } from 'react-router-dom'

const SocilaSignInButton = ({ title, icon }: SocialSignInButton) => {
  return (
    <>

      <Link className="border-[1px] border-black text-center justify-between flex gap-4 items-center hover:border-0 hover:bg-slate-200 hover:font-semibold  rounded-md px-5   py-2" to="/"> <span className="flex  items-center justify-between w-[65%]">{icon}{title}</span></Link>


    </>
  )
}

export default SocilaSignInButton