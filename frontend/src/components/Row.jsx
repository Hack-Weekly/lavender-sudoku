import Cell from "./Cell";

const Row = ({rowArray, rowId}) => {
    return (
        rowArray.map((content, index) => (
            <Cell key={index} content={content} rowId={rowId} columnId={index} ></Cell>
        )
            )
    )
}

export default Row;