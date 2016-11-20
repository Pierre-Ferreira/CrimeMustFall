import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Panel } from 'react-bootstrap'

import MyChatsAlertedButton from '../containers/my_chats_alerted_button'

class ChatMainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  _CreateNewChat () {
    let { createNewChat,  noContactsFlag} = this.props
    if (!noContactsFlag)
      createNewChat()
    else {
      return 0
    }
  }
  _GoToChat (chatId) {
    let { goToChat } = this.props
    goToChat(chatId)
  }
  render() {
    let {myChatsInitiated, myChatsAlerted, noContactsFlag} = this.props
    let {displayTime, displayDate} = this.props.global_functions
    const btnStyles = { margin: '0 auto 10px',
                        whiteSpace: 'normal'
                      };
    return (
      <div>
        <Button
                bsStyle="danger"
                bsSize="large"
                block
                ref = "alertButtonRef"
                onClick={this._CreateNewChat.bind(this)}
        >
                {noContactsFlag?"NO CONTACTS TO ALERT!":"NEW ALERT"}
        </Button>
        <h4>My Alerts</h4>
        {myChatsInitiated.map((chat, index) => {
          let chatId = chat._id
          let createdAt = chat.createdAt
          let displayDateStr = displayDate(createdAt)
          let displayTimeStr = displayTime(createdAt)
          return (
            <Button style={btnStyles}
                    bsStyle="warning"
                    bsSize="large"
                    block
                    key={index}
                    onClick={this._GoToChat.bind(this, chatId)}
            >
              Date of Alert: {displayDateStr} ({displayTimeStr})
            </Button>)
        })}
        <h4>Contacts Alerts</h4>
        {myChatsAlerted.map((chat, index) => {
          return <MyChatsAlertedButton key={index} chat={chat} />
        })}
      </div>
    );
  }
}

export default ChatMainPage;
