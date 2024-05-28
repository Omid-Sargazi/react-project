import { useContext } from "react";
import { CountContext } from "../App";
const ComponentF = () => {
  const { countDispatch } = useContext(CountContext);
  return (
    <>
      <h1>ComponentF</h1>
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
    </>
  );
};
export default ComponentF;
