
import { Card } from "../components"
const TopicsCard = ({ data }:any) => {
  return (
    <>
      <Card containerStyles="p-3 mb-4   w-[90%]" children={
        // main headibg 
        <div className="flex flex-col " >
          <span className="text-black
             text-xl font-semibold">#discuss</span>
          <span className="text-slate-400 -mt-1 text-sm">Discussion threds targetting the whole community.</span>
          <hr className="border-0 h-[1px] bg-gray-100 mt-2 -mx-3" />

          {
            data.map((d:any) => (
              <div key={d.title} className="flex flex-col my-2">
                <span className="text-black ">{d.title}</span>
                <span className="text-slate-400 -mt-1 text-sm">{d.desc}</span>
                <hr className="border-0 h-[.5px] bg-gray-100 mt-2 -mx-3" />
              </div>
            ))
          }




        </div>

        // sub groups 


      } />

    </>
  )
}

export default TopicsCard