import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const GestionContenu = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirige vers la page de connexion après la déconnexion
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Gestion du contenu
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<LogoutIcon />} // Ajout de l'icône de déconnexion
        onClick={handleLogout}
        sx={{
          marginTop: '1rem',
          padding: '0.5rem 1.5rem',
          fontSize: '1rem',
        }}
      >
        Se déconnecter
      </Button>
    </Box>
  );
};

export default GestionContenu;