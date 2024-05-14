import React from "react";
import { UserContext } from "../../App";

export default function ComponentA() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return <h1> USer context vale is{user}</h1>;
        }}
      </UserContext.Consumer>
    </div>
  );
}
