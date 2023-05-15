import { useState } from 'react';

import HomeHeader from './HomeHeader';
import HomeJob from './HomeJob';
import HomeEssay from './HomeEssay';
import HomeResponse from './HomeResponse'

import './Home.css';

import Container from '@mui/material/Container';

function Home() {
  const [essay, setEssay] = useState("");

  function resetEssay() {
    setEssay("");
  }

  function changeEssay(text) {
    setEssay(text)
  }

  return (
    <Container maxWidth="md">
      <HomeHeader></HomeHeader>
      <HomeJob></HomeJob>
      <HomeEssay essay={essay} resetEssay={resetEssay} changeEssay={changeEssay}></HomeEssay>
      <HomeResponse></HomeResponse>
    </Container>
  )
}

export default Home;