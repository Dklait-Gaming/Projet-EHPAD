import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Taf() {
  const [showEmail, setShowEmail] = useState(false); // État pour contrôler l'affichage de l'e-mail
  const encryptedEmail = "Y29udGFjdEBleGFtcGxlLmNvbQ=="; // Adresse e-mail chiffrée en Base64

  // Fonction pour déchiffrer l'adresse e-mail
  const decryptEmail = (encrypted) => atob(encrypted);

  const handleShowEmail = () => {
    setShowEmail(true); // Affiche l'adresse e-mail
  };

  return (
    <>
      <Navbar />
      <Box sx={{ padding: 15, overflowY: "auto", height: "100vh" }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
          Affichage des offres d'emplois disponibles
        </Typography>
        

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          {!showEmail ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleShowEmail}
              sx={{ marginBottom: 2 }}
            >
              Afficher l'adresse e-mail
            </Button>
          ) : (
            <Typography variant="body1">
              Contactez-nous à :{" "}
              <a
                href={`mailto:${decryptEmail(encryptedEmail)}`}
                style={{ textDecoration: "none", color: "#1976d2" }}
              >
                {decryptEmail(encryptedEmail)}
              </a>
            </Typography>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
}