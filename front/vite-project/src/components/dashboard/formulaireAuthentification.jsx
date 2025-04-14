import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function FormulaireAuthentification({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Exemple de validation simple
    if (username === "admin" && password === "password123") {
      onLogin(); // Appelle la fonction pour indiquer que l'utilisateur est connecté
    } else {
      setError("Nom d'utilisateur ou mot de passe incorrect.");
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond semi-transparent
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, // Assure que le formulaire est au premier plan
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: 4,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          width: "300px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Connexion Admin
        </Typography>
        {error && (
          <Typography variant="body2" color="error" sx={{ marginBottom: 2 }}>
            {error}
          </Typography>
        )}
        <TextField
          label="Nom d'utilisateur"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Mot de passe"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Se connecter
        </Button>
      </Box>
    </Box>
  );
}