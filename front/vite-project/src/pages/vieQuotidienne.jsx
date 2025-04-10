import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Navbar2 from "../components/navbar2";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

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

        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centre les éléments horizontalement
            flexWrap: "wrap", // Permet de passer à la ligne si l'espace est insuffisant
            gap: 4, // Ajoute un espace entre les éléments
            marginTop: 4,
          }}
        >
          {/* Carte Facebook */}
          <Card sx={{ width: 300, textAlign: "center", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
            <CardContent>
              <Facebook fontSize="large" sx={{ color: "#4267B2" }} />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Facebook
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="https://www.facebook.com/ehpadargelesgazost"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ marginTop: 2 }}
              >
                Nos actualités
              </Button>
            </CardContent>
          </Card>

          {/* Carte Instagram */}
          <Card sx={{ width: 300, textAlign: "center", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
            <CardContent>
              <Instagram fontSize="large" sx={{ color: "#E1306C" }} />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Instagram
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                href="https://www.instagram.com/ehpadargelesgazost/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ marginTop: 2 }}
              >
                Nos actualités
              </Button>
            </CardContent>
          </Card>

          {/* Carte LinkedIn */}
          <Card sx={{ width: 300, textAlign: "center" , boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
            <CardContent>
              <LinkedIn fontSize="large" sx={{ color: "#0077B5" }} />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                LinkedIn
              </Typography>
              <Button
                variant="contained"
                color="info"
                href="https://fr.linkedin.com/company/ehpad-lbdh"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ marginTop: 2 }}
              >
                Nos actualités
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Footer />
    </>
  );
}