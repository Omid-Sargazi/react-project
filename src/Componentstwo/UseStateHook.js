import { useState } from "react";
const UseStateHook = () => {
  const [count, setCount] = useState(0);
  console.log("count");
  return (
    <>
      <h>UseStateHook</h>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
};
export default UseStateHook;
