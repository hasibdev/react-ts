import { createSlice, nanoid, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

interface Post {
  id: string | number,
  userId: string | number,
  title: string,
  body: string
}

type Status = 'idle' | 'succeeded' | 'loading' | 'failed'

interface State {
  data: Post[],
  status: Status,
  error: string
}

const initialState: State = {
  data: [],
  status: 'idle',
  error: ''
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.data.push(action.payload)
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            ...data
          }
        }
      },
    }
  },
  extraReducers(builder) {

  },
})

export const { addPost } = postSlice.actions

export default postSlice.reducer