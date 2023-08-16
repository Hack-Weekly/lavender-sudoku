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
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-500">
      <div className="h-4/5 w-2/3 bg-white rounded-lg flex flex-col items-center p-8 shadow-lg gap-4">
        <h1 className="text-4xl font-semibold text-purple-600 mb-4">Login</h1>
        <div className="w-full max-w-md flex flex-col gap-4" onChange={() =>setIsInvalid(false)}>
          <InputForm placeholder="Username" setField={setUsername} isInvalid={isInvalid}/>
          <InputForm placeholder="Password" type="password" setField={setPassword} isInvalid={isInvalid}/>
          <button onClick={handleLogin} className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out">
            Login
          </button>
          {isInvalid && <div className="text-red-600 text-center">Please enter a valid username and password !</div>}
        </div>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-800">
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
