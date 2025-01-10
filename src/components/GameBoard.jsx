import { useState } from "react"
export default function GameBoard({checkSelectSquare,activePlayerSymbol,gameTurn,board}) {
    // const initialGameBoard = [
    //     [null, null, null],
    //     [null, null, null],
    //     [null, null, null],
    // ]
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // function handleBoardClick(rowIndex, colIndex) {
    //     setGameBoard((prevGameArr => {
    //         const updatedBoard = [...prevGameArr.map(innerArr => [...innerArr])]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         checkSelectSquare()
    //         return updatedBoard;
    //     }))
    // }

    // let gameBoard = initialGameBoard
    // for (let turn of gameTurn) {
    //     const { player, square } = turn;
    //     const { row,col } = square;
    //     gameBoard[row][col] = player;
    // }

    return (
        <>
            <ol id="game-board">

                {board.map((rowItem, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {rowItem.map((playerSymbol, colIndex) => <li key={colIndex}> <button onClick={()=>checkSelectSquare(rowIndex,colIndex)} disabled={playerSymbol}>{playerSymbol}</button> </li>)}
                    </ol>

                </li>
                )}

            </ol>
        </>
    )
}
