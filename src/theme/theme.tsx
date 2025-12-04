import { createTheme } from '@mui/material/styles';

// Tema corporativo Tale Inmobiliaria - Alineado al estilo de la web oficial
export const taleTheme = createTheme({
  palette: {
    primary: {
      main: '#001845', // Azul oscuro de fondo Tale
      dark: '#001230',
      light: '#002060',
    },
    secondary: {
      main: '#00c9ff', // Cyan/turquesa característico de Tale
      dark: '#00a8d6',
      light: '#33d4ff',
    },
    background: {
      default: '#001845', // Fondo azul oscuro en toda la página
      paper: 'rgba(255, 255, 255, 0.05)', // Cards con transparencia
    },
    text: {
      primary: '#ffffff', // Texto blanco
      secondary: 'rgba(255, 255, 255, 0.7)', // Texto blanco con transparencia
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Segoe UI", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: '#ffffff',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      color: '#ffffff',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#ffffff',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      color: '#ffffff',
      letterSpacing: '0.5px',
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: '#ffffff',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#ffffff',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'rgba(255, 255, 255, 0.8)',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: 'rgba(255, 255, 255, 0.7)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#001845',
          color: '#ffffff',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '8px',
          boxShadow: 'none',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderColor: '#00c9ff',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 600,
          textTransform: 'uppercase',
          fontSize: '1rem',
          padding: '14px 32px',
          letterSpacing: '0.5px',
        },
        contained: {
          backgroundColor: '#5DADE2',
          color: '#ffffff',
          boxShadow: '0 4px 12px rgba(93, 173, 226, 0.3)',
          '&:hover': {
            backgroundColor: '#3498db',
            boxShadow: '0 6px 20px rgba(93, 173, 226, 0.4)',
          },
        },
        outlined: {
          borderColor: '#ffffff',
          color: '#ffffff',
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: '#5DADE2',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          fontWeight: 600,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          padding: '4px 8px',
        },
        outlined: {
          borderColor: '#5DADE2',
          color: '#5DADE2',
          backgroundColor: 'rgba(93, 173, 226, 0.1)',
          borderWidth: '2px',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius: '0 !important',
          marginBottom: '0',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '0',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '20px 0',
          minHeight: '72px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#5DADE2',
          textDecoration: 'none',
          fontWeight: 500,
          transition: 'all 0.2s ease',
          '&:hover': {
            color: '#3498db',
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});