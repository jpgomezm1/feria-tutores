import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, IconButton, Box, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function MapDialog({ open, onClose }) {
  const mapUrl = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/Feria%20mapa.svg';
  const isMobile = useMediaQuery('(max-width:600px)');
  const [showRotateHint, setShowRotateHint] = useState(true);

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.innerWidth > window.innerHeight) {
        setShowRotateHint(false);
      } else {
        setShowRotateHint(true);
      }
    };

    if (open && isMobile) {
      window.addEventListener('resize', handleOrientationChange);
      handleOrientationChange();
    }

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, [open, isMobile]);

  const handleClickToShowMap = () => {
    setShowRotateHint(false);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'white', // Color blanco para mejor visibilidad
          bgcolor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente para contraste
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.7)', // Acentuar el fondo en hover
          },
          zIndex: 11, // Asegurar que esté al frente
          fontSize: '1.5rem' // Tamaño del icono
        }}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>

      {isMobile && showRotateHint && (
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
          onClick={handleClickToShowMap}
        >
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            Gira tu pantalla para ver el mapa
          </Typography>
          <img
            src="https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/Feria%20mapa-01-Ready.webp"
            alt="Rotate hint"
            style={{ width: '80px', height: 'auto' }}
          />
          <Typography variant="body2" sx={{ mt: 2 }}>
            O toca aquí para verlo en pequeño
          </Typography>
        </Box>
      )}

      <DialogContent dividers>
        <img src={mapUrl} alt="Mapa de la Feria" style={{ width: '100%', borderRadius: '8px' }} />
      </DialogContent>
    </Dialog>
  );
}

export default MapDialog;
