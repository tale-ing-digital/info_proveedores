import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

interface FaqItem {
  question: string;
  answer: string;
  details?: string;
}

interface FaqSectionProps {
  items: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ items }) => {
  return (
    <Box sx={{ marginY: '2rem' }}>
      <Box>
        {items.map((item, index) => (
          <Accordion 
            key={index}
            elevation={0}
            sx={{ 
              '&:last-child': {
                borderBottom: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#00c9ff', fontSize: '1.5rem' }} />}
              sx={{
                '& .MuiAccordionSummary-content': {
                  margin: '16px 0',
                  alignItems: 'center',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem', width: '100%' }}>
                {/* Número cyan como en Tale */}
                <Typography
                  sx={{
                    color: '#00c9ff',
                    fontSize: '1.125rem',
                    fontWeight: 400,
                    minWidth: '50px',
                    fontFamily: 'Montserrat',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}.
                </Typography>
                {/* Pregunta */}
                <Typography 
                  sx={{ 
                    fontWeight: 400,
                    color: '#ffffff',
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {item.question}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: '0 0 2rem 82px',
                backgroundColor: 'transparent',
              }}
            >
              <Typography 
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.7,
                  fontSize: '0.95rem',
                }}
              >
                {item.answer}
              </Typography>
              {item.details && (
                <Typography 
                  sx={{ 
                    marginTop: '1rem', 
                    fontStyle: 'italic',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.875rem',
                  }}
                >
                  {item.details}
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export const defaultFaqItems: FaqItem[] = [
  {
    question: '¿Quién me comparte el link de acceso al Portal?',
    answer: 'El correo de bienvenida se envía automáticamente cuando tu cliente genera el primer ticket de acceso. Si no lo has recibido, verifica tu bandeja de correo no deseado o contacta a tu cliente.',
  },
  {
    question: '¿Quién me habilita para trabajar con el Portal?',
    answer: 'La habilitación es responsabilidad exclusiva de tu cliente. Ellos deben crear tu cuenta y asignarte los permisos necesarios en el sistema.',
  },
  {
    question: '¿Cómo sé si mi factura se subió correctamente?',
    answer: 'Puedes revisarlo en el módulo de facturación, donde encontrarás indicadores como Registrada, Observada o Rechazada. Si ves un estado de error, verifica que todos los documentos estén en los formatos correctos.',
  },
  {
    question: '¿Dónde verifico si mi pago se ha realizado?',
    answer: 'En el menú "Control de Pagos", donde verás estado actual e histórico de todos tus pagos, movimientos y saldos pendientes.',
  },
  {
    question: 'No puedo ingresar al portal, ¿qué hago?',
    answer: 'Verifica que tu correo esté habilitado por tu cliente, que estés usando las credenciales correctas y que tu usuario tenga estado activo. Si el problema persiste, contacta a nuestro equipo de soporte.',
  },
];