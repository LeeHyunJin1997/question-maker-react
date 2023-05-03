import { useState } from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function HomeJob() {
  let [job, setJob] = useState(''); 

  function handleChange(event) {
    setJob(event.target.value);
  }

  return (
    <div>
      <div className="job">
        <div>직무를 선택해주세요</div>
        <FormControl>
          <InputLabel id="job-selector">직무</InputLabel>
          <Select
            labelId="job-selector"
            label="직무"
            value={job}
            onChange={handleChange}
          >
            <MenuItem value={'기획'}>기획</MenuItem>
            <MenuItem value={'마케팅'}>마케팅</MenuItem>
            <MenuItem value={'회계'}>회계</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>내 직무가 없다면?</div>
    </div>
  )
}

export default HomeJob;