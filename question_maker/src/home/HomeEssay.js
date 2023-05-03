function HomeEssay() {
  return (
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
  )
}

export default HomeEssay;