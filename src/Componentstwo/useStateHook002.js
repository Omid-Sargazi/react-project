import { useState } from "react";
const USeStateHook002 = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleFirstName = (e) => {
    setName({ ...name, firstName: e.target.value });
  };
  const handleLastName = (e) => {
    setName({ ...name, lastName: e.target.value });
  };

  return (
    <>
      <h2>USeStateHook002</h2>
      <input
        placeholder="enter FirstName"
        type="text"
        onChange={handleFirstName}
        value={name.firstName}
      />
      <h3>{name.firstName}</h3>
      <input
        placeholder="enter LastName"
        type="text"
        onChange={handleLastName}
        value={name.lastName}
      />
      <h3>{name.lastName}</h3>
    </>
  );
};
export default USeStateHook002;
