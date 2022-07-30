import './index.css'

const CreateNavBar = props => {
  const {details, topScore, score} = props
  const {imgUrl, alt} = details

  return (
    <div className="nav-bar-container">
      <div className="logo-box">
        <img src={imgUrl} alt={alt} className="logo" />
        <h1 className="logo-title">Emoji Game</h1>
      </div>
      <div className="score-box">
        <p className="score-value">Score: {score}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default CreateNavBar
