import Footer from "../components/footer";
import Navbar from "../components/navbar";
import FormulaireContact from "../components/formulaireContact";
import { Box, Typography } from "@mui/material";
import { CalendarMonth, LocationPin, Mail, Phone } from "@mui/icons-material";

export default function Contact() {

  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: 2,
          height: "100vh",
          paddingTop: "50px",
          paddingBottom: "100px",
          display: "flex", // Affiche les éléments sur une ligne
          justifyContent: "center", // Centre horizontalement
          alignItems: "center", // Centre verticalement
          gap: 4, // Espace entre les deux colonnes
        }}
      >
        {/* Formulaire de contact à gauche */}
        <Box sx={{ flex: 1, maxWidth: "500px" }}>
          <FormulaireContact />
        </Box>

        {/* Bloc d'informations de contact à droite */}
        <Box
          sx={{
            flex: 1,
            maxWidth: "500px",
            backgroundColor: "#f5f5f5",
            padding: 3,
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Informations de contact
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
            <LocationPin />
            <Typography variant="body1">123 Rue du Test 11111 TestCity</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
            <Phone />
            <Typography variant="body1">+33 1 02 03 04 05</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
            <Mail />
            <Typography variant="body1">contact@contact</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CalendarMonth />
            <Typography variant="body1">Horaires d'accueil</Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}