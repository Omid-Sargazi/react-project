import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;

    case "dec":
      return state > 0 ? state - 1 : initialState;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const CounterByReducer = () => {
  const [count, disPatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>CounterByReducer</h1>
      <h2>Count:{count}</h2>

      <button onClick={() => disPatch("inc")}>Inc</button>
      <button onClick={() => disPatch("reset")}>Reset</button>
      <button onClick={() => disPatch("dec")}>Dec</button>
    </>
  );
};

export default CounterByReducer;
