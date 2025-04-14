// components/dashboard/Sidebar.jsx
import * as React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Pages as PagesIcon,
  Image as ImageIcon,
  Mail as MailIcon,
  Widgets as ComponentsIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <Drawer variant="permanent" sx={{ width: 240 }}>
      <List>
        <ListItem button onClick={() => setActiveTab('dashboard')}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Tableau de bord" />
        </ListItem>
        <ListItem button onClick={() => setActiveTab('pages')}>
          <ListItemIcon><PagesIcon /></ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItem>
        <ListItem button component={Link} to="/components" onClick={() => setActiveTab('components')}>
          <ListItemIcon><ComponentsIcon /></ListItemIcon>
          <ListItemText primary="Composants" />
        </ListItem>
        <ListItem button onClick={() => setActiveTab('media')}>
          <ListItemIcon><ImageIcon /></ListItemIcon>
          <ListItemText primary="Médias" />
        </ListItem>
        <ListItem button onClick={() => setActiveTab('messages')}>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
      </List>
    </Drawer>
  );
}