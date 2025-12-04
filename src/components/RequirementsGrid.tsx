import React from 'react';
import { Box, Grid, Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DocumentIcon from '@mui/icons-material/Description';
import SecurityIcon from '@mui/icons-material/Security';
import WorkflowIcon from '@mui/icons-material/AutoAwesome';
import InfoIcon from '@mui/icons-material/Info';

interface RequirementItem {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

interface RequirementsGridProps {
  requirements: RequirementItem[];
}

export const RequirementsGrid: React.FC<RequirementsGridProps> = ({
  requirements
}) => {
  return (
    <Box sx={{ marginY: '3rem' }}>
      <Grid container spacing={3}>
        {requirements.map((requirement, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: '#00c9ff',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, padding: 0 }}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {/* Icono circular con fondo */}
                  <Box 
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 201, 255, 0.15)',
                      flexShrink: 0,
                    }}
                  >
                    <Box sx={{ color: '#00c9ff' }}>
                      {requirement.icon}
                    </Box>
                  </Box>
                  <Typography 
                    variant="h4" 
                    component="h3"
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      lineHeight: 1.3,
                    }}
                  >
                    {requirement.title}
                  </Typography>
                </Box>
                
                {/* Línea horizontal */}
                <Box 
                  sx={{ 
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    marginBottom: '1.5rem',
                  }}
                />
                
                {/* Lista de items */}
                <List sx={{ padding: 0 }}>
                  {requirement.items.map((item, itemIndex) => (
                    <ListItem 
                      key={itemIndex}
                      sx={{ 
                        padding: '6px 0',
                        alignItems: 'flex-start',
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: '24px', marginTop: '6px' }}>
                        <FiberManualRecordIcon 
                          sx={{ 
                            fontSize: '0.5rem', 
                            color: '#00c9ff',
                          }} 
                        />
                      </ListItemIcon>
                      <ListItemText 
                        primary={item}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontWeight: 400,
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export const defaultRequirements: RequirementItem[] = [
  {
    icon: <DocumentIcon sx={{ fontSize: '2rem' }} />,
    title: 'Documentos Obligatorios',
    items: [
      'Factura digital y XML',
      'OC/OS aprobada',
      'Guía de remisión',
    ],
  },
  {
    icon: <SecurityIcon sx={{ fontSize: '2rem' }} />,
    title: 'Políticas y Cumplimiento',
    items: [
      'Revisar lineamientos internos',
      'Cumplimiento de estándares Tale',
      'Uso correcto de ticket S10',
    ],
  },
  {
    icon: <WorkflowIcon sx={{ fontSize: '2rem' }} />,
    title: 'Procesos Operativos',
    items: [
      'Estados de factura',
      'Validación de documentos',
      'Reglas de carga',
    ],
  },
  {
    icon: <InfoIcon sx={{ fontSize: '2rem' }} />,
    title: 'Consideraciones Importantes',
    items: [
      'No modificar información de tickets',
      'Usar correo habilitado por cliente',
      'Revisión de datos antes de subir archivos',
    ],
  },
];