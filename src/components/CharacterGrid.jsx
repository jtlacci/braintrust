import React from 'react';
import './CharacterGrid.css';

const characters = [
  { id: 1, name: 'DR.MARIO', image: '/characters/dr-mario.png' },
  { id: 2, name: 'MARIO', image: '/characters/mario.png' },
  // Add all characters here
];

function CharacterGrid() {
  return (
    <div className="character-grid">
      {characters.map((character) => (
        <div key={character.id} className="character-cell">
          <img src={character.image} alt={character.name} />
          <span className="character-name">{character.name}</span>
        </div>
      ))}
    </div>
  );
}

export default CharacterGrid; 