export default function Player({name,symbol}){
    return (
        <li>
            <span>
            <span className="player-name">{name}</span>
            <span className="player-symbol">{symbol}</span>
            </span>
            <span><button>Edit</button></span>
          </li>
    )
}