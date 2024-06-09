import React, { useReducer } from "react";

const initialValue = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "INC2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "DEC":
      return {
        ...state,
        firstCounter:
          state.firstCounter > 0 ? state.firstCounter - action.value : 0,
      };
    case "DEC2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "Reset":
      return { firstCounter: 0 + action.value };
    default:
      return { firstCounter: initialValue.firstCounter };
  }
};

export default function UseReducer04() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  const IncHandler = () => {
    dispatch({ type: "INC", value: 1 });
  };

  const ResetHandler = () => {
    dispatch({ type: "Reset", value: 0 });
  };

  const DecHandler = () => {
    dispatch({ type: "DEC", value: 1 });
  };

  return (
    <>
      <div>UseReducer04</div>
      <h1>first counter: - {count.firstCounter}</h1>
      <h1>second counter: - {count.secondCounter}</h1>
      <button onClick={IncHandler}>+</button>
      <button onClick={ResetHandler}>Reset</button>
      <button onClick={DecHandler}>-</button>
      <hr />
      <br />
      <button onClick={() => dispatch({ type: "INC2", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "Reset", value: 0 })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: "DEC", value: 5 })}>
        Decrement by 5
      </button>
    </>
  );
}
