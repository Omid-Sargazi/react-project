import React, { useEffect, useState } from "react";

export default function AllAboutuseEffect() {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [name, setName] = useState("");

  const displayXY = (e) => {
    console.log("Mouse Event ");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.document.title = `Clicked by you ${count}`;
    console.log("useEffect-updating document title");
    window.addEventListener("mousemove", displayXY);

    return () => {
      window.removeEventListener("mousemove", displayXY);
    };
  });

  const textHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>All about useEffect</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <h2>
        X-{x} Y-{y}
      </h2>
      <input
        placeholder="enter your code..."
        type="text"
        onChange={textHandler}
        value={name}
      />
      <h2>{name}</h2>
    </div>
  );
}
