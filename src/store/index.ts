import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector