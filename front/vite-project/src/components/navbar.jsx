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
        width: "100%",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: 0 , backgroundColor: "#d3d3d3"}}>
        {/* Logo */}
        {/* Logo cliquable */}
        <Box sx={{ flexGrow: 1 }}>
          <a href="/">
            <img
              src=".\src\images\BdH.jpg"
              alt="Logo"
              width="120"
              height="80"
              style={{ verticalAlign: "middle", cursor: "pointer" }}
            />
          </a>
        </Box>

        {/* Liens alignés à gauche */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 6,
            justifyContent: "flex-start", // Aligne les liens à gauche
            gap: 2, // Espacement entre les liens
          }}
        >
          {menuItemsLeft.map((item, index) => (
            <Button key={index} href={item.href} color="inherit">
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Liens alignés à droite */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end", // Aligne les liens à droite
            gap: 2, // Espacement entre les liens
          }}
        >
          {menuItemsRight.map((item, index) => (
            <Button key={index} href={item.href} color="inherit">
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
