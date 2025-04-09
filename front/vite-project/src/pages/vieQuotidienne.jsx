import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Navbar2 from "../components/navbar2";
import { Box, Typography } from "@mui/material";
import { FacebookEmbed, InstagramEmbed, LinkedInEmbed } from "react-social-media-embed"; // Assurez-vous d'avoir installé react-facebook-embed

export default function VieQuotidienne() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Box
        sx={{
          height: "100vh", // Hauteur de la fenêtre
          overflowY: "auto", // Ajoute un scroll vertical si nécessaire
          padding: 2,
          justifyContent: "center",
          textAlign: "center",
          paddingBottom: "100px", // Compense la hauteur du footer
          paddingTop: "128px", // Compense la hauteur combinée des deux barres de navigation
        }}
      >

        <Typography variant="h5" gutterBottom sx={{ marginTop: "100px", textAlign: "center" }}>
          Suivez-nous sur les réseaux sociaux
        </Typography>

        <InstagramEmbed
          url="https://www.instagram.com/ehpadargelesgazost/" // Remplacez par l'URL de votre page Instagram
          width={500} // Largeur de l'embed
          height={400} // Hauteur de l'embed
          textAlign="center" // Centrer le texte
          style={{ margin: "0 auto" }} // Centrer l'embed
        />

        <FacebookEmbed
          url="https://www.instagram.com/ehpadargelesgazost/" // Remplacez par l'URL de votre page Instagram
          width={500} // Largeur de l'embed
          height={400} // Hauteur de l'embed
          textAlign="center" // Centrer le texte
          style={{ margin: "0 auto" }} // Centrer l'embed
        />

      </Box>
      <Footer />
    </>
  );
}