import React, { useState, useEffect } from "react";

export default function UseEffectMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <>
      <div>useEffectMouse</div>
      Hoojs X -{x} Y - {y}
    </>
  );
}
