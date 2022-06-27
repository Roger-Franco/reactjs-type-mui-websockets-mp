import { DriveEta } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export function Navbar() {
  return (

    <AppBar position="static" enableColorOnDark>
      <Toolbar>
        <IconButton color="inherit" edge="start">
          <DriveEta />
        </IconButton>
        <Typography variant="h6">Full Cycle Delivery</Typography>
      </Toolbar>
    </AppBar>
  );
}
