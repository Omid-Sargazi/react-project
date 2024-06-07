import React, { useState, createContext } from "react";

const UserContext = createContext();

const userProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ name: username });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, userProvider };
