import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#ededed",
    textAlign: "center",
    padding: "10px 0",
    position: "relative", // Position relative pour qu'il soit dans le flux normal
    width: "100%", // Prend toute la largeur de la fenêtre
  };

  const logoStyle = {
    height: 80,
    width: 120,
    margin: "0 10px",
    borderRadius: "10px",
  };

  const iconStyle = {
    margin: "0 10px",
    color: "#333",
    transition: "transform 0.3s ease", // Animation au survol
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
    position: "relative",
    fontSize: "large",
    "&:hover": {
      textDecoration: "none",
    },
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
  };

  return (
    <Box style={footerStyle}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mb={2}
      >
        {/* Logos avec animation au survol */}
        <img
          src="./src/images/BdH.jpg"
          style={logoStyle}
          alt="Logo principal"
        />
        <img
          src="./src/images/ski.jpg"
          style={logoStyle}
          alt="Second logo"
        />
        <img
          src="./src/images/ski.jpg"
          style={logoStyle}
          alt="Troisième logo"
        />

        {/* Liens avec animation underline */}
        <MuiLink href="/mentions-legales" sx={linkStyle}>
          Mentions légales
        </MuiLink>

        <MuiLink href="https://www.facebook.com/ehpad.argeles.gazost/" underline="none">
          <FaFacebook
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            size={30}
            style={iconStyle}
          />
        </MuiLink>

        <MuiLink href="https://www.instagram.com/ehpadargelesgazost/" underline="none">
          <FaInstagram
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            size={30}
            style={iconStyle}
          />
        </MuiLink>

        <MuiLink href="https://fr.linkedin.com/company/ehpad-lbdh/" underline="none">
          <FaLinkedin
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            size={30}
            style={iconStyle}
          />
        </MuiLink>

        <MuiLink href="/nous-contacter" sx={linkStyle}>
          Nous contacter
        </MuiLink>
      </Box>

      <Typography variant="body2" color="textSecondary">
        © 2025. EHPAD Les Balcons du Hautacam - Tous droits réservés
      </Typography>
    </Box>
  );
}
