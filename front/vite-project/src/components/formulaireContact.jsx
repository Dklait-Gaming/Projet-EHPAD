import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";

export default function FormulaireContact() {
  const [message, setMessage] = useState(""); // État pour le champ "Message"
  const maxCharacters = 500; // Limite de caractères

  const handleMessageChange = (event) => {
    const value = event.target.value;
    if (value.length <= maxCharacters) {
      setMessage(value); // Met à jour le message si la limite n'est pas dépassée
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    const formData = new FormData(event.target); // Récupère les données du formulaire
    const data = Object.fromEntries(formData.entries()); // Convertit en objet

    // Vous pouvez envoyer les données à votre serveur ici
    console.log(data);
  };

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
      <form onSubmit={handleSubmit}>
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
            rows={4}
            variant="outlined"
            value={message}
            onChange={handleMessageChange}
            required
          />
          <Typography
            variant="body2"
            align="right"
            sx={{ color: message.length === maxCharacters ? "red" : "gray" }}
          >
            {message.length}/{maxCharacters} caractères
          </Typography>
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