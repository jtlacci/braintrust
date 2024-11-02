import React from 'react';
import './SelectedCharacters.css';

const selectedPlayers = [
  { id: 1, character: 'MARIO', color: 'red', position: 'P1' },
  { id: 2, character: 'LINK', color: 'blue', position: 'P2' },
  { id: 3, character: 'PIKACHU', color: 'yellow', position: 'P3' },
  { id: 4, character: 'KIRBY', color: 'green', position: 'P4' },
];

function SelectedCharacters() {
  return (
    <div className="selected-characters">
      {selectedPlayers.map((player) => (
        <div key={player.id} className={`player-card ${player.color}`}>
          <div className="hmn-tag">HMN</div>
          <img src={`/characters/${player.character.toLowerCase()}.png`} alt={player.character} />
          <div className="player-name">{player.character}</div>
          <div className="player-position">{player.position}</div>
        </div>
      ))}
    </div>
  );
}

export default SelectedCharacters; 