import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "./Button";
import { MdExpandMore } from "react-icons/md";

const Header = () => {
  const { pathname } = useRouter();
  const route = pathname.split("/")[1];
  const btnHeader = (route === "login" && "register") || (route === "register" && "login");

  const [username, setUsername] = useState();

  useEffect(() => {
    const { first_name, last_name } = JSON.parse(localStorage.getItem("dataUser"));
    setUsername(first_name + " " + last_name);
    return () => {};
  }, []);

  return (
    <div className="w-full h-[70px] bg-white border-b border-black/25 flex items-center justify-between px-[80px]">
      <Link href="/">
        <a className="text-lg font-bold">News App</a>
      </Link>
      {route === "login" || route === "register" ? (
        <Button className="text-blue border rounded-lg px-[10px] py-[6px]" link={btnHeader}>
          {btnHeader}
        </Button>
      ) : (
        <div className="text-sm font-medium capitalize rounded-lg px-[10px] py-[6px] bg-gray flex items-center cursor-pointer">
          {username}
          <MdExpandMore className="ml-1 text-black/50" />
        </div>
      )}
    </div>
  );
};

export default Header;
