import CarouselImg from "../components/imageCarousel";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Box } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: 2, textAlign: "center", paddingTop: "150px", paddingBottom: "100px" }}>

      <TypeAnimation
      sequence={[
        'Bonjour et bienvenue sur notre site !',
        1000,
        'Nous sommes ravis de vous accueillir ici.',
        1000,
        'Explorez nos différentes sections pour en savoir plus.',
        1000,
      ]}
      repeat={Infinity}
      wrapper="h1"
    />
         
  

        <CarouselImg />
      </Box>
      <Footer />
    </>
  );
}