import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

function TextSizeAdjuster() {
  const [fontSize, setFontSize] = useState(16); // Taille par défaut

  const increaseTextSize = () => setFontSize((prev) => prev + 2);
  const decreaseTextSize = () => setFontSize((prev) => Math.max(prev - 2, 10)); // Limite minimale à 10px

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
      <Box display="flex" gap={2} mb={3}>
        <Button variant="contained" color="primary" onClick={decreaseTextSize}>
          -
        </Button>
        <Button variant="contained" color="primary" onClick={increaseTextSize}>
          +
        </Button>
      </Box>
      <Typography style={{ fontSize: `${fontSize}px` }} align="center">
        Texte avec taille
      </Typography>
    </Box>
  );
}

export default TextSizeAdjuster;