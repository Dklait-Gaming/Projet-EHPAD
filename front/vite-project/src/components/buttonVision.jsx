import React, { useState } from "react";
import { Box, Button } from "@mui/material";

function TextSizeAdjuster({ onFontSizeChange }) {
  const [fontSize, setFontSize] = useState(16); // Taille par défaut
  const MAX_FONT_SIZE = 32; // Taille maximale
  const MIN_FONT_SIZE = 10; // Taille minimale

  const increaseTextSize = () => {
    const newSize = Math.min(fontSize + 2, MAX_FONT_SIZE); // Limite maximale
    setFontSize(newSize);
    onFontSizeChange(newSize); // Informe le parent de la nouvelle taille
  };

  const decreaseTextSize = () => {
    const newSize = Math.max(fontSize - 2, MIN_FONT_SIZE); // Limite minimale
    setFontSize(newSize);
    onFontSizeChange(newSize); // Informe le parent de la nouvelle taille
  };

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={decreaseTextSize}
          sx={{     
            height: "40px",
            width: "40px",
            borderRadius: "50%", // Bouton circulaire
            minWidth: "40px", // Assure une largeur minimale
            marginRight:"-10px", // Change le placement du bouton vers la droite
            fontSize: "14px", // Taille du texte dans le bouton
          }}
        >
          A⁻
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={increaseTextSize}
          sx={{
            height: "40px",
            width: "40px",        
            borderRadius: "50%", // Bouton circulaire
            minWidth: "40px", // Assure une largeur minimale
            marginTop:"-15px", // Change le placement du bouton vers le haut
            fontSize: "14px", // Taille du texte dans le bouton
          }}
        >
          A⁺
        </Button>
      </Box>
    </Box>
  );
}

export default TextSizeAdjuster;