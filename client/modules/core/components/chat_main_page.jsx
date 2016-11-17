import React from 'react';

import { Button, Panel } from 'react-bootstrap'

class ChatMainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  CreateNewChat () {
    let { createNewChat } = this.props
    createNewChat()
  }
  GoToChat (chatId) {
    let { goToChat } = this.props
    goToChat(chatId)
  }
  render() {
    let {myChatsInitiated, myChatsAlerted} = this.props
    let {displayTime, displayDate} = this.props.global_functions
    const btnStyles = { margin: '0 auto 10px',
                        whiteSpace: 'normal'
                      };
    return (
      <div>
        <Button bsStyle="danger" bsSize="large" block onClick={this.CreateNewChat.bind(this)}> NEW ALERT</Button>
        <h4>My Alerts</h4>
        {myChatsInitiated.map((chat, index) => {
          let chatId = chat._id
          let createdAt = chat.createdAt
          let displayDateStr = displayDate(createdAt)
          let displayTimeStr = displayTime(createdAt)
          return <Button style={btnStyles} bsStyle="warning" bsSize="large" block key={index} onClick={this.GoToChat.bind(this, chatId)}>
              Date of Alert: {displayDateStr} ({displayTimeStr})
          </Button>
        })}
        <h4>Alerts I was include in</h4>
        {myChatsAlerted.map((chat, index) => {
          let chatId = chat._id
          let initiator_id = chat.initiator_id
          let createdAt = chat.createdAt
          let displayDateStr = displayDate(createdAt)
          let displayTimeStr = displayTime(createdAt)
          return <Button style={btnStyles} bsStyle="primary" bsSize="large" block key={index} onClick={this.GoToChat.bind(this, chatId)}>
              Date of Alert: {displayDateStr} ({displayTimeStr})
          </Button>
        })}
      </div>
    );
  }
}

export default ChatMainPage;
