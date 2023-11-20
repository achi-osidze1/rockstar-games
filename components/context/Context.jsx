import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  const value = {
    games,
    setGames
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
