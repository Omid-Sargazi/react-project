import React, { useState } from "react";
import ComponentE from "./ComponentE";
import { userProvider } from "./UserContext";

// export const UserContext = React.createContext();
// export const IncContext = React.createContext();

export default function ComponentC() {
  //   const [count, setCount] = useState(0);
  return (
    <userProvider>
      <div>
        {/* <UserContext.Provider value={"Omid"}>
          <IncContext.Provider value={count}> */}
        <ComponentE />
        {/* </IncContext.Provider> */}
        {/* <h1>{count}</h1> */}
        {/* </UserContext.Provider>*/}
      </div>
    </userProvider>
  );
}
