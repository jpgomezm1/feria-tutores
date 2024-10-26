import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, IconButton, Box, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function MapDialog({ open, onClose }) {
  const mapUrl = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/Feria%20mapa%20ready.svgz';
  const isMobile = useMediaQuery('(max-width:600px)');
  const [showRotateHint, setShowRotateHint] = useState(true);

  useEffect(() => {
    const handleOrientationChange = () => {
      // Detecta si la pantalla está en modo paisaje
      if (window.innerWidth > window.innerHeight) {
        setShowRotateHint(false); // Oculta el mensaje cuando la pantalla está en modo horizontal
      } else {
        setShowRotateHint(true); // Muestra el mensaje cuando la pantalla está en modo vertical
      }
    };

    if (open && isMobile) {
      // Añade el event listener al abrir el diálogo en un dispositivo móvil
      window.addEventListener('resize', handleOrientationChange);
      handleOrientationChange(); // Verifica la orientación inicial
    }

    return () => {
      // Limpia el event listener al cerrar el diálogo
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, [open, isMobile]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
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
        >
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            Gira tu pantalla para ver el mapa
          </Typography>
          <img
            src="https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/phone-rotate-unscreen.gif"
            alt="Rotate hint"
            style={{ width: '80px', height: 'auto' }}
          />
        </Box>
      )}

      <DialogContent dividers>
        <img src={mapUrl} alt="Mapa de la Feria" style={{ width: '100%', borderRadius: '8px' }} />
      </DialogContent>
    </Dialog>
  );
}

export default MapDialog;
