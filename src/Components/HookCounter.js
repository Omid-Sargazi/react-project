import { useState } from "react";
const HookCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Hook Counter</h1>
      <h1>count: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
    </>
  );
};

export default HookCounter;
