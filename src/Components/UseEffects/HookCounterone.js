import React from "react";
import { useState, useEffect } from "react";
import HookCounterTwo from "../HookCounterTwo";

export default function HookCounterone() {
  const [count, setCOunt] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count}`;
  });

  return (
    <div>
      <h2>UseEffect Hook</h2>
      <button onClick={() => setCOunt(count + 1)}>Inc</button>
      <HookCounterTwo />
      <h1>count: {count}</h1>
    </div>
  );
}
