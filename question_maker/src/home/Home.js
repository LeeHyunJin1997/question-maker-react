import { useState } from 'react';

import Loading from './Loading';
import HomeHeader from './HomeHeader';
import HomeJob from './HomeJob';
import HomeEssay from './HomeEssay';
import HomeQuestion from './HomeQuestion'

import './Home.css';

import axios from 'axios';
import Container from '@mui/material/Container';

const BASE_URL = process.env.REACT_APP_BASE_URL

function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [job, setJob] = useState("");
  const [essay, setEssay] = useState("");
  const [question, setQuestion] = useState("");

  function changeJob(text) {
    setJob(text);
  }

  function resetEssay() {
    setEssay("");
  }

  function changeEssay(text) {
    setEssay(text)
  }

  function submitEssay() {
    setIsLoading(true);

    axios.post(BASE_URL + '/api/v1/question', {
      job: job,
      essay: essay,
    }).then((response) => {
      setQuestion(response.data)
      setIsLoading(false)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      {isLoading && <Loading></Loading>}
      <Container maxWidth="md">
        <HomeHeader></HomeHeader>
        <HomeJob job={job} changeJob={changeJob}></HomeJob>
        <HomeEssay
          essay={essay}
          resetEssay={resetEssay}
          changeEssay={changeEssay}
          submitEssay={submitEssay}
        ></HomeEssay>
        <HomeQuestion question={question}></HomeQuestion>
      </Container>
    </div>
  )
}

export default Home;