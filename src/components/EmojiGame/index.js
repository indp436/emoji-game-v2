/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import CreateNavBar from '../NavBar/index'
import CreateEmojiCard from '../EmojiCard/index'

const navBar = {
  imgUrl: 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png',
  alt: 'emoji logo',
}

const emojisIdList = []

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, list: emojisIdList, isGameOver: false}

  clickedOnEmoji = id => {
    const {list, score, topScore} = this.state
    if (score > 11 && list.includes(id)) {
      this.setState({score: 12, topScore: 12, isGameOver: true})
      console.log('triggred at list includes')
    } else if (list.includes(id)) {
      if (score > topScore) {
        this.setState({topScore: score})
      }
      this.setState({isGameOver: true})
    } else {
      this.setState(prevState => ({
        list: [...prevState.list, id],
        score: prevState.score + 1,
      }))
    }
  }

  restart = () => {
    this.setState({isGameOver: false, score: 0, list: emojisIdList})
  }

  render() {
    const {score, topScore, isGameOver} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    if (score > 11 || isGameOver) {
      const resultImg =
        score > 11
          ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

      const gameResultText = score > 11 ? 'You Won' : 'You Lose'
      const scoreTextHeading = score > 11 ? 'Best Score' : 'Your Score'
      const resultImageAlt = score > 11 ? 'win' : 'lose'
      return (
        <div className="bg">
          <div className="game-container">
            <div className="nav-container">
              <CreateNavBar
                details={navBar}
                score={score}
                topScore={topScore}
              />
            </div>
            <div className="result-card">
              <div className="left-container">
                <h1 className="You-loose">{gameResultText}</h1>
                <p className="loose-score-heading">
                  {scoreTextHeading}
                  <br />
                  <p className="span">{score}/12</p>
                </p>
                <button
                  className="play-again-loose-game-button"
                  type="button"
                  onClick={this.restart}
                >
                  Play Again
                </button>
              </div>
              <div className="right-container">
                <img
                  src={resultImg}
                  className="result-image"
                  alt={resultImageAlt}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="bg">
        <div className="game-container">
          <div className="nav-container">
            <CreateNavBar details={navBar} score={score} topScore={topScore} />
          </div>
          <div className="emoji-container">
            <ul className="emoji-inside-container">
              {shuffledEmojisList().map(each => (
                <CreateEmojiCard
                  details={each}
                  key={each.id}
                  onClicked={this.clickedOnEmoji}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
