import React from 'react';
import { Box, Card, CardContent, Typography, Link, Stack } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface SupportLineSectionProps {
  className?: string;
}

export const SupportLineSection: React.FC<SupportLineSectionProps> = ({
  className
}) => {
  return (
    <Box className={className} sx={{ marginY: '3rem' }}>
      <Card
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          border: 'none',
          padding: '2.5rem',
        }}
      >
        <CardContent sx={{ padding: 0 }}>
          <Stack spacing={3}>
            <Box>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: '#5DADE2',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}
              >
                Sección 03
              </Typography>
              <Typography 
                variant="h3" 
                component="h2" 
                sx={{ 
                  color: '#001f6b',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  marginTop: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Línea directa – Soporte técnico
              </Typography>
            </Box>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#666666',
                lineHeight: 1.7,
                fontSize: '1rem',
              }}
            >
              Canal oficial para reportar incidencias técnicas del Portal de Proveedores. 
              Completa el formulario para recibir asistencia de nuestro equipo de soporte.
            </Typography>
            
            <Link
              href="https://forms.office.com/pages/responsepage.aspx?id=Gf1VBN_iKkOcHeYqWt25KQAfq2_sEu5HhCLUkIl9fBVUNU9GRjdDQ1pMWlg5RlhRUkhGUEhNRVRFMy4u&origin=lprLink"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: '#001f6b',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '1.25rem 1.5rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#e3f2fd',
                  borderColor: '#5DADE2',
                  transform: 'translateX(4px)',
                  textDecoration: 'none',
                },
              }}
            >
              <SupportAgentIcon sx={{ fontSize: '1.75rem', color: '#5DADE2' }} />
              <Box>
                <Typography 
                  component="span"
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '1rem',
                    display: 'block',
                    color: '#001f6b',
                  }}
                >
                  Formulario de soporte técnico
                </Typography>
                <Typography 
                  component="span"
                  sx={{ 
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    color: '#5DADE2',
                    marginTop: '2px',
                    display: 'block',
                  }}
                >
                  Microsoft Forms →
                </Typography>
              </Box>
            </Link>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};