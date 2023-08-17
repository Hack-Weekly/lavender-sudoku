import { Link, useNavigate } from "react-router-dom";
import { Leaderboard } from "../components/LeaderBoard";
import { Loading } from "../components/Loading";
import { logout } from "../services/endpoints/users";
import { FireIcon, BoltIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { getLeaderBoard } from "../services/endpoints/leaderboard";
export const LandingPage = ({ isAuth, profile }) => {

  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(()=>{
    
    const fetchLeaderboard = async() => {
      try{
        const res = await getLeaderBoard();
        setLeaderboardData(res)
      }catch(error){
        console.error(error);
      }
    } 
    fetchLeaderboard();
  },[])
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-white-600 to-white-500">
      <div className="h-6/7 w-2/3 bg-gray-50 rounded-2xl border-2 border-gray-400 flex flex-col items-center p-8 shadow-2xl gap-3">
        <h1 className="text-4xl font-semibold text-purple-400 underline mb-2">Lavender 
        <img className="inline-block h-18 w-18" src="https://avatars.githubusercontent.com/t/7495676?s=116&v=4" alt="lavender" />
        Sudoku</h1>
        <p className="text-lg text-center text-gray-700 mb-4">
          {isAuth ? (
            <>
              <p>
                Welcome back, <b>{profile.username}</b>!
                <span
                  className="text-red-800 font-semibold cursor-pointer ml-2 hover:underline"
                  onClick={handleLogout}
                >
                  Logout
                </span>
              </p>
            </>
          ) : (
            "Challenge your mind with our soothing Lavender-themed Sudoku puzzles."
          )}
        </p>
        {isAuth && (
          <div className="flex items-center">
            <div className="flex flex-row gap-1 items-center justify-center">
              {isAuth && (
                <>
                  <div className="flex items-center">
                    <FireIcon className="h-5 w-5 text-orange-400" />
                    <span className="text-lg text-gray-600">Level {profile.level}</span>
                  </div>
                  <div className="flex items-center">
                    <BoltIcon className="h-5 w-5 text-yellow-400" />
                    <span className="text-lg text-gray-600">Score: {profile.score}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        <div className="flex flex-row gap-1">
          <Link
            to="/play"
            className="bg-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            {isAuth ? "Keep playing" : "Try a game"}
          </Link>
        </div>
        <Leaderboard leaderboardData={leaderboardData} username={isAuth ? profile.username : ""} />
        <div className="text-sm text-gray-700 ">
          {!isAuth && (
            <>
              <p>
                Want to join the Leaderboard?
                <Link to="/login" className="text-blue-600 ml-2 hover:underline">
                  login
                </Link>{" "}
                or{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
                .{" "}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
