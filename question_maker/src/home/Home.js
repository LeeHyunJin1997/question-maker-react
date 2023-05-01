import HomeHeader from './HomeHeader';
import HomeJob from './HomeJob';
import HomeEssay from './HomeEssay';
import HomeQuestion from './HomeQuestion';

function Home() {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <HomeJob></HomeJob>
      <HomeEssay></HomeEssay>
      <HomeQuestion></HomeQuestion>
    </div>
  )
}

export default Home;