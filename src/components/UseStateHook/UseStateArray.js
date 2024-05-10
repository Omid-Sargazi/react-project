import React, { useState } from "react";

export default function UseStateArray() {
  const [items, setItem] = useState([]);

  const addItem = () => {
    setItem([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <>
      <div>UseStateArray</div>
      <button onClick={addItem}>Add a number</button>
      <div>
        <ul className=" flex flex-col">
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
