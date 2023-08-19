import { Spinner } from "@material-tailwind/react";

export const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white-600 to-white-500">
      <div className="h-6/7 w-2/3 bg-gray-50 rounded-2xl border-2 border-gray-400 flex flex-col items-center p-8 shadow-2xl gap-3">
        <Spinner />
      </div>
    </div>
  );
};
