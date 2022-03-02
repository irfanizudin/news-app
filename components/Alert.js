import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

const Alert = ({ message, status }) => {
  const { setShowAlert } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setShowAlert({ login: false, registration: false });
    }, 3000);
    return () => {};
  }, []);

  return (
    <div
      className={`${status === "success" && "text-green-700 bg-green-100"} ${
        status === "failed" && "text-red-700 bg-red-100"
      } absolute top-20 right-1/2 translate-x-1/2 px-4 py-3 leading-normal  rounded-lg`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Alert;
