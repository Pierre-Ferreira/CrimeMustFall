import React from 'react';
import { Button } from 'react-bootstrap'

class MyChatsAlertedButton extends React.Component {
  constructor(props) {
    super(props);
  }
  _GoToChat (chatId) {
    let { goToChat } = this.props
    goToChat(chatId)
  }
  render() {
      let {displayTime, displayDate} = this.props.global_functions
      let chatId = this.props.chat._id
      let initiator_id = this.props.chat.initiator_id
      let createdAt = this.props.chat.createdAt
      let displayName = this.props.chat.initiator_name
      let displayDateStr = displayDate(createdAt)
      let displayTimeStr = displayTime(createdAt)
      const btnStyles = { margin: '0 auto 10px',
                          whiteSpace: 'normal'
                        };
      return (
      <div>
        <Button style={btnStyles}
                bsStyle="primary"
                bsSize="large"
                block
                onClick={this._GoToChat.bind(this, chatId)}
        >
          Date of Alert: {displayDateStr} ({displayTimeStr}) {displayName}
        </Button>
      </div>
      )
  }
}

export default MyChatsAlertedButton;
