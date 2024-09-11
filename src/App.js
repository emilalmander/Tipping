import React from 'react';
import Header from './JsxFiles/Header';
import MatchCard from './JsxFiles/MatcherSection/MatchCard';
import GruppLayOut from './JsxFiles/GruppSection.jsx/GruppLayout';
import SpelScheman from './JsxFiles/SpelSchema/SpelScheman';
import Resultat from './JsxFiles/Resultat'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KlickadMatch from './JsxFiles/KlickadMatch/KlickadMatch';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Huvudsidan med matcher */}
        <Route path="/" element={
          <>
            <MatchCard /> {/* This will handle all the matches */}
            <GruppLayOut /> {/* This should be below MatchCard */}
            <SpelScheman /> {/* This should be below GruppLayOut */}
          </>
        } />

        {/* Matchvisning baserat på index */}
        <Route path="/match/:id" element={<KlickadMatch />} />

        {/* Övriga routes */}
        <Route path="/grupper" element={<GruppLayOut />} />
        <Route path="/spelscheman" element={<SpelScheman />} />
        <Route path="/resultat" element={<Resultat />} />
      </Routes>
    </Router>
  );
}

export default App;
