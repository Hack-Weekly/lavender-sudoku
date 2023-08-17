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
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-500">
      <div className="h-4/5 w-2/3 bg-white rounded-lg flex flex-col items-center p-8 shadow-lg gap-4">
        <h1 className="text-4xl font-semibold text-purple-600 mb-4">Sign up</h1>

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
            className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Sign up
          </button>
          <div className="text-red-400 ">{errorMessage}</div>
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
