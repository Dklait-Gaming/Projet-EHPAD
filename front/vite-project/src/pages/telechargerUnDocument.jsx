import Footer from "../components/footer";
import Navbar from "../components/navbar";
import DownloadButton from "../components/downloadButton";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function TelechargerUnDocument() {
  return (
    <>
      <Navbar />
      
        <DownloadButton/>
        
      <Footer />
    </>
  );
}