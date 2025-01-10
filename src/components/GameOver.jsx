export default function GameOver({winner,closeModal}){
    return(
        <div id="game-over">
            <h2>Game over!</h2>
            {winner && <p>Player {winner} Won!</p>}
            {!winner && <p>Its a draw</p>}
            <p>
                <button onClick={closeModal}>
                    Rematch
                </button>
            </p>
        </div>
    )
}