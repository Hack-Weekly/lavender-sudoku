import { Link } from "react-router-dom";
import { InputForm } from "../components/InputForm";

export const Signup = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-500">
      <div className="h-4/5 w-2/3 bg-white rounded-lg flex flex-col items-center p-8 shadow-lg gap-4">
        <h1 className="text-4xl font-semibold text-purple-600 mb-4">Sign up</h1>

        <div className="w-full max-w-md flex flex-col gap-4">
          <InputForm placeholder="Username" />
          <InputForm placeholder="email" />

          <InputForm placeholder="Password" type="password" />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out">
            Sign up
          </button>
        </div>
        <p>
          You already have an account?{" "}
          <Link to="/login">
            <span className="font-semibold text-blue-600 hover:text-blue-800">Login</span>
          </Link>
        </p>
        <div className="mt-6">
          <Link to="/" className="text-gray-600 hover:text-gray-800 hover:underline">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
