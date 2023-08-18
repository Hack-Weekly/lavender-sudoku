import { Link, useNavigate } from "react-router-dom";
import { InputForm } from "../components/InputForm";
import { useState } from "react";
import { login, register } from "../services/endpoints/users";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = async () => {
    try {
      await register({
        username: username,
        email: email,
        password: password,
        password2: password,
      });
      await login({username : username, password : password});
      navigate("/");
    } catch (error) {
      setIsInvalid(true);
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        setErrorMessage("Please enter a valid :");
        for (const key in errorData) {
          if (key !== "password2") {
            setErrorMessage((prev) => prev + " " + key);
          }
        }
      }
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-white-600 to-white-500">
      <div className="h-6/7 w-2/3 bg-gray-50 rounded-2xl border-2 border-gray-400 flex flex-col items-center p-8 shadow-2xl gap-3">
        <h1 className="text-4xl font-semibold text-purple-700 underline mb-2">Sign up</h1>

        <div
          className="w-full max-w-md flex flex-col gap-4"
          onChange={() => {
            setErrorMessage("");
            setIsInvalid(false);
          }}
        >
          <InputForm
            placeholder="Username"
            setField={setUsername}
            isInvalid={isInvalid}
          />
          <InputForm placeholder="email" setField={setEmail} isInvalid={isInvalid} />
          <InputForm
            placeholder="Password"
            type="password"
            setField={setPassword}
            isInvalid={isInvalid}
          />
          <button
            onClick={handleSignUp}
            className="bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-800 transition duration-300 ease-in-out"
          >
            Sign up
          </button>
          <div className="text-red-400 ">{errorMessage}</div>
        </div>
        <p>
          You already have an account?{" "}
          <Link to="/login">
            <span className="font-semibold text-purple-600 hover:text-purple-800">Login</span>
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
