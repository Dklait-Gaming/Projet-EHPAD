import { Box, Typography } from "@mui/material";
import Sidebar from "../components/dashboard/Sidebar";
import { useState } from "react";

export default function DashboardAdmin() {

  const [isAuthenticated, setIsAuthenticated] = useState(false); // État pour gérer l'authentification

  const handleLogin = () => {
    setIsAuthenticated(true); // L'utilisateur est connecté
  };

  return (
    <Box>
      {!isAuthenticated ? (
        // Affiche le formulaire d'authentification si l'utilisateur n'est pas connecté
        <FormulaireAuthentification onLogin={handleLogin} />
      ) : (
        // Affiche le contenu du tableau de bord si l'utilisateur est connecté
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box sx={{ flex: 1, padding: 3 }}>
            <Typography variant="h4" gutterBottom>
              Bienvenue sur le tableau de bord
            </Typography>
            {/* Contenu du tableau de bord */}
            <Typography variant="body1">
              Voici le contenu du tableau de bord admin.
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}