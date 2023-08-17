import { Spinner } from "@material-tailwind/react";

export const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-500">
      <div className="h-4/5 w-2/3 bg-white rounded-lg flex flex-col items-center justify-center p-8 shadow-lg gap-3">
        <Spinner />
      </div>
    </div>
  );
};
