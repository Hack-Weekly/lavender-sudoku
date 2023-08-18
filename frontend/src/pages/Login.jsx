import { Link, useNavigate } from "react-router-dom";
import { InputForm } from "../components/InputForm";
import { useState } from "react";
import { login} from "../services/endpoints/users";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async() => {
    try{
    await login({username, password});
    navigate("/");
    }catch(error){
      setIsInvalid(true);
    }
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-white-600 to-white-500">
      <div className="h-6/7 w-2/3 bg-gray-50 rounded-2xl border-2 border-gray-400 flex flex-col items-center p-8 shadow-2xl gap-3">
        <h1 className="text-4xl font-semibold text-purple-700 underline mb-2">Login</h1>
        <div className="w-full max-w-md flex flex-col gap-4" onChange={() =>setIsInvalid(false)}>
          <InputForm placeholder="Username" setField={setUsername} isInvalid={isInvalid}/>
          <InputForm placeholder="Password" type="password" setField={setPassword} isInvalid={isInvalid}/>
          <button onClick={handleLogin} className="bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-800 transition duration-300 ease-in-out">
            Login
          </button>
          {isInvalid && <div className="text-red-600 text-center">Please enter a valid username and password !</div>}
        </div>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold text-purple-600 hover:text-purple-800">
            Sign up
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
