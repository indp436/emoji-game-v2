import './index.css'

const CreateEmojiCard = props => {
  const {details, onClicked} = props
  const {emojiName, emojiUrl, id} = details

  const onClickedEmoji = () => {
    onClicked(id)
  }

  return (
    <li className="li">
      <button
        className="emoji-box emoji-button"
        onClick={onClickedEmoji}
        type="button"
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-logo" />
      </button>
    </li>
  )
}

export default CreateEmojiCard
