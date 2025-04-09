import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

export default function Navbar2() {
  return (
    <AppBar
      position="fixed" // Fixe la barre en haut de la page
      color="black" // Rend la navbar transparente
      sx={{
        width: "100%", // S'étend sur toute la largeur
        top: 100, // Ajuste la position pour laisser un espace suffisant sous la navbar principale
        left: 0, // Pas d'espace à gauche
        margin: 0, // Supprime les marges
        padding: 0, // Supprime les paddings
        zIndex: 1100, // Assure que la navbar secondaire reste au-dessus du contenu
        backdropFilter: "blur(10px)", // Ajoute un effet de flou pour un design moderne
        
        boxShadow: "0 5px 30px rgba(0, 0, 0, 0.3)", // Ombre 3D plus marquée
        maxWidth: "100%", // S'assure que la navbar ne dépasse pas la largeur de l'écran
        marginLeft: "auto", // Centre la navbar horizontalement
        marginRight: "auto", // Centre la navbar horizontalement
        backgroundColor: "transparent", // Couleur de fond blanche avec transparence
      }}
    >
      <Toolbar sx={{ justifyContent: "center", padding: 0 }}>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 2, md: 4 }, // Espacement responsive
          }}
        >
          <Button
            variant="text"
            href="/presentation"
            sx={{
              color: "inherit",
              textTransform: "uppercase",
              textAlign: "center", // Centre le texte
            }}
          >
            Présentation
          </Button>
          <Button
            variant="text"
            href="/vie-quotidienne"
            sx={{
              color: "inherit",
              textTransform: "uppercase",
              textAlign: "center", // Centre le texte
            }}
          >
            Vie quotidienne
          </Button>
          <Button
            variant="text"
            href="/admission"
            sx={{
              color: "inherit",
              textTransform: "uppercase",
              textAlign: "center", // Centre le texte
            }}
          >
            Admission
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
