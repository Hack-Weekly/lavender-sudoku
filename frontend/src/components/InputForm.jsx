export const InputForm = ({placeholder , type="text", setField, isInvalid}) => {
  return (
    <div className="mb-4">
      <input
        className={`w-full px-4 py-3 rounded-md border ${isInvalid ? "border-red-500" : "border-purple-500"}  placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-300 ease-in-out`}
        placeholder={placeholder}
        type={type}
        onChange={(e)=>  setField(e.target.value)}
      />
    </div>
  );
};
