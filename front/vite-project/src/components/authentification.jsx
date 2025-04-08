import React from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function AuthentificationForm() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Page de connexion au dashboard
        </Typography>
        <form action="/connexion" method="POST">
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              fullWidth
              label="Identifiant"
              name="username"
              variant="outlined"
              required
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              fullWidth
              label="Mot de passe"
              name="password"
              type="password"
              variant="outlined"
              required
            />
          </Box>
          <Link to={"/dashboard-admin"} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Se connecter
            </Button>
          </Link>
        </form>
      </Box>
    </Container>
  );
}
