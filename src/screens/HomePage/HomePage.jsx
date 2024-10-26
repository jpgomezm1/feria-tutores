import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redireccionar

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detecta si es pantalla pequeña (sm o menor)
  const navigate = useNavigate(); // Usamos useNavigate para redirigir al usuario

  // Imágenes de banners para rotar (agregamos un parámetro de cache busting)
  const desktopBanners = [
    'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/irrelevant-pc2.webp?v=1',
    'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/principal-pc.webp?v=1',
    'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/principal-pc.webp?v=1'
  ];

  const mobileBanners = [
    'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/irrelevant-celular2.webp?v=1',
    'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/principal-celuar.webp?v=1',
    'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/principal-celuar.webp?v=1'
  ];

  // Estado para controlar el índice del banner actual
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Cambiar banner cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % desktopBanners.length);
    }, 5000); // Cambia cada 10 segundos
    return () => clearInterval(interval); // Limpia el intervalo cuando se desmonta el componente
  }, [desktopBanners.length]);

  // Maneja el banner a mostrar según el tamaño de la pantalla
  const currentBanner = isMobile ? mobileBanners[currentBannerIndex] : desktopBanners[currentBannerIndex];

  const handleCategoryClick = (category) => {
    navigate(`/categoria/${category}`); // Redirige a la categoría correspondiente
  };

  // Imágenes de categorías con cache busting
  const accesorios = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/cat-accesorios.webp?v=1';
  const cuidado = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/cat-cuidado2.webp?v=1';
  const moda = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/cat-moda2.webp?v=1';
  const postres = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/cat-dulces.webp?v=1';
  const salado = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/cat-salados2.webp?v=1';
  const hobbies = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/cat-hobbies2.webp?v=1';

  const mapa2 = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/Banner%20mapa%20nuevo%20wepb_Mesa%20de%20trabajo%201.webp?v=1';
  const mouseIcon = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/icono-click.png?v=1';

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 2 }}>
      {/* Banner principal superior con cambio automático */}
      <Box sx={{ mb: 4 }}>
        <img 
          src={currentBanner} // Cambia el banner dinámicamente cada 10 segundos
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
          {/* Reemplazamos el texto de Categorías con la imagen */}
          <Box sx={{ mb: 2 }}>
            <img 
              src="https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/CATEGORIAS%20TEXTO-07.png?v=1"
              alt="Categorías"
              style={{ width: '37%', height: 'auto' }}
            />
          </Box>

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
