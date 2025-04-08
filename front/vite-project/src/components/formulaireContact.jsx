import React from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";

export default function FormulaireContact() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Formulaire de Contact
      </Typography>
      <form action="/" method="POST">
        <Box mb={2}>
          <TextField
            fullWidth
            label="Nom"
            name="name"
            variant="outlined"
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Prénom"
            name="prenom"
            variant="outlined"
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Téléphone"
            name="phone"
            type="tel"
            variant="outlined"
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={3}
            variant="outlined"
            required
          />
        </Box>
        <Box textAlign="center">
          <Button variant="contained" color="primary" type="submit">
            Envoyer
          </Button>
        </Box>
      </form>
    </Container>
  );
}