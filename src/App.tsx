import { ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, IconButton } from "@mui/material"
import theme from './theme'
import { DriveEta } from '@mui/icons-material';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" enableColorOnDark>
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <DriveEta />
          </IconButton>
          <Typography variant="h6">Full Cycle Delivery</Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
