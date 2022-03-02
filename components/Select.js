import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { MdExpandMore } from "react-icons/md";

const Select = ({ label, name, data, value }) => {
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
      <div className="w-full relative">
        <select
          className="w-full outline-none px-[10px] py-[8px] rounded-lg border border-black/40 focus:border-blue focus:ring-1 capitalize invalid:text-black/30 appearance-none"
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          required
        >
          <option value="" disabled>{`--Select ${name}--`}</option>
          {data &&
            data.map((data, index) => {
              return (
                <option key={index} value={data}>
                  {data}
                </option>
              );
            })}
        </select>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 px-2 text-black/50">
          <MdExpandMore />
        </div>
      </div>
    </div>
  );
};

export default Select;
