import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SecureMail from "../components/mail";
import { Box, Typography } from "@mui/material";

export default function Taf() {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: 2 , overflowY: "auto", height: "100vh"}}>
        <Typography variant="h4" gutterBottom>
          Les offres d'emplois actuelles :
        </Typography>
        <SecureMail />
      </Box>
      <Footer />
    </>
  );
}