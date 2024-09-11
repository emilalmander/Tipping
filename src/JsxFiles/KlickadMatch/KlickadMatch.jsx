import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { matches } from '../MatcherSection/Data'; // Update the path as necessary

const KlickadMatch = () => {
  const { id } = useParams();
  const [match, setMatch] = useState(null);
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Find the match based on the ID from URL parameters
    const selectedMatch = matches.find(match => match.id === Number(id));
    setMatch(selectedMatch);

    // Load saved tip from localStorage if available
    if (selectedMatch) {
      const savedTip = JSON.parse(localStorage.getItem(`matchTip-${id}`));
      if (savedTip) {
        setTeam1Score(savedTip.team1Score);
        setTeam2Score(savedTip.team2Score);
        setIsSubmitted(true);
      }
    }
  }, [id]);

  const handleSubmit = () => {
    const tip = {
      team1Score,
      team2Score,
    };
    localStorage.setItem(`matchTip-${id}`, JSON.stringify(tip));
    setIsSubmitted(true);
  };

  const handleChangeTip = () => {
    setIsSubmitted(false);
  };

  if (!match) return <p>Match not found.</p>;

  return (
    <div className="m-20 p-4 border-black shadow-xl text-center">
      <Link to="/" className="text-blue-500 underline">
        Tillbaka
      </Link>

      <h2 className="text-2xl font-bold mb-4">Detaljer för match</h2>

      <div className="border border-gray-300 p-4 shadow-lg flex flex-col items-center space-y-4">
        <p className="text-lg">{match.teams}</p>
        <p className="text-md">Tid: {new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        <p className="text-md">Datum: {new Date(match.date).toLocaleDateString()}</p>

        <div className="flex items-center space-x-4">
          <div>
            <button
              onClick={() => setTeam1Score(team1Score - 1)}
              disabled={isSubmitted}
              className={`px-2 py-1 ${isSubmitted ? 'bg-gray-300' : 'bg-gray-200'}`}
            >
              -
            </button>
            <span className="px-4 text-lg">{team1Score}</span>
            <button
              onClick={() => setTeam1Score(team1Score + 1)}
              disabled={isSubmitted}
              className={`px-2 py-1 ${isSubmitted ? 'bg-gray-300' : 'bg-gray-200'}`}
            >
              +
            </button>
          </div>
          <p className="text-lg">vs</p>
          <div>
            <button
              onClick={() => setTeam2Score(team2Score - 1)}
              disabled={isSubmitted}
              className={`px-2 py-1 ${isSubmitted ? 'bg-gray-300' : 'bg-gray-200'}`}
            >
              -
            </button>
            <span className="px-4 text-lg">{team2Score}</span>
            <button
              onClick={() => setTeam2Score(team2Score + 1)}
              disabled={isSubmitted}
              className={`px-2 py-1 ${isSubmitted ? 'bg-gray-300' : 'bg-gray-200'}`}
            >
              +
            </button>
          </div>
        </div>

        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Lägg tipp
          </button>
        ) : (
          <button
            onClick={handleChangeTip}
            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg"
          >
            Ändra tipp
          </button>
        )}
      </div>
    </div>
  );
};

export default KlickadMatch;
