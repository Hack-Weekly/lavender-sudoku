import { createContext, useContext, useState } from "react";

const MyContext = createContext();

let grid = [];
for (let i = 0; i < 81; i++) {
    grid.push("");
}

export const MyContextProvider = ({ children }) => {
    const [selectedCell, setSelectedCell] = useState('');
    const [dataArray, setDataArray] = useState(grid);


    
    return (
        <MyContext.Provider value={{ selectedCell, setSelectedCell, dataArray, setDataArray}} >
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => {
    return useContext(MyContext);
}