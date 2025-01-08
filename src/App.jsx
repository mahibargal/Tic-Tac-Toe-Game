import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
const[activePlayer,setActivePlayer] = useState('X');

function hadnleSelectSquare(){
  setActivePlayer((currActivePlayer)=> currActivePlayer =='X' ? 'O' : 'X');
}
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player-1" symbol="X"  isActive={activePlayer == 'X'}/>
            <Player initialName="player-2" symbol="O" isActive={activePlayer == 'O'} />

          </ol>
          Game Board
          <GameBoard checkSelectSquare={hadnleSelectSquare} activePlayerSymbol={activePlayer}/>

        </div>
        <p>
          log
        </p>
      </main>

    </>

  )
}

export default App
