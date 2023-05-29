import { Grid } from '@mui/material'

function HomeHeader() {
  return (
    <Grid container rowSpacing={6} className="header">
      <Grid item className="header-text">
        <h1>
          안녕하세요!<br></br>
          AI 면접 질문 생성기<br></br> 
          <div className="highlight">이로바 </div>
          입니다
        </h1>
        <div>
          자기소개서를 입력하고 예상 질문을 받아보세요!
        </div>
      </Grid>
      <Grid item className="logo">
        <img src="logo.png" alt="이로바 로고" width="252px" height="107px"></img>
      </Grid>
    </Grid>
  )
}

export default HomeHeader;