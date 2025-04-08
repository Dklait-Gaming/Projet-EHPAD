import React, { useState } from "react";
import { Button, TextField, Alert, Box, Typography } from "@mui/material";

const SecureMail = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [error, setError] = useState(false);
  const encryptedEmail = "Y29udGFjdEBkb21haW5lLmNvbQ==";

  const decryptEmail = (encrypted) => atob(encrypted);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quizAnswer.toLowerCase() === "blanc") {
      setShowEmail(true);
      setError(false);
      alert("Bonne réponse !");
    } else {
      setError(true);
    }
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
          {error && (
            <Alert severity="error" sx={{ marginTop: 2 }}>
              Réponse incorrecte. Veuillez réessayer.
            </Alert>
          )}
        </Box>
      ) : (
        <Typography variant="body1">
          Contactez-nous à :{" "}
          <a href={`mailto:${decryptEmail(encryptedEmail)}`}>
            {decryptEmail(encryptedEmail)}
          </a>
        </Typography>
      )}
    </Box>
  );
};

export default SecureMail;
