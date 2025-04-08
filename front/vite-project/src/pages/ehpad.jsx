import Navbar from "../components/navbar";
import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";
import Map from "../components/map";
import { Box, Typography } from "@mui/material";

export default function Ehpad() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Box
        sx={{
          padding: 2,
          textAlign: "center",
          paddingTop: "200px", // Compense la hauteur combinée des deux barres de navigation
          paddingBottom: "100px", // Compense la hauteur du footer
          height: "100vh", // Hauteur de la fenêtre
          overflowY: "auto", // Ajoute un scroll vertical si nécessaire
        }}
      >
        
        <Typography variant="body1" gutterBottom>
          Présentation de l'EHPAD * Affichage des tarifs * Informations pratiques * Horaires d'accueil
        </Typography>
        <Map />
      </Box>
      <Footer />
    </>
  );
}