function HomeQuestion(props) {
  function startFromQuestion1(text) {
    return text.substring(text.indexOf('1.'))
  }

  return (
    <div className="question">
      <div className="question-header">예상 질문</div>
      <div className="question-body">{startFromQuestion1(props.question)}</div>
    </div>
  )
}

export default HomeQuestion;