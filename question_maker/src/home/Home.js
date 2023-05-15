import { useState } from 'react';

import HomeHeader from './HomeHeader';
import HomeJob from './HomeJob';
import HomeEssay from './HomeEssay';
import HomeResponse from './HomeResponse'

import './Home.css';

import Container from '@mui/material/Container';

function Home() {
  const [job, setJob] = useState("");
  const [essay, setEssay] = useState("");

  function changeJob(text) {
    setJob(text);
  }

  function resetEssay() {
    setEssay("");
  }

  function changeEssay(text) {
    setEssay(text)
  }

  return (
    <Container maxWidth="md">
      <HomeHeader></HomeHeader>
      <HomeJob job={job} changeJob={changeJob}></HomeJob>
      <HomeEssay essay={essay} resetEssay={resetEssay} changeEssay={changeEssay}></HomeEssay>
      <HomeResponse></HomeResponse>
    </Container>
  )
}

export default Home;