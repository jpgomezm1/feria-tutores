import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, Typography, TextField, InputAdornment, IconButton, useMediaQuery } from '@mui/material';
import { Search } from '@mui/icons-material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useParams, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import data from '../../data/categories.json';

const categories = ['accesorios', 'cuidado', 'moda', 'postres', 'salado', 'hobbies'];

function CategoryScreen() {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shuffledStores, setShuffledStores] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');

  const phrases = [
    "¡Aquí está lo que quieres...!",
    "Descubre las tiendas...",
    "Apoya a los emprendedores..."
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
      setShuffledStores(selectedCategory.stores);
      window.scrollTo(0, 0);
    }
  }, [category, isTransitioning]);

  useEffect(() => {
    const hintTimeout = setTimeout(() => {
      setShowScrollHint(false);
    }, 5000);
    return () => clearTimeout(hintTimeout);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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

  const shuffleStores = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const shuffled = [...shuffledStores].sort(() => Math.random() - 0.5);
      setShuffledStores(shuffled);
      setIsShuffling(false);
    }, 500);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackMouse: true,
  });

  const hideScrollHint = () => {
    if (showScrollHint) setShowScrollHint(false);
  };

  if (!categoryData) {
    return <Typography variant="h4">Cargando...</Typography>;
  }

  const filteredStores = shuffledStores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Container
        maxWidth="lg"
        {...handlers}
        sx={{
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          position: 'relative'
        }}
        onClick={hideScrollHint}
        onTouchStart={hideScrollHint}
      >
        {showScrollHint && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10,
              color: 'black',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Muévete entre categorías
            </Typography>
            <img 
              src="https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/scroll-unscreen.gif" 
              alt="Scroll hint" 
              style={{ width: '80px', height: 'auto' }}
            />
          </Box>
        )}

        <Box sx={{ mt: 6, mb: 4 }}>
          <img 
            src={isMobile ? categoryData['banner-movil'] : categoryData.banner} 
            alt={`${category} banner`} 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>

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

          <IconButton onClick={shuffleStores} sx={{ ml: 2, color: 'white' }}>
            <AutoFixHighIcon fontSize="large" />
          </IconButton>
        </Box>

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
                onClick={(e) => {
                  if (showScrollHint) {
                    e.preventDefault();
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
    </div>
  );
}

export default CategoryScreen;
