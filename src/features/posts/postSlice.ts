import { createSlice, nanoid } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [
      { id: 1, title: 'Post One', description: 'Post one description' },
      { id: 2, title: 'Post Two', description: 'Second post description' },
    ]
  },
  reducers: {
    addPost: {
      reducer(state, action) {
        console.log(action)

        state.data.push(action.payload)
      },
      prepare(data): any {
        return {
          payload: {
            id: nanoid(),
            ...data
          }
        }
      },
    }
  }
})

export const { addPost } = postSlice.actions

export default postSlice.reducer