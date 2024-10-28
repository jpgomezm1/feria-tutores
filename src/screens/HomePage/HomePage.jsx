import React, { useState } from 'react';
import { Container, Grid, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MapDialog from './MapDialog';

import desktopBanner from '../../assets/principal-pc.webp';
import mobileBanner from '../../assets/principal-celuar.webp';
import accesorios from '../../assets/cat-accesorios.webp';
import cuidado from '../../assets/cat-cuidado2.webp';
import moda from '../../assets/cat-moda2.webp';
import postres from '../../assets/Categoria nueva_Reposteria (1).webp';
import salado from '../../assets/cat-salados2.webp';
import hobbies from '../../assets/cat-hobbies2.webp';
import mapa2 from '../../assets/banner-mapa.webp';
import mouseIcon from '../../assets/icono-click (1).png';
import desktopInfoBanner from '../../assets/SECCION INFORMATIVA PC-01-01 (1).webp';
import mobileInfoBanner from '../../assets/Seccion informativa cel-01-01 (1).webp';

function HomePage() {
  // Detección de dispositivo móvil simplificada
  const isMobile = window.innerWidth <= 600;
  const navigate = useNavigate();

  // Estado para controlar la visibilidad de MapDialog
  const [isMapDialogOpen, setIsMapDialogOpen] = useState(false);


  const handleCategoryClick = (category) => {
    navigate(`/categoria/${category}`);
  };

  const openMapDialog = () => setIsMapDialogOpen(true);
  const closeMapDialog = () => setIsMapDialogOpen(false);


  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 2 }}>
      {/* Banner principal único */}
      <Box sx={{ mb: 4 }}>
        <img
          src={isMobile ? mobileBanner : desktopBanner}
          alt="Banner Tutores"
          loading="lazy" // Carga diferida
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </Box>

      {/* Sección principal con categorías y banner único */}
      <Grid container spacing={4}>
        {/* Columna izquierda: Categorías */}
        <Grid item xs={12} md={8}>
          {/* Reemplazamos el texto de Categorías con la imagen */}
          <Box sx={{ mb: 2 }}>
            <img 
              src="https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/CATEGORIAS%20TEXTO-07.png?v=1"
              alt="Categorías"
              loading="lazy" // Carga diferida
              style={{ width: '37%', height: 'auto' }}
            />
          </Box>

          <Grid container spacing={2}>
            {/* Tarjetas de categorías con carga diferida */}
            <Grid item xs={6} sm={4}>
              <Box 
                sx={{
                  overflow: 'hidden', 
                  borderRadius: '8px', 
                  cursor: 'pointer'
                }}
                onClick={() => handleCategoryClick('accesorios')}
              >
                <img 
                  src={accesorios}
                  alt="Accesorios"
                  loading="lazy"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Box>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Box 
                sx={{
                  overflow: 'hidden', 
                  borderRadius: '8px', 
                  cursor: 'pointer'
                }}
                onClick={() => handleCategoryClick('cuidado')}
              >
                <img 
                  src={cuidado} 
                  alt="Cuidado"
                  loading="lazy"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Box>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Box 
                sx={{
                  overflow: 'hidden', 
                  borderRadius: '8px', 
                  cursor: 'pointer'
                }}
                onClick={() => handleCategoryClick('moda')}
              >
                <img 
                  src={moda}
                  alt="Moda"
                  loading="lazy"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Box>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Box 
                sx={{
                  overflow: 'hidden', 
                  borderRadius: '8px', 
                  cursor: 'pointer'
                }}
                onClick={() => handleCategoryClick('postres')}
              >
                <img 
                  src={postres} 
                  alt="Postres"
                  loading="lazy"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Box>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Box 
                sx={{
                  overflow: 'hidden', 
                  borderRadius: '8px', 
                  cursor: 'pointer'
                }}
                onClick={() => handleCategoryClick('salado')}
              >
                <img 
                  src={salado} 
                  alt="Salado"
                  loading="lazy"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Box>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Box 
                sx={{
                  overflow: 'hidden', 
                  borderRadius: '8px', 
                  cursor: 'pointer'
                }}
                onClick={() => handleCategoryClick('hobbies')}
              >
                <img 
                  src={hobbies} 
                  alt="Hobbies"
                  loading="lazy"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Columna derecha: Banner único con botón y animación del mouse */}
        <Grid item xs={12} md={4}>
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <img 
              src={mapa2}
              alt="Mapa de la feria"
              loading="lazy"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={openMapDialog}
              sx={{
                textTransform: 'none',
                position: 'absolute',
                bottom: '60px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#1A1F71',
                color: '#fff',
                padding: '10px 20px',
                minWidth: '250px',
                borderRadius: '22px',
                fontWeight: 'bold'
              }}
            >
              Descubre el mapa de la feria
            </Button>
            <Box 
              component="img" 
              src={mouseIcon} 
              alt="Ícono del mouse" 
              loading="lazy"
              sx={{
                position: 'absolute',
                bottom: '32px',
                right: '45px',
                height: '40px',
                width: '40px',
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Renderizamos MapDialog con propiedades de apertura y cierre */}
      <MapDialog open={isMapDialogOpen} onClose={closeMapDialog} />

      {/* Nueva sección de banner al final */}
      <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        <img 
          src={isMobile ? mobileInfoBanner : desktopInfoBanner}
          alt="Sección Informativa"
          loading="lazy"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </Box>
    </Container>
  );
}

export default HomePage;
