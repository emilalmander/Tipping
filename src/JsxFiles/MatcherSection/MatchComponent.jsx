import React, { useEffect, useState } from 'react';

const MatchComponent = ({ teams, index }) => {
  const [savedTip, setSavedTip] = useState(null);

  useEffect(() => {
    // Hämta sparat tips från localStorage
    const tip = JSON.parse(localStorage.getItem(`matchTip-${index}`));
    if (tip) {
      setSavedTip(tip);
    }
  }, [index]);

  return (
    <div className="flex flex-col items-center">
      <p className="font-bold">{teams}</p>

      {savedTip ? (
        <p className="text-sm mt-2">
          Tippat: {teams.split(' vs ')[0]} {savedTip.team1Score} - {savedTip.team2Score} {teams.split(' vs ')[1]}
        </p>
      ) : (
        <p className="text-sm mt-2">Ingen tipp än</p>
      )}
    </div>
  );
};

export default MatchComponent;
