import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userInstance, setUserInstance] = useState(() => {
    const userInLocalStorage = localStorage.getItem("user");
    return userInLocalStorage ? JSON.parse(userInLocalStorage) : null;
  });
  const [tokenInstance, setTokenInstance] = useState(() => {
    const tokenInLocalStorage = localStorage.getItem("token");
    return tokenInLocalStorage ? JSON.parse(tokenInLocalStorage) : null;
  });

  const userContextValue = {
    userInstance,
    setUserInstance,
    tokenInstance,
    setTokenInstance,
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userInstance));
    localStorage.setItem("token", JSON.stringify(tokenInstance));
  }, [userInstance, tokenInstance]);

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
