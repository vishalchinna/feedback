import './index.css'

const Feedback = props => {
  const {logos, onClickFeedBack} = props
  const {name, imageUrl, id} = logos
  const callingTheFunction = () => {
    onClickFeedBack(id)
    console.log(id)
  }
  return (
    <div>
      <li>
        <img
          className="logo"
          src={imageUrl}
          onClick={callingTheFunction}
          alt={name}
        />
        <p className="para">{name}</p>
      </li>
    </div>
  )
}

export default Feedback
