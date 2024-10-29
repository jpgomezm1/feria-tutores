import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Grid, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MapDialog from '../../screens/HomePage/MapDialog';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const [isMapDialogOpen, setIsMapDialogOpen] = useState(false); // Estado para controlar el diálogo

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleMapClick = () => {
    setIsMapDialogOpen(true);
  };

  const handleCloseMapDialog = () => {
    setIsMapDialogOpen(false);
  };

  const NavbarTexture = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/FOOTERS%20WEBP_PC.webp';
  const FeriaImage = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/feria-tutores-removebg-preview.png';
  const Collab = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/match.png';

  return (
    <>
      <AppBar 
        position="sticky"
        sx={{ 
          backgroundColor: 'rgba(255,255,255,0.9)', 
          boxShadow: 'none', 
          top: 0,
          zIndex: theme.zIndex.appBar,
          height: { xs: '70px', sm: '80px' }, 
          backgroundImage: `url(${NavbarTexture})`, // Corregido
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }}
      >
        {isMobile ? (
          <Toolbar sx={{ minHeight: '70px' }}>
            <Grid container alignItems="center" justifyContent="center" spacing={2}>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    onClick={handleHomeClick}
                    sx={{
                      '&:hover': { backgroundColor: 'transparent', transform: 'scale(1.1)' },
                      transition: 'transform 0.3s ease, color 0.3s ease',
                    }}
                  >
                    <img 
                      src="https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/home-unscreen.gif" 
                      alt="Home Icon" 
                      style={{ width: '40px', height: '40px' }} 
                    />
                  </IconButton>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="map"
                    onClick={handleMapClick}
                    sx={{
                      '&:hover': { backgroundColor: 'transparent', transform: 'scale(1.1)' },
                      transition: 'transform 0.3s ease, color 0.3s ease',
                    }}
                  >
                    <img 
                      src="https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/maps-unscreen.gif" 
                      alt="Map Icon" 
                      style={{ width: '40px', height: '40px' }} 
                    />
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
        ) : (
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
                      onClick={handleHomeClick}
                      sx={{
                        '&:hover': { backgroundColor: 'transparent', transform: 'scale(1.1)' },
                        transition: 'transform 0.3s ease, color 0.3s ease',
                      }}
                    >
                      <img 
                        src="https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/home-unscreen.gif" 
                        alt="Home Icon" 
                        style={{ width: '40px', height: '40px' }} 
                      />
                    </IconButton>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="map"
                      onClick={handleMapClick}
                      sx={{
                        '&:hover': { backgroundColor: 'transparent', transform: 'scale(1.1)' },
                        transition: 'transform 0.3s ease, color 0.3s ease',
                      }}
                    >
                      <img 
                        src="https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/maps-unscreen.gif" 
                        alt="Map Icon" 
                        style={{ width: '40px', height: '40px' }} 
                      />
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

      <MapDialog open={isMapDialogOpen} onClose={handleCloseMapDialog} />
    </>
  );
}

export default Navbar;
