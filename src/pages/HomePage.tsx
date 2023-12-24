import { Post } from "../assets"
import { PostCard } from "../components"
import { HomeLayout } from "../layouts"

const HomePage = () => {
  return (
    <>
      <HomeLayout>
        <PostCard post={Post} />
        <PostCard post={Post} />
        <PostCard post={Post} />
      </HomeLayout>

    </>
  )
}

export default HomePage