import React from 'react';
import { Dialog, DialogContent, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



function MapDialog({ open, onClose }) {
  const mapUrl = 'https://storage.googleapis.com/comprobantes-madriguera/multimediaFeria/Feria%20mapa.svg';

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

      <DialogContent dividers>
        <img src={mapUrl} alt="Mapa de la Feria" style={{ width: '100%', borderRadius: '8px' }} />
      </DialogContent>
    </Dialog>
  );
}

export default MapDialog;
