import { useContext } from "react";
import { CountContext } from "../App";
const ComponentA = () => {
  const { countDispatch } = useContext(CountContext);

  return (
    <>
      <h1>
        ComponentA
        <button
          onClick={() => {
            countDispatch("inc");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            countDispatch("reset");
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            countDispatch("dec");
          }}
        >
          -
        </button>
      </h1>
    </>
  );
};
export default ComponentA;
