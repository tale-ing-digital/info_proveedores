import React from 'react';
import { Container, Box, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  SectionHeader,
  RequirementsGrid,
  defaultRequirements,
  ProcessesSection,
  defaultProcesses,
  AccountsPolicySection,
  SupportLineSection,
  FaqSection,
  defaultFaqItems,
} from '../components';

const SuppliersGuidelinesPage: React.FC = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#001845', // Fondo azul oscuro como taleinmobiliaria.com
      minHeight: '100vh',
      paddingY: '3rem',
    }}>
      <Container maxWidth="lg">
        {/* Logo de Tale Inmobiliaria */}
        {/* TODO: Colocar el logo oficial en public/assets/branding/logo-tale-horizontal.svg */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '3rem',
            paddingTop: '1rem',
          }}
        >
          <img 
            src="/assets/branding/logo-tale-horizontal.svg" 
            alt="Tale Inmobiliaria" 
            style={{ 
              height: '60px',
              filter: 'brightness(0) invert(1)',
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </Box>

        {/* Hero Section */}
        <SectionHeader
          title="Lineamientos para Proveedores"
          description="Estos lineamientos te ayudarán a utilizar correctamente el Portal de Proveedores Tale. Aquí encontrarás requisitos, procesos operativos, preguntas frecuentes y contactos clave."
          alignment="center"
          variant="hero"
        />

        {/* Sección 01: Requisitos Generales */}
        <SectionHeader
          title="Requisitos Generales"
          description="Documentos y políticas esenciales para trabajar con Tale"
          alignment="center"
          variant="section"
        />
        <RequirementsGrid requirements={defaultRequirements} />

        {/* Botones de acceso */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: '2rem',
            marginY: '4rem',
            flexWrap: 'wrap',
          }}
        >
          <Button
            variant="outlined"
            size="large"
            endIcon={<OpenInNewIcon />}
            href="https://documentacion.s10peru.com/nuevo-manual-portal-proveedor/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#00c9ff',
              borderColor: '#00c9ff',
              borderWidth: '2px',
              padding: '12px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              '&:hover': {
                borderColor: '#00c9ff',
                borderWidth: '2px',
                backgroundColor: 'rgba(0, 201, 255, 0.1)',
              },
            }}
          >
            Manual Portal de Proveedores
          </Button>

          <Button
            variant="contained"
            size="large"
            endIcon={<OpenInNewIcon />}
            href="https://s10net.com:18081/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#ffffff',
              backgroundColor: '#00c9ff',
              borderWidth: '2px',
              padding: '12px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              '&:hover': {
                backgroundColor: '#00b3e6',
              },
            }}
          >
            Acceso al Portal
          </Button>
        </Box>

        {/* Procesos Operativos */}
        <SectionHeader
          title="Procesos Operativos"
          description="Flujos de trabajo y procedimientos del portal"
          alignment="center"
          variant="section"
        />
        <ProcessesSection processes={defaultProcesses} />

        {/* Sección 02: Política de cuentas por pagar */}
        <AccountsPolicySection />

        {/* Sección 03: Soporte técnico */}
        <SupportLineSection />

        {/* FAQ */}
        <SectionHeader
          title="Preguntas Frecuentes"
          alignment="center"
          variant="section"
        />
        <FaqSection items={defaultFaqItems} />
      </Container>
    </Box>
  );
};

export default SuppliersGuidelinesPage;