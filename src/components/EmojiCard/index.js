import './index.css'

const CreateEmojiCard = props => {
  const {details, onClicked} = props
  const {emojiName, emojiUrl, id} = details

  const onClickedEmoji = () => {
    onClicked(id)
  }

  return (
    <div className="emoji-box">
      <img
        src={emojiUrl}
        alt={emojiName}
        className="emoji-logo"
        onClick={onClickedEmoji}
      />
    </div>
  )
}

export default CreateEmojiCard
