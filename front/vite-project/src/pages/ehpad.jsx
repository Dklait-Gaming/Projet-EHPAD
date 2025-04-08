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
          paddingTop: "180px", // Compense la hauteur combinée des deux barres de navigation
          paddingBottom: "100px", // Compense la hauteur du footer
        }}
      >
        <Typography variant="h4" gutterBottom>
          Page EHPAD
        </Typography>
        <Typography variant="body1" gutterBottom>
          Présentation de l'EHPAD
        </Typography>
        <Typography variant="body1" gutterBottom>
          Affichage des tarifs
        </Typography>
        <Typography variant="body1" gutterBottom>
          Informations pratiques
        </Typography>
        <Typography variant="body1" gutterBottom>
          Horaires d'accueil
        </Typography>
        <Map />
      </Box>
      <Footer />
    </>
  );
}