import HomeHeader from './HomeHeader';
import HomeJob from './HomeJob';
import HomeEssay from './HomeEssay';
import HomeResponse from './HomeResponse'

import './Home.css';

import Container from '@mui/material/Container';

function Home() {
  return (
    <Container maxWidth="md">
      <HomeHeader></HomeHeader>
      <HomeJob></HomeJob>
      <HomeEssay></HomeEssay>
      <HomeResponse></HomeResponse>
    </Container>
  )
}

export default Home;