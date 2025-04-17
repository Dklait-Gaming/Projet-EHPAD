import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { LocationOn, Phone, Mail, AccessTime } from "@mui/icons-material";

const Contacts = () => {
  const encryptedEmail = "Y29udGFjdEBkb21haW5lLmNvbQ=="; // Adresse e-mail chiffrée en Base64
  const decryptEmail = (encrypted) => atob(encrypted); // Déchiffre l'adresse e-mail

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap", // Permet de passer à la ligne sur petits écrans
        justifyContent: "center",
        gap: 2, // Espacement entre les cartes
        width: "100%",
      }}
    >
      <Card
        sx={{
          flex: "1 1 250px", // Largeur minimale de chaque carte
          maxWidth: "300px", // Largeur maximale de chaque carte
          padding: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" gap={1}>
            <LocationOn color="primary" />
            <Typography variant="body1">123 Rue du Test, 11111 TestCity</Typography>
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          flex: "1 1 250px",
          maxWidth: "300px",
          padding: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" gap={1}>
            <Phone color="primary" />
            <Typography variant="body1">+33 1 02 03 04 05</Typography>
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          flex: "1 1 250px",
          maxWidth: "300px",
          padding: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" gap={1}>
            <Mail color="primary" />
            <Typography variant="body1">
              <a
                href={`mailto:${decryptEmail(encryptedEmail)}`}
                style={{ textDecoration: "none", color: "#1976d2" }}
              >
                {decryptEmail(encryptedEmail)}
              </a>
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          flex: "1 1 250px",
          maxWidth: "300px",
          padding: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" gap={1}>
            <AccessTime color="primary" />
            <Typography variant="body1">Lundi - Vendredi : 9h - 18h</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contacts;
