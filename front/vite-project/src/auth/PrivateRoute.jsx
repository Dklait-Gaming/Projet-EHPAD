// src/auth/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Vérifie si l'utilisateur est connecté

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
