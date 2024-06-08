import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state.firstCounter,
        firstCounter: state.firstCounter + action.value,
      };
    case "DEC":
      return {
        firstCounter:
          state.firstCounter > 0 ? state.firstCounter - action.value : 0,
      };
    case "Reset":
      return { firstCounter: 0 };
    default:
      return initialState;
  }
};

export default function UseReducer03() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const IncHandler = () => {
    dispatch({ type: "INC", value: 1 });
  };
  const ResetHandler = () => {
    dispatch({ type: "Reset", value: 1 });
  };
  const DecHandler = () => {
    dispatch({ type: "DEC", value: 1 });
  };
  return (
    <>
      <div>UseReducer03</div>
      <h1>{count.firstCounter}</h1>
      <button onClick={IncHandler}>+</button>
      <button onClick={ResetHandler}>Reset</button>
      <button onClick={DecHandler}>-</button>
      <br />
      <br />
      <br />
      <hr />
      <hr />
      <hr />
      <button onClick={() => dispatch({ type: "INC", value: 5 })}>
        IncBy-5
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "DEC", value: 5 })}>
        DecBy-5
      </button>
      <input
        value={count.firstCounter}
        onChange={(e) => dispatch({ type: "INC", value: e.target.value })}
      />
    </>
  );
}
