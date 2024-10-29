import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, IconButton, Box, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import feriaMapa from '../../assets/final-map.png'; // Importa la imagen del mapa desde assets

function MapDialog({ open, onClose }) {
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

  const handleHintClick = () => {
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
          color: 'white', // Cambia el color del icono a blanco para más visibilidad
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro semitransparente
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo más oscuro al pasar el ratón
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      {isMobile && showRotateHint && (
        <Box
          onClick={handleHintClick} // Evento de clic para ocultar el gesto
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
            cursor: 'pointer', // Cambia el cursor para indicar que es interactivo
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
        <img src={feriaMapa} alt="Mapa de la Feria" style={{ width: '100%', borderRadius: '8px' }} />
      </DialogContent>
    </Dialog>
  );
}

export default MapDialog;
