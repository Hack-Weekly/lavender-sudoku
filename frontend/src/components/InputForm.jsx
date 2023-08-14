export const InputForm = ({placeholder , type="text"}) => {
  return (
    <div className="mb-4">
      <input
        className="w-full px-4 py-3 rounded-md border border-purple-300 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-300 ease-in-out"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
