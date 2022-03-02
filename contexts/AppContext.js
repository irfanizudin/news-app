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
  const [showAlert, setShowAlert] = useState({ login: false, registration: false });

  return (
    <AppContext.Provider value={{ input, setInput, showAlert, setShowAlert }}>
      {children}
    </AppContext.Provider>
  );
};
