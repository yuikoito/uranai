import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/mui-datepicker.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA070',
      contrastText: '#fff',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
