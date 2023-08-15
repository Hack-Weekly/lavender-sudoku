import { createContext, useContext, useState } from "react";

const MyContext = createContext();

// let grid = [];
// for (let i = 0; i < 81; i++) {
//     grid.push("");
// }

const grid = [
        ['0', '0', '4', '3', '0', '0', '2', '0', '9'],
        ['0', '0', '5', '0', '0', '9', '0', '0', '1'],
        ['0', '7', '0', '0', '6', '0', '0', '4', '3'],
        ['0', '0', '6', '0', '0', '2', '0', '8', '7'],
        ['1', '9', '0', '0', '0', '7', '4', '0', '0'],
        ['0', '5', '0', '0', '8', '3', '0', '0', '0'],
        ['6', '0', '0', '0', '0', '0', '1', '0', '5'],
        ['0', '0', '3', '5', '0', '8', '6', '9', '0'],
        ['0', '4', '2', '9', '1', '0', '3', '0', '0']
]




export const MyContextProvider = ({ children }) => {
    const [selectedCell, setSelectedCell] = useState(null);
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