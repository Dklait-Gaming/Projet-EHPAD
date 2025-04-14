import Footer from "../components/footer";
import Map from "../components/map";
import Navbar from "../components/navbar";
import Navbar2 from "../components/navbar2";
import { Box, Typography } from "@mui/material";

export default function Presentation() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Box sx={{ padding: 2 , height: "100vh" , paddingTop: "200px", textAlign: "center"}}>
        <Typography variant="h4" gutterBottom>
          Présentation de l'EHPAD
        </Typography>
        <Typography variant="body1" gutterBottom>
          Découvrez notre établissement et ses services.
        </Typography>
        <Map />
      </Box>
      <Footer />
    </>
  );
}
