import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Card, CardContent } from "@mui/material";
import { Description as DocumentIcon, Download as DownloadIcon } from "@mui/icons-material";

const DownloadButton = () => {
  const documents = [
    { name: "Document de test 1", link: "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf" },
    { name: "Document de test 2", link: "https://www.orimi.com/pdf-test.pdf" },
    { name: "Document de test 3", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  ];

  const handleDownload = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "120vh" }}>
      <Card
        sx={{
          width: 400,
          textAlign: "center",
          padding: 2,
          maxHeight: "80vh",
          overflowY: "auto", // Ajoute une barre de défilement si nécessaire
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Liste des documents à télécharger
          </Typography>
          <List>
            {documents.map((doc, index) => (
              <ListItem
                key={index}
                sx={{
                  
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px 0",
                }}
              >
                <Box display="flex" alignItems="center">
                  <ListItemIcon>
                    <DocumentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={doc.name} />
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<DownloadIcon />}
                  onClick={() => handleDownload(doc.link)}
                >
                  Télécharger
                </Button>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DownloadButton;
