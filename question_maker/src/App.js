import './App.css';
import './main.css';

function App() {
  return (
    <div className="App">  
      <div className="main-screen">
        <span className='title'>AI 면접 생성 질문기</span>  
        <div className="job-container">    
           <div className="job">
              당신의 직무는? 
           <div className="select-job">JOB</div>
           </div>
        </div>
        <div className="essay-container">
            <div className="essay-info">자기소개서 문항</div>
            <div className="essay-wrapper">
              <textarea placeholder="Type!"></textarea>
            </div>
            <div className="essay-btns">
             <div className="reset-btn">초기화</div>
             <div className="create-btn">생성하기</div>
            </div>
        </div>
        <div className="prediction-container">예상 질문</div>          
      </div>
    </div>
  );
}

export default App;
