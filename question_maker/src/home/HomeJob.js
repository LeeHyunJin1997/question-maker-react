import { useState } from 'react';

function HomeJob() {
  let [job, setJob] = useState(''); 

  function handleChange(event) {
    setJob(event.target.value);
  }

  return (
    <div>
      <div className="job">
        <div>직무를 선택해주세요</div>
        <form>
          <select
            value={job}
            onChange={handleChange}
          >
            <option value={''}>선택 안함</option>
            <option value={'기획'}>기획</option>
            <option value={'마케팅'}>마케팅</option>
            <option value={'회계'}>회계</option>
            <option value={'인사'}>인사</option>
            <option value={'사무'}>사무</option>
            <option value={'IT'}>IT</option>
            <option value={'디자인'}>디자인</option>
            <option value={'영업'}>영업</option>
            <option value={'구매'}>구매</option>
            <option value={'상품기획'}>상품기획</option>
            <option value={'운송'}>운송</option>
            <option value={'서비스'}>서비스</option>
            <option value={'생산'}>생산</option>
            <option value={'건축'}>건축</option>
            <option value={'의료'}>의료</option>
            <option value={'R&D'}>R&D</option>
            <option value={'교육'}>교육</option>
            <option value={'미디어'}>미디어</option>
            <option value={'금융'}>금융</option>
            <option value={'공공'}>공공</option>
          </select>
        </form>
      </div>
      <div className="addition">
        <div>내 직무가 없다면?</div>
      </div>
    </div>
  )
}

export default HomeJob;