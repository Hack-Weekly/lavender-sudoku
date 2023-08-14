import { Link } from "react-router-dom";
import { Leaderboard } from "../components/LeaderBoard";

export const LandingPage = () => {
  const leaderboardData = [
    { rank: 1, username: "Player1", score: 2000 },
    { rank: 2, username: "Player2", score: 1800 },
    { rank: 3, username: "Player3", score: 1600 },
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-500">
      <div className="h-4/5 w-2/3 bg-white rounded-lg flex flex-col items-center p-8 shadow-lg gap-3">
        <h1 className="text-4xl font-semibold text-purple-600 mb-2">Lavender Sudoku</h1>
        <p className="text-lg text-center text-gray-700 mb-6">
          Challenge your mind with our soothing Lavender-themed Sudoku puzzles.
        </p>
        <a
          href="/play"
          className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 ease-in-out"
        >
          Play Now
        </a>

        <Leaderboard leaderboardData={leaderboardData} />
        
        <p className="text-lg text-gray-700 mt-6">
          Want to join the Leaderboard? 
          <Link to="/login" className="text-blue-600 ml-2 hover:underline">Login</Link> or <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>.
        </p>
      </div>
    </div>
  );
};
