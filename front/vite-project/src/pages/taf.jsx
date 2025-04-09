import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SecureMail from "../components/mail";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Phone, PhoneCallback } from "@mui/icons-material";

export default function Taf() {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: 15 , overflowY: "auto", height: "100vh"}}>
        <Typography variant="h5" gutterBottom sx={{textAlign:"center"}}>
          Affichage des offres d'emplois disponibles
        </Typography>
        <SecureMail />


        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centre horizontalement
            alignItems: "center", // Centre verticalement
            marginTop: 4, // Ajoute un espace au-dessus
          }}
        >

        {/* Carte LinkedIn */}
      <Card sx={{ width: 500, textAlign: "center"}}>
            <CardContent>
              
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Informations de contact supplémentaire
              </Typography>
              <Typography variant="h8" sx={{ marginTop: 2 }}>
                <Phone /> 02.02.02.02.02
              </Typography>
              
            </CardContent>
          </Card>
          </Box>
      </Box>
      <Footer />
    </>
  );
}