import { useEffect, useState } from "react";

const useCountDown = () => {

    const initalTime = 3600; // 60 min to solve sudoku
    const [countDown, setCountDown] = useState(initalTime)

    const resetTimer = () => {
        setCountDown(initalTime);
        console.log(countDown);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (countDown === 0) return;
            setCountDown(countDown - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [countDown]);

    const minutes = Math.floor(countDown/60);
    const seconds = countDown % 60;
    return {minutes: minutes, seconds: seconds, resetTimer: resetTimer} 
}

// calc minutes and seconds left




export { useCountDown }