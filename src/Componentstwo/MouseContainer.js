import { useState } from "react";
import UseEffect01 from "./UseEffect01";
const MouseContainer = () => {
  const [dispaly, setDispaly] = useState(true);

  return (
    <>
      <h1>MouseContainer</h1>
      <button onClick={() => setDispaly(!dispaly)}>Toggle Display</button>
      {dispaly && <UseEffect01 />}
    </>
  );
};

export default MouseContainer;
