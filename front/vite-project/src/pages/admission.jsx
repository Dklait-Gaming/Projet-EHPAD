import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Navbar2 from "../components/navbar2";
import { Box, Typography } from "@mui/material";

export default function Admission() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Box
        sx={{
          height: "100vh", // Hauteur de la fenêtre
          overflowY: "auto", // Ajoute un scroll vertical si nécessaire
          padding: 2,
          paddingTop: "200px", // Compense la hauteur combinée des deux barres de navigation
          textAlign: "center",
          paddingBottom: "100px", // Compense la hauteur du footer
        }}
      >
        <Typography variant="h4" gutterBottom>
          Page Admission
        </Typography>
        <Typography variant="body1">
          Voici le contenu de la page admission. Ajoutez ici les informations nécessaires.
        </Typography>
      </Box>
      <Footer />
    </>
  );
}