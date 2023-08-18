import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Controls from "../components/Controls";
import { MyContextProvider } from "../components/SelectedCellContext";
import { createAndGetGame, getGameById, getRandomGame } from "../services/endpoints/games";
import { Loading } from "../components/Loading";
import { Link } from "react-router-dom";

const fetchRandomGame = async () => {
  try {
    const res = await getRandomGame();
    return res;
  } catch (error) {
    throw error;
  }
};

const Play = ({ isAuth,profile, totalGames }) => {
  const [gameData, setGameData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchGame = async () => {
    try {
      let gameData;
      if (isAuth) {
        if(totalGames !== 0){
          // getting latest played game
          const gameId = totalGames;
          gameData = await getGameById(gameId);
          // if solved
          if(gameData.user_solution){
            // generate another game
            gameData = await createAndGetGame();
          }
        }else{
          gameData = await createAndGetGame();
        }
      } else {
        gameData = await fetchRandomGame();
      }
      setGameData(gameData);
    } catch (error) {
      console.error("Error fetching game:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
      fetchGame();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MyContextProvider grid={isAuth ? gameData.board : gameData.game_}>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white-600 to-white-500">
        <div className="h-6/7 w-2/3 bg-gray-50 rounded-2xl border-2 border-gray-400 flex flex-col items-center p-8 shadow-2xl gap-3">
          <div className="flex flex-row gap-5 justify-center items-center">
            <Grid />
            <Controls />
          </div>
          <Link
            to="/"
            className="mt-3 text-gray-600 hover:text-gray-800 hover:underline"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </MyContextProvider>
  );
};

export default Play;
