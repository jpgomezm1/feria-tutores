import 'intersection-observer'; // Polyfill para mejorar compatibilidad en Safari
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar/Navbar';
import HomePage from './screens/HomePage/HomePage';
import CategoryScreen from './screens/CategoryScreen/CategoryScreen';
import Footer from './components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  // Cache busting query string para evitar problemas de cache
  const Loader = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/loader-irrelevant.gif?v=1';

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Cambiado a 4000 ms para mostrar el loader durante 4 segundos

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#fff',
        }}
      >
        <img src={Loader} alt="Cargando..." style={{ width: '500px', height: '500px' }} />
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categoria/:category" element={<CategoryScreen />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
