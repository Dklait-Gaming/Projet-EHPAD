import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#ededed",
    textAlign: "center",
    padding: "10px 0",
    position: "absolute", // Le footer est positionné en bas de la page
    width: "100%", // Prend toute la largeur de la fenêtre
  };

  const iconStyle = {
    margin: "0 10px",
    color: "#333",
  };

  const handleHover = (e, scale) => {
    e.currentTarget.style.transform = `scale(${scale})`; // Applique un agrandissement
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
            fontSize: "large",
          }}
        >
          Mentions légales
        </MuiLink>

        {iconLinks.map((item, index) => (
          <MuiLink
            key={index}
            href={item.href}
            underline="none"
          >
            {React.cloneElement(item.icon, {
              size: 30,
              style: iconStyle,
            })}
          </MuiLink>
        ))}

        <MuiLink
          href="/nous-contacter"
          sx={{
            color: "black",
            textDecoration: "none",
            fontSize: "large",
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
