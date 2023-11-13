import React, { useState } from 'react';
import './menu.css';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ShopIcon from "@mui/icons-material/Shop";
import ResetStatsIcon from "@mui/icons-material/SettingsBackupRestore";
import BuySnipesIcon from "@mui/icons-material/ShoppingCart";
import TeamsIcon from "@mui/icons-material/Group";
import LinkedAccountsIcon from "@mui/icons-material/Link";
import TokenHistoryIcon from "@mui/icons-material/History";
import CreateTicketIcon from "@mui/icons-material/ContactSupport";
import TermsIcon from "@mui/icons-material/Description";
import PrivacyPolicyIcon from "@mui/icons-material/PrivacyTip";
import FaqIcon from "@mui/icons-material/Help";
import { People } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const Menu = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const menuCategories = [
    {
      category: 'Play LFW',
      items: [
        { text: 'Home', icon: <HomeIcon sx={{ color: 'white' }} /> },
        { text: 'Leaderboard', icon: <LeaderboardIcon sx={{ color: 'white' }} /> },
      ],
    },
    {
      category: 'Others',
      items: [
        { text: 'Shop', icon: <ShopIcon sx={{ color: 'white' }} /> },
        { text: 'Reset Stats', icon: <ResetStatsIcon sx={{ color: 'white' }} /> },
        { text: 'Buy Snipes', icon: <BuySnipesIcon sx={{ color: 'white' }} /> },
      ],
    },
    {
      category: 'Profile',
      items: [
        { text: 'Teams', icon: <TeamsIcon sx={{ color: 'white' }} /> },
        { text: 'Linked Accounts', icon: <LinkedAccountsIcon sx={{ color: 'white' }} /> },
        { text: 'Token History', icon: <TokenHistoryIcon sx={{ color: 'white' }} /> },
      ],
    },
    {
      category: 'Support',
      items: [
        { text: 'Create a Ticket', icon: <CreateTicketIcon sx={{ color: 'white' }} /> },
        { text: 'Terms', icon: <TermsIcon sx={{ color: 'white' }} /> },
        { text: 'Privacy Policy', icon: <PrivacyPolicyIcon sx={{ color: 'white' }} /> },
        { text: 'FAQ', icon: <FaqIcon sx={{ color: 'white' }} /> },
      ],
    },
  ];

  return (
    <div>
      <IconButton
        onClick={toggleDrawer}
        className={`toggle-button ${isDrawerOpen ? 'open' : ''}`}
        style={{ position: 'absolute', left: isDrawerOpen ? '200px' : '0'}}
      >
        <MenuIcon sx={{ color: 'white' }} />
      </IconButton>
      <Drawer variant="permanent" anchor="left" open={isDrawerOpen}>
        <List style={{ position: 'relative', paddingBottom: '150px' }}>
          {menuCategories.map((category) => (
            <div key={category.category}>
              <Typography variant="subtitle1" color="gray" style={{ marginLeft: 16, marginTop: 16 }}>
                {category.category}
              </Typography>
              {category.items.map((item) => (
                <ListItem key={item.text} sx={{ cursor: 'pointer' }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{ style: { color: 'white', marginLeft: '-22px' } }} />
                </ListItem>
              ))}
            </div>
          ))}
          <footer>
            <button><People sx={{ marginRight: '8px', background: '#147fff', padding: '5px', borderRadius: '8px' }} /> Join Discord</button>
          </footer>
        </List>
      </Drawer>
    </div>
  );
};

export default Menu;
