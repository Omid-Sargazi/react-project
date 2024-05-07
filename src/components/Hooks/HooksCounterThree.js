import React, { useState } from "react";

export default function HooksCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  console.log("render");
  return (
    <>
      <div>HooksCounterThree</div>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          value={name.firstName}
          type="text"
          placeholder="Enter your name"
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
          type="text"
          placeholder="enter your lastName"
        />
        <h2>Your first name is-{name.firstName}</h2>
        <h2>Your last name is-{name.lastName}</h2>
        <h2>Your last name is-{JSON.stringify(name)}</h2>
      </form>
    </>
  );
}
