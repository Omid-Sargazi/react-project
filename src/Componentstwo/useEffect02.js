import { useEffect, useState } from "react";
const UseEffect02 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  const handleInc = () => {
    setCount((prev) => prev + 1);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    document.title = `You Clicked ${count} times}`;
    console.log("UseEffect was rendered");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  });
  return (
    <>
      <h1>UseEffect02</h1>
      <h2>{count}</h2>
      <button onClick={handleInc}>Inc</button>
      <hr />
      <hr />
      <hr />
      <br />
      <br />
      <br />
      <div>
        X-{x} Y-{y}
      </div>
      <input placeholder="Enter your name" onChange={handleName} vale={name} />
    </>
  );
};
export default UseEffect02;
