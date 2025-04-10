// components/DynamicPage.jsx
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Navbar2 from "../components/navbar2";
import { Box, Typography } from "@mui/material";
import TextSizeAdjuster from "../components/buttonVision";

export default function DynamicPage({ pageId }) {
  const [fontSize, setFontSize] = useState(16);
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const savedPages = JSON.parse(localStorage.getItem('sitePages') || '[]');
    const page = savedPages.find(p => p.id === pageId);
    setPageContent(page);
  }, [pageId]);

  if (!pageContent) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <Navbar />
      <Navbar2 />
      <Box
        sx={{
          height: "100vh",
          overflowY: "auto",
          padding: 2,
          textAlign: "center",
          paddingTop: "200px",
          paddingBottom: "100px",
        }}
      >
        <TextSizeAdjuster onFontSizeChange={setFontSize} />

        <Box mt={4}>
          <Typography variant="h4" style={{ fontSize: `${fontSize}px` }} gutterBottom>
            {pageContent.title}
          </Typography>
          <Typography style={{ fontSize: `${fontSize}px` }}>
            {pageContent.content}
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
}