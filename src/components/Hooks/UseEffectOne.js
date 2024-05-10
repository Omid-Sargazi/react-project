import React, { useState, useEffect } from "react";

export default function UseEffectOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });

  return (
    <>
      <div>UseEffectOne</div>
      <button onClick={() => setCount(count + 1)}>Click {count} items</button>
    </>
  );
}
