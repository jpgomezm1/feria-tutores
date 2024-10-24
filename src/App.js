import React, { useState, useEffect, lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar/Navbar';

// Lazy load components
const HomePage = lazy(() => import('./screens/HomePage/HomePage'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const CategoryScreen = lazy(() => import('./screens/CategoryScreen/CategoryScreen'));

function App() {
  const [loading, setLoading] = useState(true);
  const Loader = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/loader-irrelevant.gif';

  useEffect(() => {
    // Timeout para simular un tiempo de carga de 2.5 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categoria/:category" element={<CategoryScreen />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
