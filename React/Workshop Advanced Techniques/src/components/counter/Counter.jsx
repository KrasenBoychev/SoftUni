import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(state => state + 1);
    };

  return (
    <>
        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={incrementHandler}>Increment</button>
    </>
  );
}
