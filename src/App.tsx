import { ThemeProvider, CssBaseline } from "@mui/material"
import theme from './theme'
import { Navbar } from './components/Navbar';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
