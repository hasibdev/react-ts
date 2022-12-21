import { useAppDispatch, useAppSelector } from "../../store"
import PostForm from "./PostForm"

const PostList = () => {
  const posts = useAppSelector(state => state.posts.data)
  const dispatch = useAppDispatch()

  const postList = posts.map((post) => (
    <div key={post.id} className="card card-body mt-3">
      <h3 className="card-title">{post.title}</h3>
      <p className="h5">{post.description}</p>
    </div>
  ))

  return (
    <div className='container'>
      <PostForm />

      <h2>PostList</h2>
      {postList}

    </div>
  )
}

export default PostList