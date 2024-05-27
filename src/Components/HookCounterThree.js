import React, { useState } from "react";

export default function HookCounterThree() {
  const [name, setName] = useState({ fName: "", lName: "" });

  const handlefName = (e) => {
    setName({ ...name, fName: e.target.value });
  };

  const handleLName = (e) => {
    setName({ ...name, lName: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter fName"
        value={name.fName}
        onChange={handlefName}
      />
      <input
        type="text"
        placeholder="Enter lname"
        value={name.lName}
        onChange={handleLName}
      />
      <h2>Your FirstName is: {name.fName}</h2>
      <h2>Your LastName is: {name.lName}</h2>
    </div>
  );
}
