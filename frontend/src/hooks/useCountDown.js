import { useEffect, useState } from "react";

const useCountDown = () => {
    let initalTime = Number(localStorage.getItem("timer"));
    const [countDown, setCountDown] = useState(initalTime)

    const resetTimer = (initTime = 3599) => {
        setCountDown(initTime);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (countDown === 0) return;
            setCountDown(countDown - 1);
            localStorage.setItem("timer", countDown - 1);

        }, 1000);

        return () => clearInterval(interval);
    }, [countDown]);

    const minutes = Math.floor(countDown/60);
    const seconds = countDown % 60;
    return {minutes: minutes, seconds: seconds, resetTimer: resetTimer} 
}

// calc minutes and seconds left




export { useCountDown }