import React from 'react';
import { Container, Grid, Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redireccionar

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detecta si es pantalla pequeña (sm o menor)
  const navigate = useNavigate(); // Usamos useNavigate para redirigir al usuario

  const handleCategoryClick = (category) => {
    navigate(`/categoria/${category}`); // Redirige a la categoría correspondiente
  };

  const btutores = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/banner2irr.png';
  const bannercel1 = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/bannercel2.png';

  const accesorios = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/accesorios.webp';
  const cuidado = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/cuiado.webp';
  const moda = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/moda.webp';
  const postres = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/postres.webp';
  const salado = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/salados.webp';
  const hobbies = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/hobbies.webp';

  const mapa2 = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/mapa2.png';
  const mouseIcon = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/icono-click.png';

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 2 }}>
      {/* Banner principal superior */}
      <Box sx={{ mb: 4 }}>
        <img 
          src={isMobile ? bannercel1 : btutores} // Cambia el banner según el tamaño de la pantalla
          alt="Banner Tutores" 
          style={{ 
            width: '100%', 
            height: 'auto',
            borderRadius: '8px', // Para dar bordes redondeados si lo deseas
          }}
        />
      </Box>

      {/* Sección principal con categorías y banner único */}
      <Grid container spacing={4}>
        {/* Columna izquierda: Categorías */}
        <Grid item xs={12} md={8}>
          <Box sx={{ backgroundColor: '#f0f0f0', padding: 2, borderRadius: '8px' }}>
            <Typography variant='h1' sx={{ marginBottom: 2, color: '#203251' }}>
              Categorías
            </Typography>
            <Grid container spacing={2}>
              {/* Tarjeta de Accesorios */}
              <Grid item xs={6} sm={4}>
                <Box 
                  sx={{
                    overflow: 'hidden', 
                    borderRadius: '8px', 
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                    '&:hover': {
                      transform: 'scale(1.05)', // Aumenta ligeramente el tamaño
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Añade una sombra
                    },
                    cursor: 'pointer' // Cambiamos el cursor a pointer
                  }}
                  onClick={() => handleCategoryClick('accesorios')} // Redirige a la categoría accesorios
                >
                  <img 
                    src={accesorios}
                    alt="Accesorios"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Box>
              </Grid>

              {/* Tarjeta de Cuidado */}
              <Grid item xs={6} sm={4}>
                <Box 
                  sx={{
                    overflow: 'hidden', 
                    borderRadius: '8px', 
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                    cursor: 'pointer'
                  }}
                  onClick={() => handleCategoryClick('cuidado')} // Redirige a la categoría cuidado
                >
                  <img 
                    src={cuidado} 
                    alt="Cuidado"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Box>
              </Grid>

              {/* Tarjeta de Moda */}
              <Grid item xs={6} sm={4}>
                <Box 
                  sx={{
                    overflow: 'hidden', 
                    borderRadius: '8px', 
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                    cursor: 'pointer'
                  }}
                  onClick={() => handleCategoryClick('moda')} // Redirige a la categoría moda
                >
                  <img 
                    src={moda}
                    alt="Moda"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Box>
              </Grid>

              {/* Tarjeta de Postres */}
              <Grid item xs={6} sm={4}>
                <Box 
                  sx={{
                    overflow: 'hidden', 
                    borderRadius: '8px', 
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                    cursor: 'pointer'
                  }}
                  onClick={() => handleCategoryClick('postres')} // Redirige a la categoría postres
                >
                  <img 
                    src={postres} 
                    alt="Postres"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Box>
              </Grid>

              {/* Tarjeta de Salado */}
              <Grid item xs={6} sm={4}>
                <Box 
                  sx={{
                    overflow: 'hidden', 
                    borderRadius: '8px', 
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                    cursor: 'pointer'
                  }}
                  onClick={() => handleCategoryClick('salado')} // Redirige a la categoría salado
                >
                  <img 
                    src={salado} 
                    alt="Salado"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Box>
              </Grid>

              {/* Tarjeta de Hobbies */}
              <Grid item xs={6} sm={4}>
                <Box 
                  sx={{
                    overflow: 'hidden', 
                    borderRadius: '8px', 
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                    cursor: 'pointer'
                  }}
                  onClick={() => handleCategoryClick('hobbies')} // Redirige a la categoría hobbies
                >
                  <img 
                    src={hobbies} 
                    alt="Hobbies"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Columna derecha: Banner único con botón y animación del mouse */}
        <Grid item xs={12} md={4}>
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <img 
              src={mapa2}
              alt="Mapa de la feria"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <Button 
              variant="contained" 
              color="primary" 
              sx={{
                textTransform: 'none',
                position: 'absolute',
                bottom: '60px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#1A1F71',
                color: '#fff',
                borderRadius: '8px',
                padding: '10px 20px',
                minWidth: '250px',
                borderRadius: '22px',
              }}
            >
              Descubre el mapa de la feria
            </Button>
            {/* Ícono de mouse posicionado en la parte inferior derecha del botón */}
            <Box 
              component="img" 
              src={mouseIcon} 
              alt="Ícono del mouse" 
              sx={{
                position: 'absolute',
                bottom: '32px', // Ajustamos la posición del ícono cerca del botón
                right: '45px', // Movemos el ícono a la esquina inferior derecha
                height: '40px',
                width: '40px',
                animation: 'bounce 2s infinite', // Añadimos la animación de rebote
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Estilo para la animación de rebote */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </Container>
  );
}

export default HomePage;
