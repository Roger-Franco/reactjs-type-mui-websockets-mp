import { ThemeProvider, CssBaseline, Grid, MenuItem, Select, Button } from "@mui/material"
import theme from './theme'
import { Navbar } from './components/Navbar';
import { styled } from '@mui/material/styles';
import { Loader } from 'google-maps';
import { useEffect } from 'react';

const GOOGLE_MAP_API_KEY = "AIzaSyApArU8thizqEAe6lXTUJBFLXTX9Sm6huU"

const loader = new Loader(GOOGLE_MAP_API_KEY)

const Form = styled('form')(({ theme }) => ({ margin: theme.spacing(1) }));
const MapContainer = styled('div')(({ theme }) => ({ width: "100%", height: "100%" }));

function App() {
  useEffect(() => {
    (async () => {
      await loader.load();
      const divMap = document.getElementById('map') as HTMLDivElement;
      new google.maps.Map(divMap, { zoom: 15 })
    })()
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <Grid container style={{ width: '100%', height: '100%' }}>
        <Grid item xs={12} sm={3}>
          <Form>
            <Select fullWidth displayEmpty defaultValue={""}>
              <MenuItem value="">
                <em>Selecione uma rota</em>
              </MenuItem>
              <MenuItem value="">
                Rota 1
              </MenuItem>
            </Select>
            <div style={{ textAlign: 'center', margin: theme.spacing(1) }}>
              <Button type="submit" variant="contained" >Iniciar rota</Button>
            </div>
          </Form>
        </Grid>
        <Grid item xs={12} sm={9}>
          <MapContainer id="map" />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
