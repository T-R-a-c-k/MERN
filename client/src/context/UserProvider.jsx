import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userInstance, setUserInstance] = useState(null);

  const userContextValue = {
    userInstance,
    setUserInstance,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
