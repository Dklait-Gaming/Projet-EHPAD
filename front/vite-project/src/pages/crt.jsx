import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Box, Typography } from "@mui/material";

export default function CRT() {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: 2, textAlign: "center" , overflowY: "auto", height: "100vh" , paddingTop: "200px", paddingBottom: "100px"}}>
        <Typography variant="h4" gutterBottom>
          Page de CRT
        </Typography>
        <Typography variant="body1" gutterBottom>
          Cette page est dédiée à la CRT.
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Elle est encore en construction.
        </Typography>
      </Box>
      <Footer />
    </>
  );
}