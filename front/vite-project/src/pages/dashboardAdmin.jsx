import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export default function DashboardAdmin() {
  return (
    <Box sx={{ padding: 2, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Page Dashboard Admin
      </Typography>
      <Typography variant="body1" gutterBottom>
        Affichage des statistiques de l'établissement ici :
      </Typography>
      <Typography variant="body1" gutterBottom>
        Affichage des contenus éditables
      </Typography>
      <HomeButton />
    </Box>
  );
}

function HomeButton() {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Retour à l'accueil
        </Button>
      </Link>
    </Box>
  );
}