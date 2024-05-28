import { useReducer } from "react";
const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { firstCounter: state.firstCounter + action.value };

    case "dec":
      return { firstCounter: state.firstCounter - action.value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};
const CounterByReducerTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>CounterByReducerTwo</h2>
      <h1>CountTwo: {count.firstCounter}</h1>
      <button onClick={() => dispatch({ type: "inc", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "inc", value: 5 })}>
        Increment+5
      </button>
      <button onClick={() => dispatch({ type: "dec", value: 5 })}>Dec-5</button>
      <button onClick={() => dispatch({ type: "dec", value: 1 })}>
        Decrement
      </button>
    </>
  );
};

export default CounterByReducerTwo;
