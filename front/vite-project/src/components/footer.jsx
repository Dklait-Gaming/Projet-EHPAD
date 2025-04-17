import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#ededed",
    textAlign: "center",
    padding: "10px 0",
    position: "relative", // Change absolute to relative for better responsiveness
    width: "100%",
    zIndex: 10,
  };

  const iconStyle = {
    margin: "0 10px",
    color: "#333",
    transition: "transform 0.3s ease, color 0.3s ease",
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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mb={1}
        flexWrap="wrap"
      >
        {/* Logos avec animation */}
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            style={{
              height: 80,
              width: 120,
              margin: "0 10px",
              borderRadius: 10,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.opacity = "0.8";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.opacity = "1";
            }}
          />
        ))}

        {/* Liens textuels avec effet */}
        <MuiLink
  href="/mentions-legales"
  sx={{
    position: "relative",
    color: "black",
    fontSize: "large",
    textDecoration: "none",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "black",
      transition: "width 0.35s ease-in-out",
    },
    "&:hover::after": {
      width: "100%",
    },
    "&:hover": {
      color: "black",
    },
  }}
>
          Mentions légales
        </MuiLink>

        {/* Icônes réseaux sociaux avec zoom */}
        {iconLinks.map((item, index) => (
          <MuiLink
            key={index}
            href={item.href}
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)",
                color: "#1976d2",
              },
            }}
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
            position: "relative",
            color: "black",
            fontSize: "large",
            textDecoration: "none",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "0%",
              height: "2px",
              bottom: 0,
              left: 0,
              backgroundColor: "black",
              transition: "width 0.35s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
            "&:hover": {
              color: "black",
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