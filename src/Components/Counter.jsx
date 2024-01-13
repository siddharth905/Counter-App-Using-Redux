import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/CounterSlice';

export const Counter = () => {
   const Count=useSelector((state)=> state.counter.value);
   const dispatch=useDispatch();
  return (
    <div>
          <button onClick={()=> dispatch(increment())}>
            Increment
          </button>
          <div>
            {Count}
          </div>
          <button onClick={()=> dispatch(decrement())}>
             Decrement
          </button>
    </div>
  )
}
export default Counter;