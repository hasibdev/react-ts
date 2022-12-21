
import { increment, decrement } from '../store/counterSlice'
import { useAppSelector, useAppDispatch } from '../store'

const Counter = () => {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Counter {count}</h2>

      <button onClick={() => dispatch(increment())} className='btn btn-info'>Increment</button>
      <button onClick={() => dispatch(decrement())} className='btn btn-warning'>Decrement</button>
    </div>
  )
}

export default Counter