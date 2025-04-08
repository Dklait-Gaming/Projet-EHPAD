import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

export default function Navbar2() {
  return (
    <AppBar
      position="fixed" // Fixe la barre en haut de la page
      color="transparent" // Rend la navbar transparente
      elevation={0} // Supprime l'ombre par défaut
      sx={{
        width: "100%", // S'étend sur toute la largeur
        top: 100, // Ajuste la position pour laisser un espace suffisant sous la navbar principale
        left: 0, // Pas d'espace à gauche
        margin: 0, // Supprime les marges
        padding: 0, // Supprime les paddings
        zIndex: 1100, // Assure que la navbar secondaire reste au-dessus du contenu
        backdropFilter: "blur(10px)", // Ajoute un effet de flou pour un design moderne
        borderRadius: "20px", // Arrondit les coins de la navbar
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 6px 10px rgba(0, 0, 0, 0.2)", // Ombre 3D plus marquée
        maxWidth: "80%", // S'assure que la navbar ne dépasse pas la largeur de l'écran
        marginLeft: "auto", // Centre la navbar horizontalement
        marginRight: "auto", // Centre la navbar horizontalement
        backgroundColor: "whitesmoke", // Couleur de fond blanche avec transparence
      }}
    >
      <Toolbar sx={{ justifyContent: "center", padding: 0 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="text"
            href="/presentation"
            sx={{ color: "inherit", textTransform: "uppercase" }}
          >
            Présentation
          </Button>
          <Button
            variant="text"
            href="/vie-quotidienne"
            sx={{ color: "inherit", textTransform: "uppercase" }}
          >
            Vie quotidienne
          </Button>
          <Button
            variant="text"
            href="/admission"
            sx={{ color: "inherit", textTransform: "uppercase" }}
          >
            Admission
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
