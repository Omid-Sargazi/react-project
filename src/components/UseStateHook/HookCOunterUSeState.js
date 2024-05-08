import React, { useState } from "react";
import { json } from "react-router-dom";

export default function HookCOunterUSeState() {
  const [name, setName] = useState({ name: "", lastName: "" });
  return (
    <>
      <div>HookCOunterUSeState</div>
      <form className=" flex">
        <input
          type="text"
          placeholder="enter name"
          value={name.name}
          onChange={(e) => setName({ ...name, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="enter name"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your first name is {name.name} </h2>
        <h2>Your first name is {name.lastName} </h2>
        <h1>{JSON.stringify(name)}</h1>
      </form>
    </>
  );
}
