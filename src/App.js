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
  // Cambia a false si deseas eliminar el loader para diagnóstico
  const [loading, setLoading] = useState(true);
  const Loader = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/loader-irrelevant.gif'; // Removido ?v=2 para simplificar caché

  // useEffect para el control de carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Tiempo reducido a 3 segundos

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, []); // Solo se ejecuta al cargar el componente

  // Si loading está activo, muestra el loader
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
