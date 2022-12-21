import { useRef } from 'react'
import { useAppDispatch } from '../../store'
import { addPost } from './postSlice'

const PostForm = () => {
  const dispatch = useAppDispatch()

  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const savePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payload = {
      title: titleRef.current?.value,
      description: descriptionRef.current?.value,
    }

    dispatch(addPost(payload))

    titleRef.current!.value = ''
    descriptionRef.current!.value = ''

  }

  return (
    <div>
      <h3>PostForm</h3>

      <form onSubmit={savePost}>
        <label htmlFor="post-title">Title</label>
        <input ref={titleRef} type="text" name='title' id='post-title' autoFocus className='form-control' />

        <label htmlFor="post-description">Description</label>
        <textarea ref={descriptionRef} name="description" id="post-description" className='form-control' cols={30} rows={5}></textarea>

        <button className='btn btn-primary mt-2' type='submit'>Save</button>
      </form>
    </div>
  )
}

export default PostForm