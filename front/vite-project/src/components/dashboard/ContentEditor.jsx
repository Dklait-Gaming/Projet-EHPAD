// components/dashboard/ContentEditor.jsx
import { useState, useEffect } from 'react';
import { 
  Box, Button, TextField, Typography, Paper, Table, 
  TableBody, TableCell, TableContainer, TableHead, 
  TableRow, IconButton 
} from '@mui/material';
import { Edit, Delete, Save, Cancel } from '@mui/icons-material';

export default function ContentEditor() {
  const [pages, setPages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    // Charger depuis localStorage ou fichier JSON
    const savedPages = JSON.parse(localStorage.getItem('sitePages') || '[]');
    setPages(savedPages);
  }, []);

  const handleSave = () => {
    let updatedPages;
    
    if (editingId) {
      updatedPages = pages.map(page => 
        page.id === editingId ? { ...page, ...formData } : page
      );
    } else {
      updatedPages = [...pages, { ...formData, id: Date.now() }];
    }
    
    setPages(updatedPages);
    localStorage.setItem('sitePages', JSON.stringify(updatedPages));
    setEditingId(null);
    setFormData({ title: '', content: '' });
  };

  const handleEdit = (page) => {
    setEditingId(page.id);
    setFormData({ title: page.title, content: page.content });
  };

  const handleDelete = (id) => {
    const updatedPages = pages.filter(page => page.id !== id);
    setPages(updatedPages);
    localStorage.setItem('sitePages', JSON.stringify(updatedPages));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Gestion des Pages</Typography>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField
          label="Titre de la page"
          fullWidth
          margin="normal"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <TextField
          label="Contenu"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
        />
        <Box sx={{ mt: 2 }}>
          <Button 
            variant="contained" 
            startIcon={<Save />}
            onClick={handleSave}
          >
            {editingId ? 'Mettre à jour' : 'Ajouter'}
          </Button>
          {editingId && (
            <Button 
              variant="outlined" 
              startIcon={<Cancel />}
              onClick={() => setEditingId(null)}
              sx={{ ml: 2 }}
            >
              Annuler
            </Button>
          )}
        </Box>
      </Paper>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Titre</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pages.map((page) => (
              <TableRow key={page.id}>
                <TableCell>{page.title}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(page)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(page.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}