import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Navbar2 from "../components/navbar2";
import { Box, Typography } from "@mui/material";
import TextSizeAdjuster from "../components/buttonVision";

function HebergementTemporaire() {
  const [fontSize, setFontSize] = useState(16); // Taille par défaut pour le texte

  return (
    <>
      <Navbar />
      <Navbar2 />
      <Box
        sx={{
          height: "100vh", // Hauteur de la fenêtre
          
          padding: 2,
          textAlign: "center",
          paddingTop: "200px", // Compense la hauteur combinée des deux barres de navigation
          paddingBottom: "100px", // Compense la hauteur du footer
        }}
      >
        {/* Composant pour ajuster la taille du texte */}
        <TextSizeAdjuster onFontSizeChange={setFontSize} />

        {/* Contenu de la page avec taille de texte dynamique */}
        <Box mt={4}>
          <Typography variant="h4" style={{ fontSize: `${fontSize}px` }} gutterBottom>
            Hébergement Temporaire
          </Typography>
          <Typography style={{ fontSize: `${fontSize}px` }}>
            L'hébergement temporaire est une solution idéale pour les personnes âgées qui ont besoin d'un accueil
            temporaire dans un cadre sécurisé et adapté. Cela peut être utile en cas de convalescence, de répit pour les
            aidants familiaux, ou pour découvrir la vie en établissement.
          </Typography>
          <Typography style={{ fontSize: `${fontSize}px` }} mt={2}>
            Nos équipes sont à votre disposition pour répondre à vos besoins et vous offrir un séjour agréable et
            confortable.
          </Typography>

          
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default HebergementTemporaire;