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
    props.resetEssay();
  }

  function handleInput(event) {
    const input = event.target.value

    if (input.length > 2000) {
      props.changeEssay(input.substring(0, 2000))
      alert('최대 글자수를 초과했습니다')
    }
    else {
      props.changeEssay(input)
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.submitEssay();
  }

  return (
    <div className="essay">
      <div className="essay-header">
        자기소개서를 입력해주세요
        <div className="essay-notice">
          * 최대 2000자까지 작성할 수 있습니다
        </div>
      </div>
      <div className="word-limit">( {props.essay.length} / 2000 )</div>
      <textarea value={props.essay} onChange={handleInput}></textarea>
      <div className="button-wrapper">
        <ThemeProvider theme={theme}>
          <Button
            onClick={handleReset}
            variant="contained"
            color="neutral"
            disableElevation
            sx={{ fontSize: 20, borderRadius: '0 0 0 20px' }}
          >
            초기화
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disableElevation
            sx={{ fontSize: 20, borderRadius: '0 0 20px 0' }}
          >
            생성하기
          </Button>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default HomeEssay;