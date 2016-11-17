import React from 'react';

class ChatMessagesDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let messagesArr = this.props.messagesArr
    return (
      <div className="panel-body msg_container_base">
        {messagesArr.map((messageObj, index) => {
          return (
            <div className={messageObj.isInitiatorPost ? "row msg_container base_initiator" : "row msg_container base_responder"} key={index}>
              <div>
                <div className={messageObj.isInitiatorPost ? "messageBubbleLeft msg_initiator" : "messageBubbleRight msg_responder"}>
                  <metaPost> {messageObj.metaInfo.senderName} - {messageObj.messageDate} @ {messageObj.messageTime}</metaPost>
                  <p> {messageObj.content}</p>
                  <metaPost>{messageObj.metaInfo.address}, {messageObj.metaInfo.suburb}, {messageObj.metaInfo.city}</metaPost>
                </div>
              </div>
            </div>
          )
        })}
        </div>
    );
  }
}

export default ChatMessagesDisplay;
