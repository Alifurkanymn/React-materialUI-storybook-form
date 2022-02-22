import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Form
          </Typography>
          <Menu>
            <MenuItem>
              Views 
            </MenuItem>
            <MenuItem>
              Form
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header