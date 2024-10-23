import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar/Navbar';
import HomePage from './screens/HomePage/HomePage';
import Footer from './components/Footer/Footer';  // Importamos el Footer
import CategoryScreen from './screens/CategoryScreen/CategoryScreen';
import Loader from './assets/loader-irrelevant.gif';  // Importamos el gif del loader

function App() {
  const [loading, setLoading] = useState(true); // Estado para manejar el loader

  useEffect(() => {
    // Oculta el loader después de 3 segundos
    const timer = setTimeout(() => {
      setLoading(false); // Ocultar el loader
    }, 2500); // 3000 ms = 3 segundos

    return () => clearTimeout(timer); // Limpiamos el timer si el componente se desmonta
  }, []);

  if (loading) {
    // Si estamos cargando, mostramos el loader
    return (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Ocupa toda la pantalla
          backgroundColor: '#fff', // Color de fondo mientras carga
        }}
      >
        <img src={Loader} alt="Cargando..." style={{ width: '500px', height: '500px' }} />
      </div>
    );
  }

  // Una vez que se oculta el loader, mostramos el contenido de la app
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          {/* Ruta principal para la página de inicio */}
          <Route path="/" element={<HomePage />} />
          
          {/* Ruta dinámica para cada categoría */}
          <Route path="/categoria/:category" element={<CategoryScreen />} />
        </Routes>
        <Footer />  {/* El Footer se mantiene visible en todas las rutas */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
