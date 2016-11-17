import React from 'react';
import ChatInputField from '../containers/chat_input_field'
import ChatMessagesDisplay from '../containers/chat_messages_display'

class ChatPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ChatMessagesDisplay chat_id={this.props.chat_id} />
        <ChatInputField chat_id={this.props.chat_id} />
      </div>
    );
  }
}

export default ChatPage;
