import { useState } from "react";
import UseEffect02 from "./useEffect02";
const MouseCounter02 = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <h1>MouseCounter02</h1>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <UseEffect02 />}
    </>
  );
};
export default MouseCounter02;
