import { ThemeProvider, Button, CssBaseline, AppBar, Toolbar, Typography } from "@mui/material"
import theme from './theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography>Full Cycle Delivery</Typography>
        </Toolbar>
      </AppBar>
      Olá Mundo
      <Button variant="contained" >Xpto</Button>
    </ThemeProvider>
  );
}

export default App;
