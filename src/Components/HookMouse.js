import React, { useState, useEffect } from "react";

export default function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("useEffect locked...");
    window.addEventListener("mousemove", (e) => {
      console.log("Mouse Event");
      setX(e.clientX);
      setY(e.clientY);
    });
  }, []);
  return (
    <div>
      <h2>
        Hooks X-{x} Y- {y}
      </h2>
    </div>
  );
}
