import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./Constants";
import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function getActivePlayer(turns){
  let currentPlayer = 'X';
  if (turns.length > 0 && turns[0].player == 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer;
}

function App() {
// const[activePlayer,setActivePlayer] = useState('X');
const [gameTurn,setGameTurn] = useState([]);
const activePlayer = getActivePlayer(gameTurn);
let gameBoard = [...initialGameBoard.map(innerArr=> [...innerArr])];
let Winner;

  for (let turn of gameTurn) {
    const { player, square } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }


for(let combinaton of WINNING_COMBINATIONS){
  debugger;
  const firstSquare = gameBoard[combinaton[0].row][combinaton[0].column];
  const secondSquare = gameBoard[combinaton[1].row][combinaton[1].column];
  const thirdSquare = gameBoard[combinaton[2].row][combinaton[2].column];


  if(firstSquare && firstSquare == secondSquare && firstSquare == thirdSquare){
    Winner = firstSquare;
  }
}

const hasDraw = gameTurn.length == 9 && !Winner;

function hadnleSelectSquare(rowIndex,colIndex){
  // setActivePlayer((currActivePlayer)=> currActivePlayer =='X' ? 'O' : 'X');
  setGameTurn((prevTurn) => {
    // let currentPlayer = 'X';
    // if (prevTurn.length > 0 && prevTurn[0].player == 'X') {
    //   currentPlayer = 'O'
    // }
    const currentPlayer = getActivePlayer(prevTurn)
    const updatedGame = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurn];
    return updatedGame;

  })
}
function modalClose(){
  setGameTurn([]);
}
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player-1" symbol="X"  isActive={activePlayer == 'X'}/>
            <Player initialName="player-2" symbol="O" isActive={activePlayer == 'O'} />

          </ol>
          { (Winner|| hasDraw) && <GameOver  winner={Winner} closeModal={modalClose}/>}
          <GameBoard checkSelectSquare={hadnleSelectSquare} activePlayerSymbol={activePlayer} gameTurn={gameTurn} board={gameBoard}/>

        </div>
        <Logs turns={gameTurn}/>
      </main>

    </>

  )
}

export default App
