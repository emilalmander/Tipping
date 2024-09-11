import React from 'react';
import { Link } from 'react-router-dom';
import DateComponent from './DateComponent';
import MatchComponent from './MatchComponent';
import { matches } from './Data';

// Helper function to get random matches
const getRandomMatches = (numberOfMatches) => {
  const shuffled = [...matches].sort(() => 0.5 - Math.random()); // Create a copy of matches
  return shuffled.slice(0, numberOfMatches);
};

const MatchCard = () => {
  const today = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD format
  const now = new Date();

  // Filter logic for today's matches
  const todaysMatches = matches.filter(match => 
    match.date.startsWith(today) // Compare only the date part
  );

  // If no matches for today, pick 5 random matches
  const displayMatches = todaysMatches.length > 0 ? todaysMatches : getRandomMatches(5);

  // Filter logic for upcoming and previous matches
  const upcomingMatches = matches.filter(match => 
    new Date(match.date) > now
  );

  const previousMatches = matches.filter(match => 
    new Date(match.date) < now
  );

  return (
    <>
      {/* Dagens matcher */}
      <div className="m-20 p-4 border-black shadow-xl">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Dagens matcher</h2>
        </div>
        <div className="flex overflow-x-auto space-x-4">
          {displayMatches.length > 0 ? (
            displayMatches.map((match) => (
              <Link to={`/match/${match.id}`} key={match.id}>
                <div className="h-32 w-80 flex min-w-60 flex-col items-center justify-center border border-gray-300 shadow-lg min-w-max">
                  <DateComponent date={match.date} />
                  <MatchComponent teams={match.teams} index={match.id} />
                </div>
              </Link>
            ))
          ) : (
            <p>Inga matcher för idag</p>
          )}
        </div>
      </div>

      {/* Kommande matcher */}
      <div className="m-20 p-4 border-black shadow-xl">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Kommande matcher</h2>
        </div>
        <div className="flex overflow-x-auto space-x-4">
          {upcomingMatches.map((match) => (
            <Link to={`/match/${match.id}`} key={match.id}>
              <div className="h-32 w-80 flex min-w-60 flex-col items-center justify-center border border-gray-300 shadow-lg min-w-max">
                <DateComponent date={match.date} />
                <MatchComponent teams={match.teams} index={match.id} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Föregående matcher */}
      <div className="m-20 p-4 border-black shadow-xl">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Föregående matcher</h2>
        </div>
        <div className="flex overflow-x-auto space-x-4">
          {previousMatches.map((match) => (
            <Link to={`/match/${match.id}`} key={match.id}>
              <div className="h-32 w-80 flex min-w-60 flex-col items-center justify-center border border-gray-300 shadow-lg min-w-max">
                <DateComponent date={match.date} />
                <MatchComponent teams={match.teams} index={match.id} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MatchCard;
