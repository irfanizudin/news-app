import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Input = ({ label, name, type, value, className, placeholder }) => {
  const { input, setInput } = useContext(AppContext);

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setInput({ ...input, [name]: value });
  };
  return (
    <div className="w-full flex flex-col">
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`${className} w-full outline-none px-[10px] py-[8px] rounded-lg border border-black/40 focus:border-blue focus:ring-1`}
        required
      />
    </div>
  );
};

export default Input;
