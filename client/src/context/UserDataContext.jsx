import React, { createContext, useState } from "react";

export const UserDataContexts = createContext(null);

export const UserDataContext = ({ children }) => {
  const [userData, setUserData] = useState();
  return (
    <UserDataContexts.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContexts.Provider>
  );
};
