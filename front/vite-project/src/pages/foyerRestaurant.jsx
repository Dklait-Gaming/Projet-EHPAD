import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Box, Typography } from "@mui/material";

export default function FoyerRestaurant() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "100vh", // Hauteur de la fenêtre
          padding: 2,
          textAlign: "center",
          paddingTop: "200px", // Compense la hauteur combinée des deux barres de navigation
          paddingBottom: "100px", // Compense la hauteur du footer
        }}
      >
        <Typography variant="h4" gutterBottom>
          Page Foyer Restaurant
        </Typography>
        <Typography variant="body1">
          Voici le contenu de la page Foyer Restaurant. Ajoutez ici les informations nécessaires.
        </Typography>
      </Box>
      <Footer />
    </>
  );
}