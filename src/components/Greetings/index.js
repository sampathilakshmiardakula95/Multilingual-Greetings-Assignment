import './styledComponents.css'

const Greetings = props => {
  const {languageDetails, updateButton, ActiveTab} = props
  const {id, imageUrl, buttonText, imageAltText} = languageDetails

  const activeBtn = ActiveTab ? 'active-button' : ''

  const sendActiveId = () => {
    updateButton(id, imageUrl, imageAltText)
  }

  return (
    <li>
      <button
        type="button"
        className={`button ${activeBtn}`}
        onClick={sendActiveId}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Greetings
