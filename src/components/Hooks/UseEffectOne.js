import React, { useState, useEffect } from "react";

export default function UseEffectOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect Updating document title");
    document.title = `You Clicked ${count} times`;
  }, [count]);

  return (
    <>
      <div>UseEffectOne</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} items</button>
    </>
  );
}
