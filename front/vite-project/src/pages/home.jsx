import CarouselImg from "../components/imageCarousel";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TextSizeAdjuster from "../components/buttonVision";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: 2 }}>
        <CarouselImg />
        <TextSizeAdjuster />
      </Box>
      <Footer />
    </>
  );
}