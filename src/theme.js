import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#203251', // Color azul oscuro
    },
    secondary: {
      main: '#FFB300', // Color de acento
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Definimos Poppins como fuente global
    h1: {
      fontSize: '2.5rem',
      fontWeight: 800, // Usamos el peso más bold disponible (800)
      color: '#1A1F71',
      fontFamily: 'Poppins, sans-serif', // Aplicamos Poppins en los encabezados
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600, // Ajustamos el peso según sea necesario
      fontFamily: 'Poppins, sans-serif',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400, // Peso regular para el texto del cuerpo
      fontFamily: 'Poppins, sans-serif',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 300, // Peso más ligero
      fontFamily: 'Poppins, sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#373B83', // Color de fondo temporal
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          fontFamily: 'Poppins, sans-serif', // Aplicamos Poppins globalmente
        },
      },
    },
  },
});

export default theme;
