import Player from "./components/Player"
function App() {


  return (
    <>
    <main>
      <div id="game-container">
        <ol id="players">
         <Player name="Player-1" />
         <Player name="player-2"/>

        </ol>
        Game Board

      </div>
      <p>
      log
    </p>
    </main>
    
    </>

  )
}

export default App
