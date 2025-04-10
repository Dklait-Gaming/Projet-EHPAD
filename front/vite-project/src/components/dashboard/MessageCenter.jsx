// components/dashboard/MessageCenter.jsx
import { useState, useEffect } from 'react';
import { 
  Box, Typography, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, 
  Chip, IconButton 
} from '@mui/material';
import { Delete, MarkEmailRead, MarkEmailUnread } from '@mui/icons-material';

export default function MessageCenter() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Ici vous pourriez faire un appel à un service externe
    // Pour cet exemple, nous utilisons localStorage
    const savedMessages = JSON.parse(localStorage.getItem('siteMessages') || '[]');
    setMessages(savedMessages);
  }, []);

  const toggleRead = (id) => {
    const updatedMessages = messages.map(msg => 
      msg.id === id ? { ...msg, read: !msg.read } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('siteMessages', JSON.stringify(updatedMessages));
  };

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('siteMessages', JSON.stringify(updatedMessages));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Centre de Messagerie</Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Statut</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id}>
                <TableCell>
                  <Chip 
                    label={message.read ? 'Lu' : 'Non lu'} 
                    color={message.read ? 'default' : 'primary'} 
                    size="small"
                  />
                </TableCell>
                <TableCell>{message.name}</TableCell>
                <TableCell>{message.email}</TableCell>
                <TableCell sx={{ maxWidth: 200 }}>
                  {message.message.length > 50 
                    ? `${message.message.substring(0, 50)}...` 
                    : message.message}
                </TableCell>
                <TableCell>{new Date(message.date).toLocaleString()}</TableCell>
                <TableCell>
                  <IconButton onClick={() => toggleRead(message.id)}>
                    {message.read ? <MarkEmailUnread /> : <MarkEmailRead />}
                  </IconButton>
                  <IconButton onClick={() => deleteMessage(message.id)}>
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