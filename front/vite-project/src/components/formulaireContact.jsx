import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function FormulaireContact() {
  const [formData, setFormData] = useState({
    name: "",
    prenom: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Données soumises :", formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Formulaire soumis !");
    setFormData({
      name: "",
      prenom: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        px: 2,
      }}
    >
      <Card
        sx={{
          maxHeight: "150vh",
          maxWidth: 500,
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        <Stack spacing={3}>
          <Typography variant="body1" align="center">
            Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Nom"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Prénom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Téléphone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 1.5, py: 1.5, fontSize: "1rem", fontWeight: 600 }}
              >
                Envoyer
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
}
