import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  CssBaseline,
  Divider,
  Paper,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ChatIcon from '@mui/icons-material/Chat';
import { useState } from 'react';

const drawerWidth = 240;

const GestionContenu = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState('pages');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'pages':
        return (
          <Box p={3}>
            <Typography variant="h5" gutterBottom>
              Pages du site
            </Typography>
            <ul>
              <li>Accueil</li>
              <li>À propos</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </Box>
        );
      case 'fichiers':
        return (
          <Box p={3}>
            <Typography variant="h5" gutterBottom>
              Fichiers
            </Typography>
            <Paper
              elevation={3}
              sx={{
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed #ccc',
                backgroundColor: '#fafafa',
              }}
            >
              Glissez vos fichiers ici
            </Paper>
          </Box>
        );
      case 'messagerie':
        return (
          <Box p={3}>
            <Typography variant="h5" gutterBottom>
              Messagerie
            </Typography>
            <Typography>Zone de messagerie (à connecter plus tard).</Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap>
            Dashboard - Gestion du contenu
          </Typography>
          <Button
            color="inherit"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Se déconnecter
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setSelectedSection('pages')}>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="Pages du site" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setSelectedSection('fichiers')}>
                <ListItemIcon>
                  <CloudUploadIcon />
                </ListItemIcon>
                <ListItemText primary="Fichiers" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setSelectedSection('messagerie')}>
                <ListItemIcon>
                  <ChatIcon />
                </ListItemIcon>
                <ListItemText primary="Messagerie" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#f5f5f5', p: 3 }}
      >
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
};

export default GestionContenu;
