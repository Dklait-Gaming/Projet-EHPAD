import { Box, Typography } from "@mui/material";
import Sidebar from "../components/dashboard/Sidebar";
import { useState } from "react";
import FormulaireAuthentification from "../components/dashboard/formulaireAuthentification";

export default function GestionContenu() {

  const [isAuthenticated, setIsAuthenticated] = useState(false); // État pour gérer l'authentification

  const handleLogin = () => {
    setIsAuthenticated(true); // L'utilisateur est connecté
  };

  return (
    <>
      {!isAuthenticated ? (
        // Affiche le formulaire d'authentification
        <FormulaireAuthentification onLogin={handleLogin} />
      ) : (
        // Affiche le contenu protégé uniquement après connexion
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box sx={{ flex: 1, padding: 3 }} />
        </Box>
      )}
    </>
  );  
}