import React from "react";
import { useState } from "react";
export default function HookCounter() {
  const [count, setCount] = useState(0);

  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 5);
    }
  };
  return (
    <>
      <div className=" flex p-2 flex-col">
        HookCounter
        <h1>{count}</h1>
        <div className=" flex p-3 m-2">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={IncrementFive}
          >
            Increment By 5
          </button>
        </div>
      </div>
    </>
  );
}
