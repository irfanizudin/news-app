import { MdArrowUpward } from "react-icons/md";

const ButtonScrollTop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[70px] h-[70px] bg-gray fixed bottom-6 right-4 sm:right-8 rounded-full grid place-items-center shadow-lg cursor-pointer"
    >
      <MdArrowUpward size={30} />
    </div>
  );
};

export default ButtonScrollTop;
