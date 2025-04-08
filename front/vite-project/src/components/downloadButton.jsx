import React from "react";
import { Button, Box } from "@mui/material";

const DownloadButton = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Button
        variant="contained"
        color="primary"
        href="https://ec-bievres.ac-versailles.fr/IMG/pdf/test_pdf.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Document de test
      </Button>
      <Button
        variant="contained"
        color="primary"
        href="https://ec-bievres.ac-versailles.fr/IMG/pdf/test_pdf.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Document de test 2
      </Button>
      <Button
        variant="contained"
        color="primary"
        href="https://ec-bievres.ac-versailles.fr/IMG/pdf/test_pdf.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Document de test 3
      </Button>
    </Box>
  );
};

export default DownloadButton;
