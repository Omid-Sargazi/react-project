import { useState } from "react";
const UseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({ fName: "", lName: "" });
  const [items, setItems] = useState([]);

  const IncrementByFive = () => {
    setCount((prev) => prev + 5);
  };

  const handleFirstName = (e) => {
    setName({ ...name, fName: e.target.value });
  };
  const handleLastName = (e) => {
    setName({ ...name, lName: e.target.value });
  };
  //   //////////////////////////////////Array
  const handleArray = () => {
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
      <h1>All about useState</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
        -
      </button>
      <button onClick={IncrementByFive}>Inc5</button>
      <br />
      <br />
      <br />
      <hr />
      <hr />
      <hr />
      <input
        placeholder="Enter Name"
        onChange={handleFirstName}
        value={name.fName}
      />
      <input
        placeholder="Enter lastName"
        onChange={handleLastName}
        value={name.lName}
      />
      <h1>{name.fName}</h1>
      <h1>{name.lName}</h1>
      <br />
      <br />
      <br />
      <hr />
      <hr />
      <hr />
      <button onClick={handleArray}>Generate Number in array</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
};

export default UseState;
