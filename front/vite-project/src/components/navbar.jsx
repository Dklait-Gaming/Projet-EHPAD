import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavbarComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const styleLogoNav = {
    verticalAlign: "middle",
    cursor: "pointer",
    borderRadius: "10px",
  };

  const menuItemsLeft = [
    { text: "EHPAD", href: "/ehpad" },
    { text: "Hébergement temporaire", href: "/hebergement-temporaire" },
    { text: "Accueil de jour", href: "/accueil-de-jour" },
    { text: "Foyer restaurant", href: "/foyer-restaurant" },
    { text: "CRT", href: "/crt" },
    { text: "Télécharger un document", href: "/telecharger-document" },
  ];

  const menuItemsRight = [
    { text: "Rejoignez-nous", href: "/rejoignez-nous" },
    { text: "Nous contacter", href: "/nous-contacter" },
  ];

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        width: "100vw", // Prend toute la largeur de la fenêtre
        height: "100px", // Hauteur fixe pour la navbar
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        overflow: "hidden", // Empêche tout débordement
        backgroundColor: "#ededed",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)", //ombre plus prononcée
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between", // Espace entre les groupes d'éléments
          alignItems: "center", // Centre les éléments verticalement
          padding: "0 16px", // Ajout d'un padding horizontal
          height: "100%", // Prend toute la hauteur de la navbar
        }}
      >
        {/* Logo tout à gauche */}
        <Box sx={{ display: "flex", alignItems: "center", marginRight: "16px" }}>
          <a href="/">
            <img
              src="./src/images/BdH.jpg"
              alt="Logo"
              width="120"
              height="80"
              style={styleLogoNav}
            />
          </a>
        </Box>

        {/* Liens alignés à gauche */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Masqué sur les petits écrans
            marginLeft: { xs: "20px", md: "-15px" }, // Ajout d'un espacement sur les petits écrans
          }}
        >
          {menuItemsLeft.map((item, index) => (
            <Button
              key={index}
              href={item.href}
              color="inherit"
              sx={{
                textTransform: "none", // Supprime l'uppercase
                fontSize: "15px", // Réduction de la taille de police
                marginLeft: "10px",
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Liens alignés à droite */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Masqué sur les petits écrans
            gap: 2, // Espacement uniforme entre les liens
          }}
        >
          {menuItemsRight.map((item, index) => (
            <Button
              key={index}
              href={item.href}
              color="inherit"
              sx={{
                textTransform: "none", // Supprime l'uppercase
                fontSize: "15px", // Réduction de la taille de police
                padding: "6px 12px", // Réduction du padding pour un meilleur ajustement
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Menu hamburger pour les petits écrans */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {[...menuItemsLeft, ...menuItemsRight].map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton component="a" href={item.href}>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
