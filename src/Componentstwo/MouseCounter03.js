import React, { useState } from "react";
import AllAboutuseEffect from "./AllAboutuseEffect";

export default function MouseCounter03() {
  const [display, setDisplay] = useState(true);

  const displayHandler = () => {
    setDisplay(!display);
  };
  return (
    <>
      <div>{display && <AllAboutuseEffect />}</div>
      <button onClick={displayHandler}>Toggle Display</button>
    </>
  );
}
