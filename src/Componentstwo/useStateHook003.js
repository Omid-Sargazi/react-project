import { useState } from "react";
const UseStateHook03 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [items, setItems] = useState([]);

  const nameHandler = (e) => {
    setName({ ...name, firstName: e.target.value });
  };

  const lastnameHandler = (e) => {
    setName({ ...name, lastName: e.target.value });
  };

  const handleNumber = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <>
      <h1>UseStateHook03</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <br />
      <br />
      <br />
      <hr />
      <hr />
      <input
        placeholder="Enter your name"
        value={name.firstName}
        onChange={nameHandler}
      />
      <input
        placeholder="Enter your lastName"
        value={name.lastName}
        onChange={lastnameHandler}
      />
      <h2>{name.firstName}</h2>
      <h2>{name.lastName}</h2>
      <br />
      <br />
      <hr />
      <hr />
      <button onClick={handleNumber}>Generate Number</button>
      <div>
        <ul>
          {items.map((item) => (
            <h1 key={item.id}>{item.value}</h1>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseStateHook03;
