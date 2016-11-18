import React from 'react';

import { Button } from 'react-bootstrap'

class ChatAutoMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  _autoTextSend(alertAutoMessage) {
    let { chatMessageSend, chat_id } = this.props
    chatMessageSend(alertAutoMessage, chat_id)
  }
  render() {
    let alertButtonsArr = [
      {
          btnText: "INTRUDER",
          messageText: "INTRUDER ALERT!"
      },
      {
          btnText: "HI-JACKING",
          messageText: "HI-JACKING ALERT!"
      },
      {
          btnText: "AT MY HOUSE",
          messageText: "AT MY HOUSE"
      },
      {
          btnText: "AT MY NEIGHBOUR",
          messageText: "AT MY NEIGHBOUR"
      },
      {
          btnText: "AT THIS POSITION",
          messageText: "AT THIS POSITION:"
      },
    ]
    let responderButtonsArr = [
      {
          btnText: "I'M ON MY WAY",
          messageText: "I'M ON MY WAY!"
      },
      {
          btnText: "I AM PHONING THE POLICE",
          messageText: "I AM PHONING THE POLICE!"
      },
      {
          btnText: "I AM PHONING THE ARMED RESPONSE",
          messageText: "I AM PHONING THE ARMED RESPONSE!"
      },
      {
          btnText: "GIVE MORE INFO",
          messageText: "GIVE MORE INFO!"
      },
      {
          btnText: "WHERE ARE YOU?",
          messageText: "WHERE ARE YOU?"
      },
    ]


    let isInitiator = this.props.isInitiator
    return (
      <div>
        {isInitiator ?
        (
          {alertButtonsArr.map((alertAutoButton, index) => (
            <Button  bsStyle={"warning"}
                     className="alertAutoTextBtn"
                     key={index}
                     onClick={this._autoTextSend.bind(this,alertAutoButton.messageText)}
            >
              {alertAutoButton.btnText}
            </Button>
          ))}
        ) : (
          {responderButtonsArr.map((responderAutoButton, index) => (
            <Button  bsStyle={"warning"}
                     className="alertAutoTextBtn"
                     key={index}
                     onClick={this._autoTextSend.bind(this,responderAutoButton.messageText)}
            >
              {responderAutoButton.btnText}
            </Button>
          ))}
        )
      </div>
    );
  }
}

export default ChatAutoMessage;
