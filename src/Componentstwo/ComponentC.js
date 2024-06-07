import React, { useState } from "react";
import ComponentE from "./ComponentE";

export const UserContext = React.createContext();
export const IncContext = React.createContext();

export default function ComponentC() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <UserContext.Provider value={"Omid"}>
        <IncContext.Provider value={count}>
          <ComponentE />
        </IncContext.Provider>
        <h1>{count}</h1>
      </UserContext.Provider>
    </div>
  );
}
