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
  // Mantener loading en true para que cargue inicialmente el Loader
  const [loading, setLoading] = useState(true);
  const Loader = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/loader-irrelevant.gif?v=2';

  useEffect(() => {
    // `loading` se desactiva después de 3 segundos sin causar recargas repetitivas
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, []);  // Dependencia vacía para que se ejecute solo una vez

  // Mostrar el Loader solo durante la carga inicial
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
        <MainContent />
      </Router>
    </ThemeProvider>
  );
}

// Encapsula el contenido principal en un componente para mejorar el control del renderizado
const MainContent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categoria/:category" element={<CategoryScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
