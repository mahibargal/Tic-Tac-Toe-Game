import { useState } from "react"
export default function GameBoard({checkSelectSquare,activePlayerSymbol}) {
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleBoardClick(rowIndex, colIndex) {

        setGameBoard((prevGameArr => {
            debugger;
            const updatedBoard = [...prevGameArr.map(innerArr => [...innerArr])]
            if (updatedBoard[rowIndex][colIndex]) {
                return;
            }
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            checkSelectSquare()
            return updatedBoard;
        }))
    }

    return (
        <>
            <ol id="game-board">

                {gameBoard.map((rowItem, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {rowItem.map((playerSymbol, colIndex) => <li key={colIndex}> <button onClick={() => handleBoardClick(rowIndex, colIndex)}>{playerSymbol}</button> </li>)}
                    </ol>

                </li>
                )}

            </ol>
        </>
    )
}
