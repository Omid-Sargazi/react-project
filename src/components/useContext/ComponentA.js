import React from "react";
import { UserContext, ChannelContext } from "../../App";

export default function ComponentA() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <h1>
                    {" "}
                    USer context vale is{user} and channel is {channel}
                  </h1>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
