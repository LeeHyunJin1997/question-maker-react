import HomeHeader from './HomeHeader';
import HomeJob from './HomeJob';
import HomeEssay from './HomeEssay';
import HomeQuestion from './HomeQuestion'

import styles from './Home.css';

import Container from '@mui/material/Container';

function Home() {
  return (
    <Container maxWidth="md">
      <HomeHeader></HomeHeader>
      <HomeJob></HomeJob>
      <HomeEssay></HomeEssay>
      <HomeQuestion></HomeQuestion>
    </Container>
  )
}

export default Home;