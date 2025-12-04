import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
  variant?: 'hero' | 'section';
  darkBackground?: boolean; // Para usar sobre fondo azul oscuro
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  alignment = 'center',
  variant = 'section',
  darkBackground = true, // Por defecto true porque toda la web es oscura
}) => {
  const isHero = variant === 'hero';
  
  return (
    <Box
      sx={{
        textAlign: alignment,
        marginBottom: isHero ? '4rem' : '3rem',
        marginTop: isHero ? 0 : '3rem',
      }}
    >
      {label && (
        <Chip
          label={label}
          variant="outlined"
          size="medium"
          sx={{
            marginBottom: '1rem',
            borderColor: '#00c9ff',
            color: '#00c9ff',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            letterSpacing: '1.5px',
            backgroundColor: 'rgba(0, 201, 255, 0.1)',
            borderWidth: '2px',
            padding: '6px 12px',
            height: 'auto',
          }}
        />
      )}
      
      <Typography 
        variant={isHero ? 'h1' : 'h2'} 
        component={isHero ? 'h1' : 'h2'} 
        sx={{ 
          marginBottom: description ? '1.5rem' : 0,
          color: '#ffffff',
          fontWeight: 700,
          fontSize: isHero 
            ? { xs: '2rem', md: '3rem' } 
            : { xs: '1.5rem', md: '2rem' },
          textTransform: 'uppercase',
          letterSpacing: '2px',
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>
      
      {description && (
        <Typography
          variant="body1"
          sx={{
            maxWidth: isHero ? '800px' : '700px',
            margin: alignment === 'center' ? '0 auto' : '0',
            lineHeight: 1.7,
            fontSize: '1rem',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};
