import React from 'react'; 
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Instagram, WhatsApp, Language } from '@mui/icons-material';
import IrrenegroLogo from '../../assets/devby.png';
import NavbarTexture from '../../assets/textura.png';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(255,255,255,0.9)',
        backgroundImage: `url(${NavbarTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '0.5rem 0',  // Reducimos padding para disminuir altura del footer
        borderTop: '1px solid #ddd',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={1} justifyContent="center" alignItems="center">  {/* Reducimos spacing entre los elementos */}
          {/* Logo */}
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
            <Link href="https://www.irrelevant-club.com/" target="_blank" sx={{ '&:hover': { opacity: 0.8 } }}>
              <img
                src={IrrenegroLogo}
                alt="Irrenegro Logo"
                style={{ height: 'auto', maxHeight: '30px', width: 'auto', maxWidth: '100%', cursor: 'pointer', transition: 'opacity 0.3s ease' }} // Hover effect añadido
              />
            </Link>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mb: 0.5 }}> {/* Menos margen abajo */}
            <Link href="https://www.instagram.com/irrelevantclub.co/" target="_blank" sx={{ mx: 0.5, '&:hover': { color: '#E1306C' } }}>
              <Instagram sx={{ fontSize: '1.8rem', color: '#1A1F71', transition: 'color 0.3s ease' }} />
            </Link>
            <Link href="https://wa.me/573001336332" target="_blank" sx={{ mx: 0.5, '&:hover': { color: '#25D366' } }}>
              <WhatsApp sx={{ fontSize: '1.8rem', color: '#1A1F71', transition: 'color 0.3s ease' }} />
            </Link>
            <Link href="https://www.irrelevant-club.com/" target="_blank" sx={{ mx: 0.5, '&:hover': { color: '#1A1F71' } }}>
              <Language sx={{ fontSize: '1.8rem', color: '#1A1F71', transition: 'color 0.3s ease' }} />
            </Link>
          </Grid>

          {/* Call-to-action with link */}
          <Grid item xs={12}>
            <Typography variant="body2"  sx={{ fontSize: '0.85rem', lineHeight: '1.2', color: '#5E55FE'}}> {/* Ajustamos el line-height para menos espacio vertical */}
              <i>
              ¿Listo para hacer llevar  tu negocio al siguiente nivel?{' '}
                <Link href="https://calendly.com/zeendr/conoce-irrelevant?month=2024-10" target="_blank" underline="hover" >
                ¡Agenda una cita y hagámoslo realidad!
                </Link>
              </i>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
