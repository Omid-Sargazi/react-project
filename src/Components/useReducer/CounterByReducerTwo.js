import { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        firstCounter: state.firstCounter + action.value,
      };
    case "inc2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "dec2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "dec":
      return {
        ...state,
        firstCounter: state.firstCounter - action.value,
      };

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
      <h1>CountTwo: {count.secondCounter}</h1>
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
      <button onClick={() => dispatch({ type: "inc2", value: 1 })}>
        IncSecond
      </button>
      <button onClick={() => dispatch({ type: "dec2", value: 1 })}>
        DecSecond
      </button>
    </>
  );
};

export default CounterByReducerTwo;
