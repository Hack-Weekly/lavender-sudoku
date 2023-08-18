import { useMyContext } from './SelectedCellContext';

// this function will go inside isChoiceValid()
function isChoiceInSubgrid(row, col, choice, dataArray) {
    // rowSubgrid and colSubgrid when combined we will be able to create all possible coordinates for our subgrid.
    const rowSubgrid = Math.floor(row / 3) * 3;
    const colSubgrid = Math.floor(col / 3) * 3;

    for (let rIndex = rowSubgrid; rIndex < rowSubgrid + 3; rIndex++ ) {
        for (let cIndex = colSubgrid; cIndex < colSubgrid + 3; cIndex++) {
            if (choice == dataArray[rIndex][cIndex]) {
                console.log("your choice is already present in this Subgrid");
                return true;
            }
        }
    }
    return false;
}

//function to prevent user from choosing a value that is already present
function isChoiceValid(choice, dataArray, selectedCell) {
    if (isChoiceInSubgrid(selectedCell.row, selectedCell.col, choice, dataArray)) return false;
    for (let i = 0; i < 9; i++) {
        if (choice == dataArray[selectedCell.row][i]) {
            console.log("the number is already present in the same row");
            return false;
        }
        // check if number is already in the column
        else if (choice == dataArray[i][selectedCell.col]) {
            console.log("number is already present in the column");
            return false;
        }
    }
    return true;
}

const Controls = () => {
    const { selectedCell, dataArray, setDataArray } = useMyContext();
    const choices = [1,2,3,4,5,6,7,8,9];
    return (
        <div 
            className="grid grid-cols-5 gap-1 p-1 mt-5 bg-violet-950"
        >
            { choices.map((choice, index) => (
                <button key={index} 
                onClick={(index) => {
                    if (selectedCell === null) return;
                    if (isChoiceValid(choice, dataArray, selectedCell) === false) return;

                    // put value of button in the array
                    const newArray = [...dataArray];
                    newArray[selectedCell.row][selectedCell.col] = choice;
                    setDataArray(newArray);
                }}
                className="flex justify-center items-center p-3 bg-violet-50 h-12 w-10 font-semibold text-xl text-violet-950 hover:bg-violet-400 focus:bg-violet-400"
                >{choice}</button>
            ))}
        </div>
    )
}

export default Controls;