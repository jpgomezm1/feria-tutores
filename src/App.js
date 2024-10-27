import 'intersection-observer'; // Polyfill para mejorar compatibilidad en Safari
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar/Navbar';
import HomePage from './screens/HomePage/HomePage';
import CategoryScreen from './screens/CategoryScreen/CategoryScreen';
import Footer from './components/Footer/Footer';

function App() {
  // Para pruebas, cambia a false para verificar si el loader es la causa del problema
  const [loading, setLoading] = useState(true);
  const Loader = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/loader-irrelevant.gif?v=2'; // Cambié la versión para forzar cache-busting

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Tiempo reducido a 3 segundos

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, []); // Sin dependencias para evitar ciclo de renderización

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
