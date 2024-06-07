import React from "react";
import { UserContext } from "./ComponentC";
import { IncContext } from "./ComponentC";

export default function ComponentG() {
  return (
    <>
      <div>ComponentG</div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <IncContext.Consumer>
              {(Inc) => {
                return (
                  <h1>
                    User context value is: {user} , Inc value {Inc}
                  </h1>
                );
              }}
            </IncContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </>
  );
}
