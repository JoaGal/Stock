import React, { createContext, useState } from "react";

export const InputValueContexts = createContext(null);

export const InputValueContext = ({ children }) => {
  const [inputValue, setInputValue] = useState();

  return (
    <InputValueContexts.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputValueContexts.Provider>
  );
};
