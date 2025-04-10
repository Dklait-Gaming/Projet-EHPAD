import Footer from "../components/footer";
import Navbar from "../components/navbar";
import DownloadButton from "../components/downloadButton";
import { Box } from "@mui/material";

export default function TelechargerUnDocument() {
  return (
    <>
      <Navbar />
      <Box sx={{ marginTop: -10, padding: 2 }}>
        <DownloadButton />
      </Box>
      <Footer />
    </>
  );
}