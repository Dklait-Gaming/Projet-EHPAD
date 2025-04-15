//Browser router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import React, { use } from 'react';

//Importations de toutes mes pages
import AccueilDeJour from './pages/accueilDeJour';
import Admission from './pages/admission';
import Contact from './pages/contact';
import Ehpad from './pages/ehpad';
import FoyerRestaurant from './pages/foyerRestaurant';
import CRT from './pages/crt';
import HebergementTemporaire from './pages/hebergementTemporaire';
import MentionsLegales from './pages/mentionsLegales';
import Presentation from './pages/presentation';
import Taf from './pages/taf';
import TelechargerUnDocument from './pages/telechargerUnDocument';
import VieQuotidienne from './pages/vieQuotidienne';
import Home from './pages/home';
import GestionContenu from './pages/gestiondeContenu';
import Login from './pages/login.jsx';

// Auth
import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from './auth/PrivateRoute';



//importer d'une feuille de style
import './App.css';

function App() {

  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/accueil' element={<Home/>} />
          <Route path='/ehpad' element={<Ehpad />} />
          <Route path='/hebergement-temporaire' element={<HebergementTemporaire />} />
          <Route path='/accueil-de-jour' element={<AccueilDeJour />} />
          <Route path='/foyer-restaurant' element={<FoyerRestaurant />} />
          <Route path='/crt' element={<CRT/>} />
          <Route path='/telecharger-document' element={<TelechargerUnDocument />} />
          <Route path='/rejoignez-nous' element={<Taf />} />
          <Route path='/nous-contacter' element={<Contact />} />
          <Route path='/mentions-legales' element={<MentionsLegales />} />
          <Route path='/presentation' element={<Presentation />} />
          <Route path='/vie-quotidienne' element={<VieQuotidienne />} />
          <Route path='/admission' element={<Admission />} />

          {/* Route protégée */}
          <Route path='/admin' element={
            <PrivateRoute>
              <GestionContenu />
            </PrivateRoute>
          } />

          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Navigate to="/accueil" />} />
        </Routes>
      </Router>
  </AuthProvider>
    </>
  );
}
export default App

