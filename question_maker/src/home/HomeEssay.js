import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function HomeEssay(props) {
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

  function handleReset(event) {
    event.preventDefault();
    props.resetEssay()
  }

  function handleInput(event) {
    props.changeEssay(event.target.value);
  }

  return (
    <div className="essay">
      <div className="essay-header">자기소개서 문항</div>
      <textarea value={props.essay} onChange={handleInput}></textarea>
      <div className="button-wrapper">
        <ThemeProvider theme={theme}>
          <Button
            onClick={handleReset}
            variant="contained"
            color="neutral"
            disableElevation
            sx={{ fontSize: 18, borderRadius: '0 0 0 20px' }}
          >
            초기화
          </Button>
          <Button
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