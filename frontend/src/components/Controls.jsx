import { useMyContext } from './SelectedCellContext';

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

                    console.log(choice);
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