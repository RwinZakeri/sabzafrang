const MainInput = ({
  label,
  type,
  value,
  name,
  placeholder,
  onChange,
}: {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler;
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="altImg" className="text-primaryGreen py-2">
        {label}
      </label>
      <input
        type={type || "text"}
        id="altImg"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-primaryGreen focus:outline-none focus:border-primaryGreen"
      />
    </div>
  );
};

export default MainInput;
