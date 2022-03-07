import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { MdLogout } from "react-icons/md";
import { AppContext } from "../contexts/AppContext";

const Header = () => {
  const { pathname } = useRouter();
  const router = useRouter();

  const route = pathname.split("/")[1];
  const btnHeader = (route === "login" && "register") || (route === "register" && "login");

  const [username, setUsername] = useState();
  const { setShowAlert } = useContext(AppContext);

  useEffect(() => {
    if (
      localStorage.getItem("dataUser") !== null ||
      localStorage.getItem("loginStatus") === !null
    ) {
      const { first_name, last_name } = JSON.parse(localStorage.getItem("dataUser"));
      setUsername(first_name + " " + last_name);
    }
    return () => {};
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginStatus");
    router.push("/login");
    setShowAlert({ logout: true });
  };

  return (
    <div className="w-full h-[70px] bg-white border-b border-black/25 flex items-center justify-between px-[20px] md:px-[80px]">
      <Link href="/">
        <a className="text-lg font-bold">News App</a>
      </Link>
      {route === "login" || route === "register" ? (
        <Button className="text-blue border rounded-lg px-[10px] py-[6px]" link={btnHeader}>
          {btnHeader}
        </Button>
      ) : (
        <div className="flex">
          <div className="text-sm font-medium capitalize flex items-center">Hi, {username}</div>
          <div
            onClick={handleLogout}
            className="px-[10px] py-[6px] bg-gray rounded-lg ml-3 cursor-pointer"
          >
            <MdLogout />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
