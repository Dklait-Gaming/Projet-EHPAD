import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Navbar2 from "../components/navbar2";
import { Box, Typography } from "@mui/material";

export default function AccueilDeJour() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Box
        sx={{
          padding: 2,
          height: "100vh", // Hauteur de la fenêtre
          overflowY: "auto", // Ajoute un scroll vertical si nécessaire
          paddingTop: "128px", // Compense la hauteur combinée des deux barres de navigation
          paddingBottom: "100px", // Compense la hauteur du footer
        }}
      >
        <Typography variant="h4" gutterBottom>
          Page Accueil de jour
        </Typography>
        <Typography variant="body1">
          Voici le contenu de la page Accueil de jour. Ajoutez ici les informations nécessaires.
        </Typography>
      </Box>
      <Footer />
    </>
  );
}