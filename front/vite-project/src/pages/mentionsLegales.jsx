import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Box, Typography } from "@mui/material";

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: 2,
          paddingBottom: "100px", // Compense la hauteur du footer
        }}
      >
        <Typography variant="h4" gutterBottom>
          Page Mentions Légales
        </Typography>
      </Box>
      <Footer />
    </>
  );
}