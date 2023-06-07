import {Component} from 'react'

import Feedback from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {rule: true}

  onClickFeedBack = () => {
    this.setState({rule: false})
  }

  render() {
    const {rule} = this.state
    console.log(rule)
    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          {rule ? (
            <ul className="options">
              {resources.emojis.map(each => (
                <Feedback
                  Key={each.id}
                  logos={each}
                  onClickFeedBack={this.onClickFeedBack}
                />
              ))}
            </ul>
          ) : (
            <div className="love-box">
              <img
                className="love"
                src={resources.loveEmojiUrl}
                alt="love emoji"
              />
              <h1>Thank You</h1>
              <p>We will use your feedback to improve our platform</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
