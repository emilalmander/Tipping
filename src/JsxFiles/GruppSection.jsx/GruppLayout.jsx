import React from 'react';
import Grupper from './Grupper'; // Kontrollera att denna väg är korrekt


const groups = [
    {
      name: "Grupp A",
      teams: [
        { name: "Sweden", points: 10, matches: 5, goalDifference: "+12" },
        { name: "Norway", points: 8, matches: 5, goalDifference: "+6" },
        { name: "Denmark", points: 6, matches: 5, goalDifference: "-4" },
        { name: "Finland", points: 4, matches: 5, goalDifference: "-14" },
      ],
    },
    {
      name: "Grupp B",
      teams: [
        { name: "Germany", points: 9, matches: 5, goalDifference: "+10" },
        { name: "France", points: 7, matches: 5, goalDifference: "+2" },
        { name: "Spain", points: 5, matches: 5, goalDifference: "-3" },
        { name: "Italy", points: 3, matches: 5, goalDifference: "-9" },
      ],
    },
    {
      name: "Grupp C",
      teams: [
        { name: "Poland", points: 11, matches: 5, goalDifference: "+15" },
        { name: "Czech Republic", points: 9, matches: 5, goalDifference: "+8" },
        { name: "Slovakia", points: 7, matches: 5, goalDifference: "-2" },
        { name: "Hungary", points: 5, matches: 5, goalDifference: "-21" },
      ],
    },
    {
      name: "Grupp D",
      teams: [
        { name: "Portugal", points: 12, matches: 5, goalDifference: "+18" },
        { name: "Netherlands", points: 10, matches: 5, goalDifference: "+5" },
        { name: "Belgium", points: 6, matches: 5, goalDifference: "-6" },
        { name: "Austria", points: 4, matches: 5, goalDifference: "-17" },
      ],
    },
  ];

function GruppLayOut(){
    return (
        <>
        <div className="grid xl:grid-cols-2 grid-cols-1 p-4 grid-rows-2 gap-4 xl:w-full w-3/4 mx-auto place-items-center px-20">

        {groups.map((group, index) => (
          <Grupper key={index} groupName={group.name} teams={group.teams} />
        ))}
        </div>
        
        
        </>
    )
}

export default GruppLayOut