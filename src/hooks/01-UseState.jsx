

import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);

  //* PROBLEM: Will not work Correctly
  const incrementWrong = () => {

    //* Will increase one count only
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  //* CORRECT: Guaranteed to work
  const incrementRight = () => {

    //* Each update is based on previous state
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementWrong}>Increment Wrong</button>
      <button onClick={incrementRight}>Increment Right</button>
    </div>
  );
}

export default UseState
