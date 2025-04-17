import { Alert, Box, Button, Card, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function FormulaireContact() {
  const [formData, setFormData] = useState({
    name: "",
    prenom: "",
    email: "",
    phone: "",
    message: "",
  });

  const [alertOpen, setAlertOpen] = useState(false); // État pour contrôler l'affichage de l'alerte

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

    // Stocker les données dans localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Afficher l'alerte
    setAlertOpen(true);

    // Réinitialiser le formulaire
    setFormData({
      name: "",
      prenom: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleAlertClose = () => {
    setAlertOpen(false); // Fermer l'alerte
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 128px)", // Ajuste la hauteur pour laisser de l'espace pour le header et le footer
        padding: "64px 16px", // Ajoute un padding pour le contenu
        paddingTop: "114px", // Compense la hauteur combinée des deux barres de navigation
        backgroundColor: "#f0f2f5",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          maxHeight: "700px",
          padding: 4,
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
                //redimensionner le champ de texte vers le bas
                sx={{ resize: "vertical" }}             
                multiline
                value={formData.message}
                onChange={(e) => {
                  if (e.target.value.length <= 500) {
                    handleChange(e);
                  }
                }}
                variant="outlined"
                required
                inputProps={{ maxLength: 500 }} // Limite le nombre de caractères à 500
                minRows={3} // Nombre minimum de lignes visibles
                helperText={`${formData.message.length}/500 caractères`} // Affiche le nombre de caractères restants
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

      {/* Snackbar avec Alert */}
      <Snackbar
        open={alertOpen}
        autoHideDuration={4000} // L'alerte disparaît après 4 secondes (modifiable)
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleAlertClose} severity="success" sx={{ width: "100%" }}>
          Votre message a été envoyé avec succès !
        </Alert>
      </Snackbar>
    </Box>
  );
}
