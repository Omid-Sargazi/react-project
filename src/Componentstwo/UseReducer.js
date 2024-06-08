import React, { useReducer } from "react";

let Initialvalue = 0;
function reducer(state, action) {
  if (action.type === "Inc") {
    return state + 1;
  } else if (action.type === "dec") {
    return state - 1;
  } else if (action.type === "reset") {
    return 0;
  } else {
    return Initialvalue;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, Initialvalue);

  const Increment = () => {
    console.log("Inc");
    dispatch({ type: "Inc", name: "Omid" });
  };

  const Decrement = () => {
    dispatch({ type: "dec", name: "Saeed" });
  };
  const Reset = () => {
    dispatch({ type: "reset", name: "Mika" });
  };

  return (
    <>
      <div>UseReducer</div>
      <h1>{state}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
}
