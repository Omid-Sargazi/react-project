import React, { useState } from "react";

export default function HookCounterTwo() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleIncFive = () => {
    for (let i = 1; i <= 5; i++) {
      setCount(count + i);
    }
  };

  const handleDec = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <div>
      <h1> Count: {count}</h1>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDec}>Dec</button>
      <button onClick={handleIncFive}>Inc5</button>
    </div>
  );
}
