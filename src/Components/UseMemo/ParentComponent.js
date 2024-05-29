import { memo, useState } from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  console.log(`render parent component`);

  return (
    <>
      <h1>
        <ChildComponent value={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </h1>
    </>
  );
};
export default ParentComponent;
