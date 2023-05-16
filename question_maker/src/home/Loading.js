import { CircularProgress } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Loading() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
    },
  });

  return (
    <div className="loading">
      <ThemeProvider theme={theme}>
        <CircularProgress size={50} thickness={4}></CircularProgress>
      </ThemeProvider>
    </div>
  )
}

export default Loading;