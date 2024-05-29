import React from "react";
const Button = ({ handleClick, children }) => {
  console.log(`Rendereing button-`, children);
  return (
    <>
      <h1>ParentComponent</h1>
      <button onClick={handleClick}>{children}</button>
    </>
  );
};

export default React.memo(Button);
