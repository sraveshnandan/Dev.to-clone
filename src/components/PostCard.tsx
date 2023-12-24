import { BiBookAdd, BiComment, } from "react-icons/bi";
import { Card } from "../components";
import { Link } from "react-router-dom";
import { PostContent } from "../vite-env";

const PostCard = ({ post }: { post: PostContent }) => {
  const { title, tag, published_date, comments, author } = post;
  return (
    <>
      < Card containerStyles=" my-4 shadow-lg flex flex-col  " children={<>
        {/* post img section  */}
        <div className="w-full h-[200px] mb-2 bg-blue-100 overflow-hidden">
        </div>

        <div className="px-3 py-3">
          {/* //Author  */}
          <div className="w-full flex mb-2  items-center gap-3 justify-start">

            {/* avatar  */}

            <div className="bg-black text-white p-1 rounded-md ">
              <span>DEV</span>

            </div>

            {/* Author name  */}
            <span className="text-sm text-gray-500 flex flex-col">{author}<span className="text-[8px] -mt-1">{published_date}</span></span>
          </div>


          {/* Content of post  */}
          <div className=" px-8 flex flex-col gap-2">
            <span className="text-3xl font-semibold ">{title}</span>
            <div className="flex flex-row gap-4">
              {
                tag.map(data => (
                  <span key={data} className="text-sm text-gray-500">#{data}</span>
                ))
              }
            </div>
            {/* intraction comments and save  */}
            <div className="flex items-center my-4 justify-between">
              {/* intraction and comment  */}

              <div className="flex text-sm text-gray-500 items-center gap-3">
                <span className=" flex gap-2 items-center"><span className="bg-slate-200 flex items-center justify-between rounded-full p-2 ">😂😎😍👍</span> 4 reaction</span>

                <Link to="/" className="flex gap-2 items-center"><BiComment />{comments.length} comments</Link>

              </div>

              {/* save and read  */}
              <span className="flex cursor-pointer text-sm text-gray-500 gap-2 items-center"> 2min read <BiBookAdd /></span>

            </div>
          </div>
        </div>



      </>

        //post img section 



      } />





    </>
  )
}

export default PostCard