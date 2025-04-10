// components/dashboard/MediaManager.jsx
import { useState, useEffect } from 'react';
import { 
  Box, Typography, Button, Grid, Card, CardMedia, 
  CardActions, IconButton, CircularProgress 
} from '@mui/material';
import { Delete, CloudUpload } from '@mui/icons-material';

export default function MediaManager() {
  const [media, setMedia] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const savedMedia = JSON.parse(localStorage.getItem('siteMedia') || '[]');
    setMedia(savedMedia);
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    
    const reader = new FileReader();
    reader.onloadend = () => {
      const newMedia = {
        id: Date.now(),
        url: reader.result,
        type: file.type.startsWith('image') ? 'image' : 'video',
        name: file.name
      };
      
      const updatedMedia = [...media, newMedia];
      setMedia(updatedMedia);
      localStorage.setItem('siteMedia', JSON.stringify(updatedMedia));
      setUploading(false);
    };
    
    reader.readAsDataURL(file);
  };

  const handleDelete = (id) => {
    const updatedMedia = media.filter(item => item.id !== id);
    setMedia(updatedMedia);
    localStorage.setItem('siteMedia', JSON.stringify(updatedMedia));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Gestion des Médias</Typography>
      
      <Box sx={{ mb: 3 }}>
        <input
          accept="image/*,video/*"
          style={{ display: 'none' }}
          id="media-upload"
          type="file"
          onChange={handleUpload}
        />
        <label htmlFor="media-upload">
          <Button 
            variant="contained" 
            component="span"
            startIcon={<CloudUpload />}
            disabled={uploading}
          >
            {uploading ? <CircularProgress size={24} /> : 'Téléverser'}
          </Button>
        </label>
      </Box>
      
      <Grid container spacing={2}>
        {media.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              {item.type === 'image' ? (
                <CardMedia
                  component="img"
                  height="140"
                  image={item.url}
                  alt={item.name}
                />
              ) : (
                <CardMedia
                  component="video"
                  height="140"
                  src={item.url}
                  controls
                />
              )}
              <CardActions>
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                  {item.name}
                </Typography>
                <IconButton onClick={() => handleDelete(item.id)}>
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}