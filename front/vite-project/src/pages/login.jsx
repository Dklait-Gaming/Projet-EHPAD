// src/pages/Login.jsx
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box, TextField, Button, Typography, Alert, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState({ error: '', success: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email === 'admin@admin.com' && password === 'admin') {
      setStatus({ error: '', success: true });
      login();
      setTimeout(() => navigate('/admin'), 1500);
    } else {
      setStatus({ error: 'Identifiant ou mot de passe incorrect', success: false });
    }
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
        backgroundImage: 'url(./src/images/project.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Bouton Accueil */}
      <Tooltip title="Retour à l'accueil" placement="left" arrow>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/accueil')}
          sx={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '60px', // Largeur du bouton
            height: '60px', // Hauteur égale à la largeur pour un cercle parfait
            borderRadius: '50%', // Cercle parfait
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Ombre pour un effet 3D
          }}
        >
          <HomeIcon />
        </Button>
      </Tooltip>

      {/* Formulaire de connexion */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom align="center">
          S'authentifier
        </Typography>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Mot de passe"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Se connecter
          </Button>
        </form>
        {status.error && (
          <Alert severity="error" sx={{ marginTop: '1rem' }}>
            {status.error}
          </Alert>
        )}
        {status.success && (
          <Alert severity="success" sx={{ marginTop: '1rem' }}>
            Connexion réussie ! Redirection en cours...
          </Alert>
        )}
      </Box>
    </Box>
  );
}

export default Login;