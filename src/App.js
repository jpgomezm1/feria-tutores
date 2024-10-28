import 'intersection-observer'; // Polyfill para mejorar compatibilidad en Safari
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambié a BrowserRouter
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar/Navbar';
import HomePage from './screens/HomePage/HomePage';
import CategoryScreen from './screens/CategoryScreen/CategoryScreen';
import Footer from './components/Footer/Footer';

function App() {
  // Prueba: Desactiva el loader para verificar si es la causa
  const [loading, setLoading] = useState(false); // Cambié a false temporalmente
  const Loader = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/loader-irrelevant.gif?v=2';

  useEffect(() => {
    if (loading) {  // Solo activa el temporizador si loading es true
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000); 

      return () => clearTimeout(timer); // Limpieza del temporizador
    }
  }, [loading]); // Dependencia `loading`

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
