import React from 'react';
import { Box, Card, CardContent, Typography, Button, Stack, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaunchIcon from '@mui/icons-material/Launch';

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface SupportAndContactSectionProps {
  title?: string;
  description?: string;
  contacts: ContactInfo[];
  primaryButtonLabel?: string;
  primaryButtonUrl?: string;
}

export const SupportAndContactSection: React.FC<SupportAndContactSectionProps> = ({
  title = "Soporte y Contacto",
  description = "Si tienes dudas adicionales o necesitas asistencia, no dudes en ponerte en contacto con nosotros a través de los siguientes canales:",
  contacts,
  primaryButtonLabel = "Ir al Portal de Proveedores",
  primaryButtonUrl = "https://portal.taleinmobiliaria.com/suppliers"
}) => {
  const handlePortalClick = () => {
    if (primaryButtonUrl) {
      window.open(primaryButtonUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Box sx={{ marginY: '5rem' }}>
      <Card
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
          border: 'none',
          overflow: 'hidden',
        }}
      >
        <CardContent sx={{ padding: '4rem 3rem' }}>
          <Stack spacing={4}>
            {/* Encabezado */}
            <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
              <Typography 
                variant="h3" 
                component="h2" 
                sx={{ 
                  color: '#001f6b',
                  fontWeight: 700,
                  fontSize: '2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1rem',
                }}
              >
                {title}
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#666666',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  maxWidth: '700px',
                  margin: '0 auto',
                }}
              >
                {description}
              </Typography>
            </Box>
            
            {/* Información de contacto */}
            <Grid container spacing={3} sx={{ marginBottom: '2rem' }}>
              {contacts.map((contact, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '2rem 1.5rem',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '16px',
                      border: '2px solid transparent',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      '&:hover': {
                        backgroundColor: '#e3f2fd',
                        borderColor: '#5DADE2',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 20px rgba(93, 173, 226, 0.2)',
                      },
                    }}
                  >
                    <Box 
                      sx={{ 
                        color: '#5DADE2', 
                        marginBottom: '1rem',
                        fontSize: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(93, 173, 226, 0.1)',
                      }}
                    >
                      {contact.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#001f6b',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                        textAlign: 'center',
                        fontSize: '1.125rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {contact.label}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#555555',
                        textAlign: 'center',
                        fontSize: '1rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {contact.value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            
            {/* Botón principal */}
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '1rem' }}>
              <Button
                variant="contained"
                size="large"
                onClick={handlePortalClick}
                endIcon={<LaunchIcon />}
                sx={{
                  backgroundColor: '#5DADE2',
                  color: 'white',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  padding: '1.25rem 3rem',
                  borderRadius: '12px',
                  boxShadow: '0 6px 20px rgba(93, 173, 226, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#3498db',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 30px rgba(93, 173, 226, 0.4)',
                  },
                }}
              >
                {primaryButtonLabel}
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

// Datos por defecto para la información de contacto
export const defaultContactInfo: ContactInfo[] = [
  {
    icon: <EmailIcon sx={{ fontSize: '2rem' }} />,
    label: 'Soporte Técnico',
    value: 'soporte@taleinmobiliaria.com',
  },
  {
    icon: <EmailIcon sx={{ fontSize: '2rem' }} />,
    label: 'Administración / Pagos',
    value: 'administracion@taleinmobiliaria.com',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: '2rem' }} />,
    label: 'Horario de Atención',
    value: 'Lun–Vie, 9:00–18:00',
  },
];