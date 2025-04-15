import React, { useState, useEffect } from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false); // État pour gérer la visibilité du footer

  useEffect(() => {
    const handleScroll = () => {
      // Vérifie si l'utilisateur a atteint le bas de la page
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight) {
        setIsVisible(true); // Affiche le footer
      } else {
        setIsVisible(false); // Cache le footer
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Nettoie l'événement
  }, []);

  const footerStyle = {
    backgroundColor: "#ededed",
    textAlign: "center",
    padding: "10px 0",
    position: "fixed", // Fixe le footer en bas de la fenêtre
    bottom: 0,
    left: 0,
    width: "100%", // Prend toute la largeur de la fenêtre
    zIndex: 1000, // Assure que le footer est au-dessus des autres éléments
    display: isVisible ? "block" : "none", // Affiche ou cache le footer
  };

  const iconStyle = {
    margin: "0 10px",
    color: "#333",
    transition: "transform 0.3s ease",
  };

  const handleHover = (e, scale) => {
    e.currentTarget.style.transform = `scale(${scale})`;
  };

  const logos = [
    { src: "./src/images/BdH.jpg", alt: "Logo principal" },
    { src: "./src/images/ski.jpg", alt: "Second logo" },
    { src: "./src/images/ski.jpg", alt: "Troisième logo" },
  ];

  const iconLinks = [
    { href: "https://www.facebook.com/ehpad.argeles.gazost/", icon: <FaFacebook /> },
    { href: "https://www.instagram.com/ehpadargelesgazost/", icon: <FaInstagram /> },
    { href: "https://fr.linkedin.com/company/ehpad-lbdh/", icon: <FaLinkedin /> },
  ];

  return (
    <Box component="footer" sx={footerStyle}>
      <Box display="flex" justifyContent="center" alignItems="center" gap={2} mb={1} flexWrap="wrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            style={{ height: 80, width: 120, margin: "0 10px", borderRadius: 10 }}
          />
        ))}

        <MuiLink
          href="/mentions-legales"
          sx={{
            color: "black",
            textDecoration: "none",
            position: "relative",
            fontSize: "large",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "0",
              height: "2px",
              bottom: "-2px",
              left: "0",
              backgroundColor: "black",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          Mentions légales
        </MuiLink>

        {iconLinks.map((item, index) => (
          <MuiLink key={index} href={item.href} underline="none">
            {React.cloneElement(item.icon, {
              size: 30,
              style: iconStyle,
              onMouseEnter: (e) => handleHover(e, 1.1),
              onMouseLeave: (e) => handleHover(e, 1),
            })}
          </MuiLink>
        ))}

        <MuiLink
          href="/nous-contacter"
          sx={{
            color: "black",
            textDecoration: "none",
            position: "relative",
            fontSize: "large",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "0",
              height: "2px",
              bottom: "-2px",
              left: "0",
              backgroundColor: "black",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          Nous contacter
        </MuiLink>
      </Box>

      <Typography variant="body2" color="text.secondary">
        © 2025. EHPAD Les Balcons du Hautacam - Tous droits réservés
      </Typography>
    </Box>
  );
}
