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
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-500">
      <div className="h-4/5 w-2/3 bg-white rounded-lg flex flex-col items-center p-8 shadow-lg gap-3">
        <h1 className="text-4xl font-semibold text-purple-600 mb-2">Lavender Sudoku</h1>
        <p className="text-lg text-center text-gray-700 mb-4">
          {isAuth ? (
            <>
              <p>
                Welcome back, <b>{profile.username}</b> !
                <span
                  className="text-blue-600 font-semibold cursor-pointer ml-2 hover:underline"
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
                    <FireIcon className="h-5 w-5 text-purple-600" />
                    <span className="text-lg text-gray-600">Level {profile.level}</span>
                  </div>
                  <div className="flex items-center">
                    <BoltIcon className="h-5 w-5 text-yellow-400" />
                    <span className="text-lg text-gray-600">{profile.score} Score</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        <div className="flex flex-row gap-1">
          <Link
            to="/play"
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            {isAuth ? "Keep playing" : "Try a game"}
          </Link>
        </div>
        <Leaderboard leaderboardData={leaderboardData} username={isAuth ? profile.username : ""} />
        <div className="text-lg text-gray-700">
          {!isAuth && (
            <>
              <p>
                Want to join the Leaderboard?
                <Link to="/login" className="text-blue-600 ml-2 hover:underline">
                  Login
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
