import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return { age: state.age + 1, name: state.name };
  } else if (action.type === "changed_name") {
    return {
      name: action.nextName,
      age: state.age,
    };
  }
}

export default function UseReducer02() {
  const [state, dispatch] = useReducer(reducer, { name: "Omid", age: 42 });
  const handleClick = () => {
    dispatch({ type: "incremented_age" });
  };

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }
  return (
    <>
      <div>UseReducer02</div>
      <button onClick={handleClick}>Increment age</button>
      <p>Hello! You are {state.age}</p>
      <input onChange={handleInputChange} value={state.name} />
      <p>{state.name}</p>
    </>
  );
}
