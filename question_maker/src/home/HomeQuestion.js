function HomeQuestion(props) {
  function startFromQuestion1(text) {
    return text.substring(text.indexOf('1.'))
  }

  function nToBr(text) {
    return (
      <div>
        {text.split(/(?:\r\n|\r|\n)/g).map((line) => {
          return (
            <div className="each-question">{line}</div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="question">
      <div className="question-header">예상 질문</div>
      <div className="question-body">{nToBr(startFromQuestion1(props.question))}</div>
    </div>
  )
}

export default HomeQuestion;