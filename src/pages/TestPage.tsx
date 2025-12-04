import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const TestPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingY: '3rem' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1" sx={{ color: 'primary.main' }}>
          ✅ ¡FUNCIONA!
        </Typography>
        <Typography variant="h2" sx={{ marginY: '2rem' }}>
          Lineamientos para Proveedores
        </Typography>
        <Typography variant="body1" sx={{ marginY: '2rem' }}>
          Si ves esto, el servidor está corriendo correctamente.
        </Typography>
        <Box sx={{ 
          marginY: '3rem', 
          padding: '2rem', 
          backgroundColor: '#F0F4F8',
          borderRadius: '8px',
          border: '2px solid #003b70'
        }}>
          <Typography variant="body2">
            Colores corporativos: Azul #003b70
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default TestPage;
