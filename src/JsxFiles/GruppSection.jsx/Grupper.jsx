import React from 'react';

function Grupper({ groupName, teams }) {
    return (
      <>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 w-[500px] mx-auto">
            <caption className="text-xl font-bold text-gray-900 mb-2">{groupName}</caption>
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-3 px-2 text-left text-sm w-1/3">Country</th>
                <th className="py-3 px-2 text-left text-sm w-1/4">P</th>
                <th className="py-3 px-2 text-left text-sm w-1/4">M</th>
                <th className="py-3 px-2 text-left text-sm w-1/4">MS</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-2 text-sm overflow-hidden text-ellipsis whitespace-nowrap">{team.name}</td>
                  <td className="py-2 px-2 text-sm overflow-hidden text-ellipsis whitespace-nowrap">{team.points}</td>
                  <td className="py-2 px-2 text-sm overflow-hidden text-ellipsis whitespace-nowrap">{team.matches}</td>
                  <td className="py-2 px-2 text-sm overflow-hidden text-ellipsis whitespace-nowrap">{team.goalDifference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Grupper;
