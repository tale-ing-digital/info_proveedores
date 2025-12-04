import React from 'react';
import { Container, Box } from '@mui/material';
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