export default function GameOver({winner, onRestart}){

    return <div id="game-over">
        <h2>GAME OVER!</h2>
        {winner && <p>The Winner is: {winner}</p>}
        {!winner && <p>It's a draw!</p>}
        <button onClick={onRestart}>Restart</button>
    </div>
}