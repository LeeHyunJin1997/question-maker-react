import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function HomeEssay() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#74AA9C',
        contrastText: '#ffffff',
      },
      neutral: {
        main: '#f0f1f2',
        contrastText: '#777777',
      }
    },
  });

  return (
    <div className="essay-container">
      <div className="essay-info">자기소개서 문항</div>
      <textarea></textarea>
      <div className="button-wrapper">
        <ThemeProvider theme={theme}>
          <Button
            className="reset"
            variant="contained"
            color="neutral"
            disableElevation
            sx={{ fontSize: 18, borderRadius: '0 0 0 20px' }}
          >
            초기화
          </Button>
          <Button
            className="create"
            variant="contained"
            disableElevation
            sx={{ fontSize: 18, borderRadius: '0 0 20px 0' }}
          >
            생성하기
          </Button>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default HomeEssay;