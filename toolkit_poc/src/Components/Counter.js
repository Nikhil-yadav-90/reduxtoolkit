import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByValue } from '../redux/counterSlice';
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <p>
      <span> Count :{count}</span> 
      </p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
        <button onClick={()=>dispatch(incrementByValue(100))}>Increment By 100</button>
    </div>
  );
}

export default Counter;
