import React from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Importa la imagen desde la carpeta 'assets'
import feriaMapa from '../../assets/Mapa-ultimo.svg';

function MapDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'white',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.7)',
          },
          zIndex: 11,
          fontSize: '1.5rem',
        }}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>

      <DialogContent dividers>
        <img src={feriaMapa} alt="Mapa de la Feria" style={{ width: '100%', borderRadius: '8px' }} />
      </DialogContent>
    </Dialog>
  );
}

export default MapDialog;
