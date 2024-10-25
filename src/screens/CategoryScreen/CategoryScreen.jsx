import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material'; // Ícono de varita mágica
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useParams, useNavigate } from 'react-router-dom'; 
import { useSwipeable } from 'react-swipeable'; 
import { motion } from 'framer-motion'; // Importamos Framer Motion para las animaciones
import data from '../../data/categories.json';

const categories = ['accesorios', 'cuidado', 'moda', 'postres', 'salado', 'hobbies'];

function CategoryScreen() {
  const { category } = useParams(); 
  const [categoryData, setCategoryData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false); 
  const [shuffledStores, setShuffledStores] = useState([]); // Estado para las tiendas mezcladas
  const [isShuffling, setIsShuffling] = useState(false); // Estado para controlar la animación de shuffle
  const navigate = useNavigate(); 

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
    if (!isTransitioning) {
      const selectedCategory = data.categories[category];
      setCategoryData(selectedCategory);
      setShuffledStores(selectedCategory.stores); // Inicialmente cargamos las tiendas sin mezclar
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

  const initiateTransition = (newCategoryPath) => {
    setIsTransitioning(true); 
    setTimeout(() => {
      navigate(newCategoryPath); 
      setIsTransitioning(false); 
    }, 500); 
  };

  // Función para mezclar el array de tiendas
  const shuffleStores = () => {
    setIsShuffling(true); // Inicia la animación de shuffle
    setTimeout(() => {
      const shuffled = [...shuffledStores].sort(() => Math.random() - 0.5); // Algoritmo de barajado simple
      setShuffledStores(shuffled); 
      setIsShuffling(false); // Finaliza la animación de shuffle
    }, 500); // Añadimos un pequeño retraso para que se vea la animación
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackMouse: true, 
  });

  if (!categoryData) {
    return <Typography variant="h4">Cargando...</Typography>;
  }

  const filteredStores = shuffledStores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container
      maxWidth="lg"
      {...handlers}
      sx={{
        opacity: isTransitioning ? 0 : 1, 
        transition: 'opacity 0.5s ease-in-out', 
        position: 'relative'
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
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between' }}>
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

        {/* Botón para mezclar las cards */}
        <motion.div
          whileTap={{ rotate: 360 }} // Animación de rotación cuando se hace clic
        >
          <IconButton onClick={shuffleStores} sx={{ ml: 2, color: 'white' }}>
            <AutoFixHighIcon fontSize="large" />
          </IconButton>
        </motion.div>
      </Box>

      {/* Tiendas de la categoría */}
      <Grid container spacing={4} sx={{ mb: 3 }}>
        {filteredStores.map((store, index) => (
          <Grid item xs={6} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} // Estado inicial de las cards
              animate={{ opacity: 1, scale: 1 }} // Estado animado de las cards
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay para hacer que aparezcan en cascada
            >
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CategoryScreen;
