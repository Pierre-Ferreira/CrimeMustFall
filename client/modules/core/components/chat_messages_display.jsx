import React from 'react';

class ChatMessagesDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let messagesArr = this.props.messagesArr
console.log('ChatMessagesDisplay:',messagesArr,this.props)
    return (
      <div className="panel-body msg_container_base">
        {messagesArr.map((messageObj, index) => {
            if (messageObj.isInitiatorPost) {
              return (
                <div className="row msg_container base_initiator" key={index}>
                  <div>
                    <div className="messageBubbleLeft msg_initiator">
                      <metaPost> {messageObj.metaInfo.senderName} - {messageObj.messageDate} @ {messageObj.messageTime}</metaPost>
                      <p> {messageObj.content}</p>
                      <metaPost>{messageObj.metaInfo.address}, {messageObj.metaInfo.suburb}, {messageObj.metaInfo.city}</metaPost>
                    </div>
                  </div>
                </div>
              )

            } else {
              return (
                <div className="row msg_container base_responder" key={index}>
                  <div>
                    <div className="messageBubbleRight msg_responder">
                      <metaPost>{messageObj.metaInfo.senderName} - {messageObj.messageDate} @ {messageObj.messageTime}</metaPost>
                      <p> {messageObj.content}</p>
                      <metaPost>{messageObj.metaInfo.address}, {messageObj.metaInfo.suburb}, {messageObj.metaInfo.city}</metaPost>
                    </div>
                  </div>
                </div>
              )
            }
        })}
        </div>
    );
  }
}

export default ChatMessagesDisplay;
