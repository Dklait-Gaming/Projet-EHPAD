import React, { useState } from "react";
import { Box, MenuItem, Select, Typography, Button, Card, CardContent } from "@mui/material";

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
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh", overflowY: "auto" }}>
      <Card
        sx={{
          width: 400,
          textAlign: "center",
          padding: 2,
          transition: "transform 0.3s, box-shadow 0.3s", // Animation fluide
          "&:hover": {
            transform: "scale(1.02)", // Agrandit légèrement la carte
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Ajoute une ombre plus marquée
          },
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Sélectionnez un document à télécharger
          </Typography>
          <Select
            value={selectedLink}
            onChange={(event) => setSelectedLink(event.target.value)}
            displayEmpty
            sx={{ width: "300px", textAlign: "center", marginBottom: 2 }}
          >
            <MenuItem value="" disabled sx={{ textAlign: "center" }}>
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default DownloadButton;
