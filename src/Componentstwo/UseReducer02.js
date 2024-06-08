import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return { age: state.age + 1 };
  }
}

export default function UseReducer02() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  const handleClick = () => {
    dispatch({ type: "incremented_age" });
  };
  return (
    <>
      <div>UseReducer02</div>
      <button onClick={handleClick}>Increment age</button>
      <p>Hello! You are {state.age}</p>
    </>
  );
}
