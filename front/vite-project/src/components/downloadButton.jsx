import React, { useState } from "react";
import { Box, MenuItem, Select, Typography, Button } from "@mui/material";

const DownloadButton = () => {
  const [selectedLink, setSelectedLink] = useState("");

  const handleValidate = () => {
    if (selectedLink) {
      window.open(selectedLink, "_blank", "noopener,noreferrer");
      setSelectedLink(""); // Réinitialise la sélection après validation
    } else {
      alert("Veuillez sélectionner un document avant de valider.");
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} sx={{ marginTop: 4 }}>
      <Typography variant="h6" gutterBottom>
        Sélectionnez un document à télécharger :
      </Typography>
      <Select
        value={selectedLink}
        onChange={(event) => setSelectedLink(event.target.value)}
        displayEmpty
        sx={{ width: "300px", textAlign: "center" }}
      >
        <MenuItem value="" disabled sx={{textAlign:"center"}}>
          Choisissez un document
        </MenuItem>
        <MenuItem value="https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf">
          Document de test 1
        </MenuItem>
        <MenuItem value="https://www.orimi.com/pdf-test.pdf">
          Document de test 2
        </MenuItem>
        <MenuItem value="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
          Document de test 3
        </MenuItem>
      </Select>
      <Button
        variant="contained"
        color="primary"
        onClick={handleValidate}
        sx={{ marginTop: 2 }}
      >
        Valider
      </Button>
    </Box>
  );
};

export default DownloadButton;
