import React, { useState } from 'react';
import './App.css';
import './index.css';

const characters = [
  'DR.MARIO', 'MARIO', 'LUIGI', 'BOWSER', 'PEACH', 'YOSHI', 'DK', 'C.FALCON',
  'GANONDORF', 'FALCO', 'FOX', 'NESS', 'ICE CLIMBERS', 'KIRBY', 'SAMUS', 'ZELDA'
];

const selectedPlayers = [
  { name: 'MARIO', color: 'red', position: 'P1' },
  { name: 'LINK', color: 'blue', position: 'P2' },
  { name: 'PIKACHU', color: 'yellow', position: 'P3' },
  { name: 'KIRBY', color: 'green', position: 'P4' },
];

function App() {
  // State to track selected characters and current player selection
  const [selectedPlayers, setSelectedPlayers] = useState([
    { name: 'MARIO', color: 'red', position: 'P1' },
    { name: 'LINK', color: 'blue', position: 'P2' },
    { name: 'PIKACHU', color: 'yellow', position: 'P3' },
    { name: 'KIRBY', color: 'green', position: 'P4' },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(0); // Index of player being modified
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Check if a character is already selected by any player
  const isCharacterSelected = (characterName) => {
    return selectedPlayers.some(player => player.name === characterName);
  };

  // Handle character selection
  const handleCharacterSelect = (characterName) => {
    // Don't allow selecting already chosen characters
    if (isCharacterSelected(characterName)) return;

    setSelectedPlayers(players => 
      players.map((player, index) => 
        index === currentPlayer 
          ? { ...player, name: characterName }
          : player
      )
    );
    // Move to next player (cycles through 0-3)
    setCurrentPlayer((prev) => (prev + 1) % 4);
  };

  // Helper function to truncate name on mobile
  const truncateName = (name) => {
    return (
      <span>
        <span className="md:hidden">
          {name.slice(0, 3)}
        </span>
        <span className="hidden md:block">
          {name}
        </span>
      </span>
    );
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-5">
      <h1 className="text-white text-3xl font-bold mb-8 text-center">
        Brain Trust
      </h1>

      {/* Character Grid - with fixed width */}
      <div className="max-w-3xl mx-auto mb-5">
        <div className="grid grid-cols-8 gap-2">
          {characters.map((char, index) => {
            const isSelected = isCharacterSelected(char);
            return (
              <div 
                key={index}
                onClick={() => !isSelected && handleCharacterSelect(char)}
                className={`aspect-square bg-gray-800 border border-gray-700 
                  flex items-center justify-center text-white text-center
                  ${isSelected ? 'opacity-50 bg-gray-600' : 'hover:bg-gray-700 cursor-pointer'}
                  ${selectedPlayers.some(player => player.name === char) 
                    ? 'ring-2 ring-yellow-400' 
                    : ''}`}
              >
                <span className="text-sm">
                  {truncateName(char)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Area - Players and Chat side by side */}
      <div className="flex gap-8">
        {/* Player Selection */}
        <div className="flex gap-4 h-40">
          {selectedPlayers.map((player, index) => (
            <div 
              key={index} 
              onClick={() => setCurrentPlayer(index)}
              className={`relative w-32 aspect-[3/4] rounded-lg overflow-hidden cursor-pointer
                ${player.color === 'red' ? 'bg-red-900' : ''}
                ${player.color === 'blue' ? 'bg-blue-900' : ''}
                ${player.color === 'yellow' ? 'bg-yellow-900' : ''}
                ${player.color === 'green' ? 'bg-green-900' : ''}
                ${currentPlayer === index ? 'ring-2 ring-yellow-400' : ''}`}
              style={{
                backgroundImage: `url(/characters/${player.name.toLowerCase()}.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute top-2 left-2 bg-yellow-500 px-2 py-0.5 text-black font-bold rounded">
                HMN
              </div>
              
              <div className="absolute bottom-8 left-0 right-0 bg-gray-900/80 py-1 text-center text-white">
                {player.name}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 py-1 text-center text-white">
                {player.position}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Section */}
        <div className="w-[400px] bg-gray-100 rounded-lg shadow-xl">
          {/* Chat Header */}
          <div className="bg-gray-100 p-4 rounded-t-lg flex items-center justify-between">
            <span className="text-gray-800 font-medium">guestimate</span>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <p className="text-gray-800 text-sm">
                  To guestimate, if we assume linear scaling, you'd need to roughly double the $167K 1-hour volume to achieve a 100% price increase, given the current liquidity constraints. So, around $150K-$200K in buy volume might get you close, though slippage could increase that estimate.
                </p>
                <div className="flex gap-2 mt-2">
                  <button className="p-2 hover:bg-gray-200 rounded">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 15.536L9.879 9.879M9.879 9.879L4.222 4.222M9.879 9.879L15.536 4.222M9.879 9.879L4.222 15.536" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-200 rounded">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-200 rounded">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-gray-100 rounded-b-lg border-t">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Message ChatGPT"
                className="flex-1 outline-none text-sm"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 