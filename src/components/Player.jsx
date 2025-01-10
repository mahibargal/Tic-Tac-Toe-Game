import React, { useState } from "react";
export default function Player({ initialName, symbol ,isActive}) {
    const [isEditting, setIsEditting] = useState(false);
    const [playerName, setPlayerName] = useState(initialName)

    function handleIsEditting() {
        setIsEditting((editting) => !editting);
    }

    function handlePlayerInputChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerContext = <span className="player-name">{playerName}</span>;
    if (isEditting) {
        editablePlayerContext = <input type="text" name="" id="" required value={playerName} onChange={handlePlayerInputChange} />
    }

    return (
        <li className={isActive ? 'active': undefined}>
            <span className="player">
                {editablePlayerContext}
                <span className="player-symbol">{symbol}</span>
            </span>
            <span>
                <button onClick={handleIsEditting}>{isEditting ? 'Save' : 'Edit'}</button>
            </span>
        </li>
    )
}