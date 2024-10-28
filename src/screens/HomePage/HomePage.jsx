import React, { useState } from 'react';
import { Container, Grid, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MapDialog from './MapDialog';

function HomePage() {
  // Detección de dispositivo móvil simplificada
  const isMobile = window.innerWidth <= 600;
  const navigate = useNavigate();

  // Estado para controlar la visibilidad de MapDialog
  const [isMapDialogOpen, setIsMapDialogOpen] = useState(false);

  // Banner único para PC y móvil
  const desktopBanner = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/principal-pc.webp?v=1';
  const mobileBanner = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/principal-celuar.webp?v=1';

  const handleCategoryClick = (category) => {
    navigate(`/categoria/${category}`);
  };

  const openMapDialog = () => setIsMapDialogOpen(true);
  const closeMapDialog = () => setIsMapDialogOpen(false);

  const accesorios = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/cat-accesorios.webp?v=1';
  const cuidado = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/cat-cuidado2.webp?v=1';
  const moda = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/cat-moda2.webp?v=1';
  const postres = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/Categoria%20nueva_Reposteria.webp';
  const salado = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/cat-salados2.webp?v=1';
  const hobbies = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/cat-hobbies2.webp?v=1';

  const mapa2 = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/Banner%20mapa%20nuevo%20wepb_Mesa%20de%20trabajo%201.webp?v=1';
  const mouseIcon = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/icono-click.png?v=1';

  // Banners adicionales según el tamaño de pantalla
  const desktopInfoBanner = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/SECCION%20INFORMATIVA%20PC-01-01.webp';
  const mobileInfoBanner = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/Seccion%20informativa%20cel-01-01.webp';

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
