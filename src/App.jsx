import Player from "./components/Player"
function App() {


  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="Player-1" symbol="X" />
            <Player initialName="player-2" symbol="O" />

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
