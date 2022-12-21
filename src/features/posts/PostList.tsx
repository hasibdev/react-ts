import { useGetPostsQuery } from "../../store/apiSlice"
import PostForm from "./PostForm"

const PostList = () => {
  //  const { data: posts } = useGetPostsQuery()


  // const postList = posts.map((post: any) => (
  //   <div key={post.id} className="card card-body mt-3">
  //     <h3 className="card-title">{post.title}</h3>
  //     <p className="h5">{post.body}</p>
  //   </div>
  // ))

  return (
    <div className='container'>
      <PostForm />

      <h2>PostList</h2>
      {/* {posts.status === 'failed' && <p>{posts.error}</p>}
      {posts.status === 'loading' && <p>Loading...</p>}
      {postList} */}

    </div>
  )
}

export default PostList