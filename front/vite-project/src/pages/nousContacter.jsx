import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Contacts from "../components/contact";
import FormulaireContact from "../components/formulaireContact";
import { Box } from "@mui/material";

export default function NousContacter() {
  return (
    <>
      <Navbar />
      
          <FormulaireContact />
   
      <Footer />
    </>
  );
}