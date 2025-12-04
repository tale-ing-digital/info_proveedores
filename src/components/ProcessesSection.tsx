import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

interface ProcessData {
  title: string;
  steps: string[];
}

interface ProcessesSectionProps {
  processes: ProcessData[];
}

export const ProcessesSection: React.FC<ProcessesSectionProps> = ({
  processes
}) => {
  return (
    <Box sx={{ marginY: '4rem' }}>
      <Grid container spacing={3}>
        {processes.map((process, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card 
              sx={{ 
                height: '100%',
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
              <CardContent sx={{ padding: 0 }}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  sx={{ 
                    marginBottom: '1.5rem', 
                    color: '#ffffff',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontSize: '1rem',
                  }}
                >
                  {process.title}
                </Typography>
                
                {/* Línea horizontal */}
                <Box 
                  sx={{ 
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    marginBottom: '1.5rem',
                  }}
                />
                
                <List sx={{ padding: 0 }}>
                  {process.steps.map((step, stepIndex) => (
                    <ListItem 
                      key={stepIndex}
                      sx={{ 
                        padding: '6px 0',
                        alignItems: 'flex-start',
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: '32px', marginTop: '4px' }}>
                        <RadioButtonUncheckedIcon 
                          sx={{ 
                            color: '#00c9ff', 
                            fontSize: '1.125rem'
                          }} 
                        />
                      </ListItemIcon>
                      <ListItemText 
                        primary={step}
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

export const defaultProcesses: ProcessData[] = [
  {
    title: 'Acceso y habilitación',
    steps: [
      'El acceso lo otorga tu cliente (Compras / Administración).',
      'El correo de bienvenida se envía automáticamente tras generar el primer ticket.',
      'Si una empresa no aparece o desaparece: tu cliente debe actualizar tu correo.',
    ],
  },
  {
    title: 'Facturación y carga de documentos',
    steps: [
      'Debes subir factura digital + XML + OC/OS + documentos de respaldo.',
      'Revisa que el ticket S10 sea correcto y vigente.',
      'Estados visibles: Registrada, Aprobada, Observada, Rechazada.',
    ],
  },
  {
    title: 'Pagos y seguimiento',
    steps: [
      'Consulta el estado en el módulo "Control de Pagos".',
      'Puedes ver histórico, montos y movimientos asociados.',
      'Cualquier diferencia debe reportarse con número de factura.',
    ],
  },
  {
    title: 'Soporte e incidencias',
    steps: [
      'Verifica credenciales y habilitación antes de reportar.',
      'Para incidencias técnicas: canal de soporte Tale.',
      'Para incidencias de pago/facturación: Administración / Contabilidad.',
    ],
  },
];