import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Navbar2 from "../components/navbar2";
import { Box, Typography } from "@mui/material";

export default function HebergementTemporaire() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Box
        sx={{
          height: "100vh", // Hauteur de la fenêtre
          overflowY: "auto", // Ajoute un scroll vertical si nécessaire
          padding: 2,
          paddingTop: "128px", // Compense la hauteur combinée des deux barres de navigation
          paddingBottom: "100px", // Compense la hauteur du footer
        }}
      >
        <Typography variant="h4" gutterBottom>
          Page Hébergement Temporaire
        </Typography>
        <Typography variant="body1">
          Voici le contenu de la page Hébergement temporairaire. Ajoutez ici les informations nécessaires.
        </Typography>
      </Box>
      <Footer />
    </>
  );
}