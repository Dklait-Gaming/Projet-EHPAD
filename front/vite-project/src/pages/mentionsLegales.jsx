import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Box, Typography } from "@mui/material";

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: 2,
          paddingBottom: "100px", // Compense la hauteur du footer
          textAlign: "center",
          paddingTop: "180px", // Compense la hauteur de la barre de navigation 
          height: "100vh", // Prend toute la hauteur de la fenêtre
        }}
      >
        <Typography variant="h4" gutterBottom>
          Page Mentions Légales
        </Typography>
      </Box>
      <Footer />
    </>
  );
}