import React from "react";
import { useState, useEffect } from "react";
import HookCounterTwo from "../HookCounterTwo";

export default function HookCounterone() {
  const [count, setCOunt] = useState(0);
  const [name, setName] = useState("");

  const handleInput = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("useEffect- updating document title..");
    document.title = `You clicked ${count}`;
  }, [count]);

  return (
    <div>
      <h2>UseEffect Hook</h2>
      <input placeholder="enter name" value={name} onChange={handleInput} />
      <br />
      <button onClick={() => setCOunt(count + 1)}>Inc</button>
      <HookCounterTwo />
      <h1>count: {count}</h1>
    </div>
  );
}
