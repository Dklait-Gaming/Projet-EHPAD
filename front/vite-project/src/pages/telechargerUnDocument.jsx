import Footer from "../components/footer";
import Navbar from "../components/navbar";
import DownloadButton from "../components/downloadButton";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function TelechargerUnDocument() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "100vh", // Hauteur de la fenêtre
          overflowY: "auto", // Ajoute un scroll vertical si nécessaire
          padding: 2,
          paddingTop: "128px", // Compense la hauteur combinée des deux barres de navigation
          paddingBottom: "100px", // Compense la hauteur du footer
        }}
      >
        <Accordion sx={{ marginTop: 2, width: "50%" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Documents à télécharger</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DownloadButton text="Document 1" link="/path/to/document1.pdf" />
          </AccordionDetails>
        </Accordion>
        <Typography variant="h4" gutterBottom>
          Page Télécharger un Document
        </Typography>
      </Box>
      <Footer />
    </>
  );
}