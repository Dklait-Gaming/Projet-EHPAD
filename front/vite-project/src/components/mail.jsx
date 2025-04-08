import React, { useState } from "react";
import { Button, TextField, Alert, Box, Typography, Snackbar } from "@mui/material";

const SecureMail = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // État pour le Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Message du Snackbar
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Type du Snackbar
  const encryptedEmail = "Y29udGFjdEBkb21haW5lLmNvbQ==";

  const decryptEmail = (encrypted) => atob(encrypted);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quizAnswer.toLowerCase() === "blanc") {
      setShowEmail(true);
      setError(false);
      setSuccess(true);
      setSnackbarMessage("Bonne réponse ! Vous pouvez maintenant voir l'e-mail.");
      setSnackbarSeverity("success");
    } else {
      setError(true);
      setSuccess(false);
      setSnackbarMessage("Réponse incorrecte. Veuillez réessayer.");
      setSnackbarSeverity("error");
    }
    setSnackbarOpen(true); // Ouvrir le Snackbar
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Fermer le Snackbar
  };

  return (
    <Box sx={{ marginTop: 4, padding: 2, maxWidth: 600, margin: "0 auto" }}>
      {!showEmail ? (
        <Box>
          <Typography variant="body1" gutterBottom>
            Pour afficher l'e-mail, répondez à la question suivante :
          </Typography>
          <Typography variant="h6" gutterBottom>
            <strong>De quelle couleur est le cheval blanc d'Henry IV ?</strong>
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Votre réponse en minuscule"
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
        <Typography variant="body1">
          Contactez-nous à :{" "}
          <a href={`mailto:${decryptEmail(encryptedEmail)}`}>
            {decryptEmail(encryptedEmail)}
          </a>
        </Typography>
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
