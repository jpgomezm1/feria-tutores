import { createTheme } from '@mui/material/styles';

const fondo = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/webp/Fondo%20p%C3%A1gina%20web-01.webp';

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
    fontFamily: 'Rethink Sans, Open Sans, sans-serif', // Definimos las fuentes globales
    h1: {
      fontSize: '2.5rem',
      fontWeight: 800, // Usamos el peso más bold disponible (800)
      color: '#1A1F71',
      fontFamily: 'Rethink Sans, sans-serif', // Aplicamos Rethink Sans en los encabezados
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600, // Puedes ajustar los pesos según lo necesites
      fontFamily: 'Rethink Sans, sans-serif',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400, // Peso regular para el texto del cuerpo
      fontFamily: 'Open Sans, sans-serif', // Usamos Open Sans para el cuerpo del texto
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 300, // Puedes usar un peso más ligero si lo necesitas
      fontFamily: 'Open Sans, sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${fondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          fontFamily: 'Rethink Sans, Open Sans, sans-serif', // Aplicamos la fuente globalmente
        },
      },
    },
  },
});

export default theme;
