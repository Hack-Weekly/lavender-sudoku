import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Controls from "../components/Controls";
import { MyContextProvider } from "../components/SelectedCellContext";
import {
  createAndGetGame,
  getGameById,
  getRandomGame,
  validateGame,
} from "../services/endpoints/games";
import { Loading } from "../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { Stats } from "../components/Stats";
import { CongratsMessage } from "../components/CongratsMessage";
import { useCountDown } from "../hooks/useCountDown";
import { FailMessage } from "../components/FailMessage";

const fetchRandomGame = async () => {
  try {
    const res = await getRandomGame();
    return res;
  } catch (error) {
    throw error;
  }
};
function convertToSudokuString(grid) {
  const sudokuArray = grid.map((row) =>
    row.map((cell) => (cell.value === "" ? "0" : cell.value)).join(", ")
  );
  const rowsString = sudokuArray.map((row) => `[${row}]`);
  return `[${rowsString.join(", ")}]`;
}
const Play = ({ isAuth, profile, lastGame, fetchProfile }) => {
  const INITIAL_TIMER_VALUE = 3599;
  const navigate = useNavigate();
  const [gameData, setGameData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [userBoard, setUserBoard] = useState(null);
  const [localTimer, setLocalTimer] = useState(INITIAL_TIMER_VALUE);
  const [userProgress, setUserProgress] = useState(null);
  const [showCongratsDialog, setShowCongratsDialog] = useState(false);
  const [showFailDialog, setShowFailDialog] = useState(false);
  const { minutes, seconds, resetTimer } = useCountDown();

  const fetchGame = async (newGame = false) => {
    try {
      let gameData;

      if (isAuth) {
        if (lastGame && !newGame) {
          gameData = await getGameAndHandleLocalData(lastGame);
        } else {
          gameData = await createGameAndGet();
        }
      } else {
        gameData = await fetchRandomGame();
        localStorage.setItem("userProgress", gameData.game_);
        resetTimer();
      }
      setUserProgress(JSON.parse(localStorage.getItem("userProgress")));
      setGameData(gameData);
    } catch (error) {
      console.error("Error fetching game:", error);
    } finally {
      setIsLoading(false);
      setLocalTimer(localStorage.getItem("timer"));
    }
  };

  const getGameAndHandleLocalData = async (gameId) => {
    const gameData = await getGameById(gameId);
    const localGame = JSON.parse(localStorage.getItem("gameData"));

    if (gameData.message === "Sorry you have no more tries left") {
      setShowFailDialog(true);
    } else if (!localGame || localGame.id !== gameData.id) {
      updateLocalStorageAndTimer(gameData);
    }

    return gameData;
  };

  const updateLocalStorageAndTimer = (gameData) => {
    localStorage.setItem("userProgress", gameData.board);
    localStorage.setItem("gameData", JSON.stringify(gameData));
    localStorage.setItem("timer", INITIAL_TIMER_VALUE);
  };

  const createGameAndGet = async () => {
    const gameData = await createAndGetGame();
    updateLocalStorageAndTimer(gameData);
    return gameData;
  };

  const handleSubmitBoard = async () => {
    if (isAuth) {
      let convertBoard = userBoard && convertToSudokuString(userBoard);
      const res = await validateGame(gameData.id, {
        ...gameData,
        user_solution: convertBoard,
      });
      if (res.data.message === "Congratulation you solved the sudoku") {
        setShowCongratsDialog(true);
        await fetchProfile();
      } else {
        fetchGame();
      }
    }
  };

  const handleFailClose = async () => {
    fetchGame(true);
    resetTimer();
    setShowFailDialog(false);
  };
  const handleCongratsClose = () => {
    setShowCongratsDialog(false);
    resetTimer();
    fetchGame(true);
  };
  useEffect(() => {
    fetchGame();
  }, []);
  useEffect(() => {
    isAuth && fetchProfile();
  }, [gameData]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <MyContextProvider grid={userProgress}>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white-600 to-white-500">
        <div className="h-6/7 w-2/3 bg-gray-50 rounded-2xl border-2 border-gray-400 flex flex-col items-center p-8 shadow-2xl gap-3">
          <div className="flex flex-row gap-5 justify-center items-center">
            <div className="flex flex-col gap-1 ">
              <Stats
                profile={profile}
                gameData={gameData}
                isAuth={isAuth}
                minutes={minutes}
                seconds={seconds}
              />
              <Grid />
            </div>
            <div className="flex flex-col gap-2">
              <Controls setUserBoard={setUserBoard} />
              {isAuth && (
                <button
                  onClick={handleSubmitBoard}
                  className="bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition duration-300 ease-in-out text-center"
                >
                  Submit
                </button>
              )}
              <button
                onClick={() => {
                  fetchGame(true);
                  resetTimer();
                }}
                className="bg-purple-700 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-purple-800 transition duration-300 ease-in-out text-center"
              >
                New game
              </button>
            </div>
          </div>
          <Link to="/" className="mt-3 text-gray-600 hover:text-gray-800 hover:underline">
            Go back to Home
          </Link>
        </div>
      </div>
      {showCongratsDialog && <CongratsMessage onClose={handleCongratsClose} />}
      {showFailDialog && <FailMessage onClose={handleFailClose} />}
    </MyContextProvider>
  );
};

export default Play;
