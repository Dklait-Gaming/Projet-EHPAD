import React, { useState } from "react";
import { Button, TextField, Alert, Box, Typography, Snackbar, Card, CardContent } from "@mui/material";

const SecureMail = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const encryptedEmail = "Y29udGFjdEBkb21haW5lLmNvbQ==";

  const decryptEmail = (encrypted) => atob(encrypted);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quizAnswer.toLowerCase() === "4") {
      setShowEmail(true);
      setSnackbarMessage("Bonne réponse ! Vous pouvez maintenant voir l'e-mail.");
      setSnackbarSeverity("success");
    } else {
      setSnackbarMessage("Réponse incorrecte. Veuillez réessayer.");
      setSnackbarSeverity("error");
    }
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ marginTop: 4, padding: 2, maxWidth: 600, margin: "0 auto" }}>
      {!showEmail ? (
        <Box>
          <Typography variant="body1" gutterBottom>
            Pour afficher l'e-mail, répondez à la question suivante :
          </Typography>
          <Typography variant="h6" gutterBottom>
            <strong>Combien font 2+2 ?</strong>
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              value={quizAnswer}
              onChange={(e) => setQuizAnswer(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" color="primary" type="submit">
              Vérifier
            </Button>
          </form>
        </Box>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "20vh" }}>
          <Card
            sx={{
              width: 400,
              textAlign: "center",
              padding: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Ombre portée pour l'effet 3D
              transition: "transform 0.3s, box-shadow 0.3s", // Animation fluide
              "&:hover": {
                transform: "scale(1.05)", // Agrandit légèrement la carte au survol
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)", // Ombre plus marquée au survol
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Contactez-nous à :
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                <a href={`mailto:${decryptEmail(encryptedEmail)}`} style={{ textDecoration: "none", color: "#1976d2" }}>
                  {decryptEmail(encryptedEmail)}
                </a>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Snackbar pour afficher les messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SecureMail;
