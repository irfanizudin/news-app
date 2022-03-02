import Link from "next/link";
import Button from "./Button";

const Header = ({ buttonText, buttonLink }) => {
  return (
    <div className="w-full h-[70px] bg-white border-b border-black/25 flex items-center justify-between px-[80px]">
      <Link href="/">
        <a className="text-lg font-bold">News App</a>
      </Link>
      <Button className="text-blue border rounded-lg px-[10px] py-[6px]" link={buttonLink}>
        {buttonText}
      </Button>
    </div>
  );
};

export default Header;
