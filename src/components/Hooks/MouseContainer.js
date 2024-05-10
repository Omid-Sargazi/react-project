import React, { useState } from "react";
import UseEffectMouse from "./useEffectMouse";

export default function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <div>MouseContainer</div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <UseEffectMouse />}
    </>
  );
}
