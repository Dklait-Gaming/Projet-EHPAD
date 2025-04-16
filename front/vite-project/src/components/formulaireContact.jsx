import React from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage"; // Import du hook personnalisé

export default function FormulaireContact() {
  const maxCharacters = 500; // Limite de caractères

  // Utilisation de useLocalStorage pour sauvegarder les données
  const [formData, setFormData] = useLocalStorage("formulaireContact", {
    name: "",
    prenom: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "message" && value.length > maxCharacters) return; // Limite de caractères pour le message
    setFormData({ ...formData, [name]: value }); // Met à jour les données dans le localStorage
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    console.log("Données envoyées :", formData);
    alert("Votre message a été envoyé avec succès !");

    // Réinitialise le formulaire après soumission
    setFormData({
      name: "",
      prenom: "",
      email: "",
      phone: "",
      message: "",
    });
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
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Prénom"
            name="prenom"
            variant="outlined"
            value={formData.prenom}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.phone}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Typography
            variant="body2"
            align="right"
            sx={{ color: formData.message.length === maxCharacters ? "red" : "gray" }}
          >
            {formData.message.length}/{maxCharacters} caractères
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