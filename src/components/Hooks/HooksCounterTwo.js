import React, { useState } from "react";

export default function HooksCounterTwo() {
  const [count, setCount] = useState(0);

  console.log("render the component");

  const IncrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <div>HooksCounterTwo</div>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={IncrementByFive}>Increment By five</button>
    </>
  );
}
