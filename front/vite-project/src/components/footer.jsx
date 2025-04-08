import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Link as MuiLink } from "@mui/material";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Position actuelle du scroll
      const windowHeight = window.innerHeight; // Hauteur de la fenêtre
      const fullHeight = document.documentElement.scrollHeight; // Hauteur totale du document

      // Affiche le footer uniquement si l'utilisateur est en bas de la page
      if (scrollTop + windowHeight >= fullHeight - 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerStyle = {
    backgroundColor: "whitesmoke",
    textAlign: "center",
    padding: "10px 0",
    position: "fixed", // Fixe le footer
    bottom: 0, // Place le footer en bas de la fenêtre
    left: 0,
    width: "100%", // S'étend sur toute la largeur de la fenêtre
    zIndex: 1000, // Assure que le footer reste au-dessus des autres éléments
    transition: "transform 0.3s ease", // Animation pour l'apparition/disparition
    transform: isVisible ? "translateY(0)" : "translateY(100%)", // Glisse vers le bas lorsqu'il disparaît
  };

  const logoStyle = {
    height: 100,
    width: 150,
    margin: "0 10px",
    transition: "transform 0.3s ease", // Animation au survol
  };

 
  const iconStyle = {
    margin: "0 10px",
    color: "#333",
    transition: "transform 0.3s ease", // Animation au survol
  };

  return (
    <Box style={footerStyle}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mb={2}
        flexWrap="wrap"
      >
        {/* Logos avec animation au survol */}
        <img
          src="./src/images/BdH.jpg"
          style={logoStyle}
          alt="Logo principal"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <img
          src="./src/images/ski.jpg"
          style={logoStyle}
          alt="Second logo"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <img
          src="./src/images/ski.jpg"
          style={logoStyle}
          alt="Troisième logo"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />

        {/* Boutons et icônes */}
        <MuiLink href="/mentions-legales" underline="none">
          <Button variant="body2" sx={{color:'black'}}>Mentions légales</Button>
        </MuiLink>

        <MuiLink href="https://www.facebook.com/ehpad.argeles.gazost/" underline="none">
          <FaFacebook 
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          size={30} style={iconStyle} 
          />
        </MuiLink>

        <MuiLink href="https://www.instagram.com/ehpadargelesgazost/" underline="none">
          <FaInstagram 
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          size={30} style={iconStyle} 
          />
        </MuiLink>
        
        <MuiLink href="https://fr.linkedin.com/company/ehpad-lbdh/" underline="none">
          <FaLinkedin
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} 
          size={30} style={iconStyle} />
        </MuiLink>

        <MuiLink href="/nous-contacter" underline="none">
          <Button variant="body2" sx={{color:'black'}}>Nous contacter</Button>
        </MuiLink>
      </Box>
      
      <Typography variant="body2" color="textSecondary">
        © 2025. EHPAD Les Balcons du Hautacam - Tous droits réservés
      </Typography>
    </Box>
  );
}
