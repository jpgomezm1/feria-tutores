import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, Typography, TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom'; // Ahora usamos useNavigate
import { useSwipeable } from 'react-swipeable'; // Importamos react-swipeable
import data from '../../data/categories.json';

const categories = ['accesorios', 'cuidado', 'moda', 'postres', 'salado', 'hobbies']; // Array con las categorías

function CategoryScreen() {
  const { category } = useParams(); // Obtenemos la categoría actual desde la URL
  const [categoryData, setCategoryData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false); // Estado para la transición de salida
  const navigate = useNavigate(); // Para navegar entre categorías
  
  const phrases = [
    "¡Aquí está lo que realmente quieres...!",
    "Descubre tiendas que te van a volar la cabeza...",
    "Apoya a los emprendedores que están cambiando las reglas..."
  ];

  const [currentPhrase, setCurrentPhrase] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullPhrase = phrases[i];

      setCurrentPhrase(isDeleting
        ? fullPhrase.substring(0, currentPhrase.length - 1)
        : fullPhrase.substring(0, currentPhrase.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && currentPhrase === fullPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentPhrase === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentPhrase, isDeleting, loopNum, typingSpeed, phrases]);

  useEffect(() => {
    // Cargamos la información de la categoría desde el JSON cuando no está en transición
    if (!isTransitioning) {
      const selectedCategory = data.categories[category];
      setCategoryData(selectedCategory);
    }
  }, [category, isTransitioning]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Función para cambiar de categoría cuando se hace un swipe
  const handleSwipe = (direction) => {
    const currentIndex = categories.indexOf(category);
    
    if (direction === 'left' && currentIndex < categories.length - 1) {
      initiateTransition(`/categoria/${categories[currentIndex + 1]}`);
    } else if (direction === 'right' && currentIndex > 0) {
      initiateTransition(`/categoria/${categories[currentIndex - 1]}`);
    }
  };

  // Función que inicia la transición de salida y navega a la nueva categoría
  const initiateTransition = (newCategoryPath) => {
    setIsTransitioning(true); // Inicia el fade-out
    setTimeout(() => {
      navigate(newCategoryPath); // Navega a la nueva categoría después del fade-out
      setIsTransitioning(false); // Reactiva el fade-in cuando se cargue la nueva categoría
    }, 500); // Duración del fade-out
  };

  // Configuración del swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackMouse: true, // También detecta gestos con el mouse
  });

  if (!categoryData) {
    return <Typography variant="h4">Cargando...</Typography>;
  }

  const filteredStores = categoryData.stores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container
      maxWidth="lg"
      {...handlers}
      sx={{
        opacity: isTransitioning ? 0 : 1, // Controla el fade-in y fade-out
        transition: 'opacity 0.5s ease-in-out', // Aplica la transición de opacidad
      }}
    >
      {/* Banner de la categoría */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <img 
          src={categoryData.banner} 
          alt={`${category} banner`} 
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>

      {/* Barra de búsqueda */}
      <Box sx={{ mb: 4 }}>
        <TextField
          variant="outlined"
          placeholder={currentPhrase}
          value={searchTerm}
          onChange={handleSearch}
          fullWidth
          sx={{
            backgroundColor: 'white',
            borderRadius: '50px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Tiendas de la categoría */}
      <Grid container spacing={4} sx={{ mb: 3 }}>
        {filteredStores.map((store, index) => (
          <Grid item xs={6} sm={6} md={4} key={index}>
            <Box 
              sx={{
                overflow: 'hidden', 
                borderRadius: '8px', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                '&:hover': {
                  transform: 'scale(1.05)', 
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }
              }}
            >
              <a href={store.url} target="_blank" rel="noopener noreferrer">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  style={{ width: '100%', borderRadius: '8px' }} 
                />
              </a>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CategoryScreen;
