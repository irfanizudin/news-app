import { useRouter } from "next/router";

const Button = ({ children, className, link }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/${link}`)}
      className={`${className} text-lg font-semibold capitalize`}
    >
      {children}
    </button>
  );
};

export default Button;
