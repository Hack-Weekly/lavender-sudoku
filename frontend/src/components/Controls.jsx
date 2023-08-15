import { useMyContext } from './SelectedCellContext';

const Controls = () => {
    const { selectedCell, dataArray, setDataArray } = useMyContext();
    const choices = [1,2,3,4,5,6,7,8,9];
    return (
        <div 
            className="flex mt-5"
        >
            { choices.map((choice, index) => (
                <button key={index} 
                onClick={(index) => {
                    console.log(choice);
                    // put value of button in the array
                    const newArray = [...dataArray];
                    newArray[selectedCell] = choice;
                    setDataArray(newArray);
                }}
                className="flex justify-center items-center p-3 border-2  border-black bg-violet-50 h-12 w-12 font-semibold text-2xl text-violet-950 hover:bg-violet-400 focus:bg-violet-400"
                >{choice}</button>
            ))}
        </div>
    )
}

export default Controls;