const Input = ({ label, labelFor, type }) => {
  return (
    <div className="w-full flex flex-col">
      <label className="text-sm" htmlFor={labelFor}>
        {label}
      </label>
      <input
        type={type}
        id={labelFor}
        className="w-full outline-none px-[10px] py-[8px] rounded-lg border border-black/40 focus:border-blue focus:ring-1"
        required
      />
    </div>
  );
};

export default Input;
