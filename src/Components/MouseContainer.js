import React from "react";
import { useState } from "react";
import HookMouse from "./HookMouse";

export default function MouseContainer() {
  const [display, setDispaly] = useState(true);
  return (
    <div>
      <button onClick={() => setDispaly(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  );
}
