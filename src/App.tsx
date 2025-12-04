import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { taleTheme } from './theme/theme';
import SuppliersGuidelinesPage from './pages/SupplierGuidelinesPage';

function App() {
  return (
    <ThemeProvider theme={taleTheme}>
      <CssBaseline />
      <SuppliersGuidelinesPage />
    </ThemeProvider>
  );
}

export default App;
