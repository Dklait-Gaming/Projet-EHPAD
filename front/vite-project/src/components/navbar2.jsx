import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

export default function Navbar2() {
  return (
    <AppBar
      position="fixed" // Fixe la barre en haut de la page
      color="transparent" // Rend la navbar transparente
      elevation={0} // Supprime l'ombre pour un effet plus léger
      sx={{
        width: "100%", // S'étend sur toute la largeur
        top: 80, // Ajuste la position pour laisser un espace suffisant sous la navbar principale
        left: 0, // Pas d'espace à gauche
        margin: 0, // Supprime les marges
        padding: 0, // Supprime les paddings
        zIndex: 1100, // Assure que la navbar secondaire reste au-dessus du contenu
        backdropFilter: "blur(10px)", // Ajoute un effet de flou pour un design moderne
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Couleur blanche semi-transparente
      }}
    >
      <Toolbar sx={{ justifyContent: "center", padding: 0 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="text"
            href="/presentation"
            sx={{ color: "inherit", textTransform: "none" }}
          >
            Présentation
          </Button>
          <Button
            variant="text"
            href="/vie-quotidienne"
            sx={{ color: "inherit", textTransform: "none" }}
          >
            Vie quotidienne
          </Button>
          <Button
            variant="text"
            href="/admission"
            sx={{ color: "inherit", textTransform: "none" }}
          >
            Admission
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
