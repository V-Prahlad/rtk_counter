import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/redux';
import './app.scss';

export function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementHandle = () => {
    return dispatch(increment());
  };
  const decrementHandle = () => {
    dispatch(decrement());
  };

  return (
    <div className="container">
      <button
        className={count >= 10 ? 'button__disabled' : ''}
        onClick={incrementHandle}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        className={count <= 0 ? 'button__disabled' : ''}
        onClick={decrementHandle}
      >
        Decrement
      </button>
    </div>
  );
}
