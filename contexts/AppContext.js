import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    gender: "",
    province: "",
    city: "",
  });

  return <AppContext.Provider value={{ input, setInput }}>{children}</AppContext.Provider>;
};
