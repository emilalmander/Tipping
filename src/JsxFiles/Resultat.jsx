import React from 'react';
import { matches } from './MatcherSection/Data'; // Korrekt väg 

const Resultat = () => {
  const getResultColor = (match, id) => {
    const savedPrediction = JSON.parse(localStorage.getItem(`match-${id}-prediction`));

    if (!savedPrediction) return 'bg-gray-300'; // Ingen gissning
    if (savedPrediction.score === match.finalScore) return 'bg-yellow-400'; // Exakt resultat
    if (savedPrediction.winner === match.winner) return 'bg-green-400'; // Rätt lag
    return 'bg-red-400'; // Fel gissning
  };

  // Skyddsmekanism för att undvika att map anropas på undefined
  const safeMatches = Array.isArray(matches) ? matches : [];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Resultat</h2>
      {safeMatches.map((match, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{match.date}</h3>
          <div className="flex overflow-x-auto space-x-4">
            {match.playedMatches && Array.isArray(match.playedMatches) ? (
              match.playedMatches.map((game, i) => (
                <div key={i} className={`h-32 w-80 min-w-60 p-4 flex flex-col justify-center items-center border shadow-lg ${getResultColor(game, i)}`}>
                  <p className="text-lg font-bold">{game.teams}</p>
                  <p>Resultat: {game.finalScore}</p>
                  <p>Din gissning: {localStorage.getItem(`match-${i}-prediction`) ? JSON.parse(localStorage.getItem(`match-${i}-prediction`)).score : 'Ingen gissning'}</p>
                </div>
              ))
            ) : (
              <p>Inga spelade matcher tillgängliga</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resultat;
