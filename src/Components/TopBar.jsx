import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';

//const color = red[500];
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { useNavigate } from 'react-router-dom';

export default function TopBar() {
  const navigate= useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color = "secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              navigate("/")
            }}

          >
            <LocalFloristIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Miss/Mister ICTU 2022
          </Typography>
          <Button color="inherit">Help</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
  
}