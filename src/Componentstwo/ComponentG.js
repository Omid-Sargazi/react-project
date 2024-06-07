// import React from "react";
// import { UserContext } from "./ComponentC";
// import { IncContext } from "./ComponentC";

// export default function ComponentG() {
//   return (
//     <>
//       <div>ComponentG</div>
//       <UserContext.Consumer>
//         {(user) => {
//           return (
//             <IncContext.Consumer>
//               {(Inc) => {
//                 return (
//                   <h1>
//                     User context value is: {user} , Inc value {Inc}
//                   </h1>
//                 );
//               }}
//             </IncContext.Consumer>
//           );
//         }}
//       </UserContext.Consumer>
//     </>
//   );
// }

import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function ComponentG() {
  const { user, login } = useContext(UserContext);
  console.log(user, login);
  return (
    <div>
      <div>
        <h1>Child Component</h1>
        {user ? <p>Welcome, {user.name}</p> : <p>Please log in.</p>}
        <button onClick={() => login("John Doe")}>Log In</button>
      </div>
    </div>
  );
}
