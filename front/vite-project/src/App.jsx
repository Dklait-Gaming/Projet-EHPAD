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

function App() {

const [contenus, setContenus] = useState("");
const [titre, setTitre] = useState("");
const [description, setDescription] = useState("");

useEffect(() => {
  fetch('http://localhost:3001/api/contenus')
    .then(response => response.json())
    .then(data => setContenus(data))
    .catch(error => console.error('Erreur:', error));
}, []);

const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:3001/api/contenus", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titre, description }),
  });
  const newContenu = await res.json();
  setContenus([...contenus, newContenu]);
  setTitre("");
  setDescription("");
};

  return (
    <>
      <div>
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
          <Route path='/gestionContenu' element={<GestionContenu/>} />
          <Route path="/" element={<Navigate to="/accueil" />} />
        </Routes>
      </Router>
      </div>

      <div style={{ padding: '2rem' }}>
      <h1>Gestion de contenu</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <button type="submit">Ajouter</button>
      </form>

      <h2>Liste des contenus</h2>
      <ul>
        {contenus.map((c) => (
          <li key={c.id}>
            <strong>{c.titre}</strong> : {c.description}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}
export default App

