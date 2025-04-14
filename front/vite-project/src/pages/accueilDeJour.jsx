import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Navbar2 from "../components/navbar2";
import { Box, Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function AccueilDeJour() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Box
        sx={{
          padding: 2,
          height: "100vh", // Hauteur de la fenêtre
          paddingTop: "200px", // Compense la hauteur combinée des deux barres de navigation
          textAlign: "center",
          paddingBottom: "100px", // Compense la hauteur du footer
        }}
      >
        <Typography variant="h4" gutterBottom>
          Page Accueil de jour
        </Typography>
        <Typography variant="body1">
          Voici le contenu de la page Accueil de jour. Ajoutez ici les informations nécessaires.
        </Typography>

        <Typography variant="h4" marginTop="10%" gutterBottom>
          Informations des contacts
        </Typography>

        {/* Section des informations de contact */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4, // Espacement entre les éléments
            marginTop: 4,
          }}
        >
          {/* Numéro de téléphone */}
          <Box sx={{ textAlign: "center" }}>
            <PhoneIcon sx={{ fontSize: 40, color: "#1976d2" }} />
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              <a href="tel:+33123456789" style={{ textDecoration: "none", color: "inherit" }}>
                +33 1 02 03 04 05
              </a>
            </Typography>
          </Box>

          {/* Adresse e-mail */}
          <Box sx={{ textAlign: "center" }}>
            <EmailIcon sx={{ fontSize: 40, color: "#1976d2" }} />
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              <Box 
                href="mailto:contact@ehpad.fr" 
                style={{ 
                  textDecoration: "none", 
                  color: "inherit" 
                }}
              >
                Accéder à la messagerie
              </Box>
            </Typography>
          </Box>

          {/* Localisation */}
          <Box sx={{ textAlign: "center" }}>
            <LocationOnIcon sx={{ fontSize: 40, color: "#1976d2" }} />
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              <Button
                variant="link"
                color="primary"
                href="https://www.google.com/maps/dir/?api=1&destination=EHPAD+Les+Balcons+du+Hautacam"
                target="_blank"
                rel="noopener noreferrer"
              >
                Itinéraire
              </Button>
            </Typography>
          </Box>

          {/* Horaires */}
          <Box sx={{ textAlign: "center" }}>
            <AccessTimeIcon sx={{ fontSize: 40, color: "#1976d2" }} />
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              De 8h à 18h00 du lundi au vendredi
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}