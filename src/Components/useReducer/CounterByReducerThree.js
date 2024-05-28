import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

//in this reduce is used for two useReducer
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, firstCounter: state.firstCounter + action.value };

    case "dec":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};
export default function CounterByReducerThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count three: {count.firstCounter}</h1>
      <button onClick={() => dispatch({ type: "inc", value: 10 })}>+</button>
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: "dec", value: 10 })}>-</button>

      <br />
      <hr />
      <h1>Count Two: {countTwo.firstCounter}</h1>
      <button onClick={() => dispatchTwo({ type: "inc", value: 1 })}>+</button>
      <button onClick={() => dispatchTwo({ type: "reset", value: 0 })}>
        Reset
      </button>
      <button onClick={() => dispatchTwo({ type: "dec", value: 1 })}>-</button>
    </div>
  );
}
