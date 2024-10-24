import React from 'react';
import { AppBar, Toolbar, IconButton, Grid, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { Home as HomeIcon, Map as MapIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redirigir


function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detecta si es pantalla móvil
  const navigate = useNavigate(); // Usamos useNavigate para redirigir al usuario

  // Función para redirigir a HomePage cuando se haga clic en el ícono de la casita
  const handleHomeClick = () => {
    navigate('/'); // Redirige a la ruta principal (HomePage)
  };

  const NavbarTexture = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/textura.png';
  const FeriaImage = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/feria-tutores-removebg-preview.png';
  const Collab = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/match.png';

  return (
    <AppBar 
      position="sticky" // Cambiamos position a sticky
      sx={{ 
        backgroundColor: 'rgba(255,255,255,0.9)', 
        boxShadow: 'none', 
        top: 0, // Mantiene la barra en la parte superior
        zIndex: theme.zIndex.appBar, // Asegura que esté siempre por encima de otros elementos
        height: { xs: '70px', sm: '80px' }, 
        backgroundImage: `url(${NavbarTexture})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
      {isMobile ? ( // Si es móvil, no usamos Container
        <Toolbar sx={{ minHeight: '70px' }}>
          <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="home"
                  onClick={handleHomeClick} // Redirige al hacer clic en el ícono de la casita
                  sx={{
                    '&:hover': { backgroundColor: 'transparent', transform: 'scale(1.1)' },
                    transition: 'transform 0.3s ease, color 0.3s ease',
                  }}
                >
                  <HomeIcon sx={{ color: '#1A1F71', fontSize: '1.5rem' }} />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="map"
                  sx={{
                    '&:hover': { backgroundColor: 'transparent', transform: 'scale(1.1)' },
                    transition: 'transform 0.3s ease, color 0.3s ease',
                  }}
                >
                  <MapIcon sx={{ color: '#1A1F71', fontSize: '1.5rem' }} />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src={FeriaImage} 
                alt="Feria Logo" 
                style={{ 
                  height: 'auto', 
                  maxHeight: '70px', 
                  width: 'auto', 
                  maxWidth: '100%',
                  filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.2))', 
                }} 
              />
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <img 
                src={Collab} 
                alt="Collab Logo" 
                style={{ 
                  height: 'auto', 
                  maxHeight: '60px', 
                  width: 'auto', 
                  maxWidth: '100%',
                  filter: 'grayscale(100%)', 
                }} 
              />
            </Grid>
          </Grid>
        </Toolbar>
      ) : ( // Si es pantalla mediana o más, usamos Container para alinear con HomePage
        <Container maxWidth="lg">
          <Toolbar sx={{ minHeight: '80px' }}>
            <Grid container alignItems="center" justifyContent="center" spacing={2}>
              <Grid item xs={4} sm={3} md={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    onClick={handleHomeClick} // Redirige al hacer clic en el ícono de la casita
                    sx={{
                      '&:hover': { backgroundColor: 'transparent', transform: 'scale(1.1)' },
                      transition: 'transform 0.3s ease, color 0.3s ease',
                    }}
                  >
                    <HomeIcon sx={{ color: '#1A1F71', fontSize: '2rem' }} />
                  </IconButton>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="map"
                    sx={{
                      '&:hover': { backgroundColor: 'transparent', transform: 'scale(1.1)' },
                      transition: 'transform 0.3s ease, color 0.3s ease',
                    }}
                  >
                    <MapIcon sx={{ color: '#1A1F71', fontSize: '2rem' }} />
                  </IconButton>
                </Box>
              </Grid>

              <Grid item xs={4} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <img 
                  src={FeriaImage} 
                  alt="Feria Logo" 
                  style={{ 
                    height: 'auto', 
                    maxHeight: '100px', 
                    width: 'auto', 
                    maxWidth: '100%',
                    filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.2))', 
                  }} 
                />
              </Grid>

              <Grid item xs={4} sm={3} md={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <img 
                  src={Collab} 
                  alt="Collab Logo" 
                  style={{ 
                    height: 'auto', 
                    maxHeight: '60px', 
                    width: 'auto', 
                    maxWidth: '100%',
                    filter: 'grayscale(100%)', 
                  }} 
                />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      )}
    </AppBar>
  );
}

export default Navbar;
