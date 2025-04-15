// src/pages/Login.jsx
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box, TextField, Button, Typography, Alert, Tooltip, CircularProgress } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // État pour gérer le loader

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true); // Active le loader

    // Vérification "hardcodée"
    if (email === 'admin@admin.com' && password === 'admin') {
      setError('');
      setSuccess(true);
      login();
      setTimeout(() => {
        setLoading(false); // Désactive le loader
        navigate('/admin'); // Redirige après un court délai
      }, 1500); // Délai de 1,5 seconde avant la redirection
    } else {
      setLoading(false); // Désactive le loader
      setSuccess(false);
      setError('Identifiant ou mot de passe incorrect');
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
      <Tooltip title="Retour à l'accueil" arrow>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/accueil')}
          sx={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            minWidth: 'unset',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <HomeIcon />
        </Button>
      </Tooltip>

      {/* Superposition pour le loader */}
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10, // Superpose au formulaire
          }}
        >
          <CircularProgress size={60} sx={{ color: 'white' }} />
        </Box>
      )}

      <Box
        sx={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          zIndex: loading ? 5 : 1, // Assure que le formulaire est derrière le loader
          opacity: loading ? 0.5 : 1, // Réduit l'opacité du formulaire pendant le chargement
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom align="center">
          S'authentifier
        </Typography>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading} // Désactive le bouton pendant le chargement
            sx={{ position: 'relative' }}
          >
            Se connecter
          </Button>
        </form>
        {error && (
          <Alert severity="error" sx={{ marginTop: '1rem' }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ marginTop: '1rem' }}>
            Connexion réussie ! Redirection en cours...
          </Alert>
        )}
      </Box>
    </Box>
  );
}

export default Login;
