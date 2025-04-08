import Footer from "../components/footer";
import Navbar from "../components/navbar";
import FormulaireContact from "../components/formulaireContact";
import { Box } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: 2 , overflowY: "auto", height: "100vh"}}>
        <FormulaireContact />
      </Box>
      <Footer />
    </>
  );
}