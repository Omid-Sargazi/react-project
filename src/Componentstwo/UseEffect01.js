import { useEffect, useState } from "react";
const UseEffect01 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    document.title = `You Clicked ${count} times`;
    console.log("useEffect-updating document title");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Component Unmounted code...");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []); ///useEffect runs after rendering component

  const handlename = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>UseEffect</h1>
      <h2>{count}</h2>
      <input
        onChange={handlename}
        type="text"
        placeholder="enter name"
        value={name}
      />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Clicked {count} times
      </button>
      <hr />
      <hr />
      <hr />
      <br />
      <div>
        Hooks X -{x} Y-{y}
      </div>
    </>
  );
};
export default UseEffect01;
