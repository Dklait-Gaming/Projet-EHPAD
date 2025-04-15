// back/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Données fictives
let contenus = [
  { id: 1, titre: "Accueil", description: "Bienvenue sur notre site !" },
  { id: 2, titre: "À propos", description: "Voici notre histoire." }
];

// Récupérer les contenus
app.get('/api/contenus', (req, res) => {
  res.json(contenus);
});

// Ajouter un contenu
app.post('/api/contenus', (req, res) => {
  const { titre, description } = req.body;
  const newContenu = {
    id: Date.now(),
    titre,
    description
  };
  contenus.push(newContenu);
  res.status(201).json(newContenu);
});

app.listen(PORT, () => {
  console.log(`✅ Démarrage du serveur sur http://localhost:${PORT}`);
});
