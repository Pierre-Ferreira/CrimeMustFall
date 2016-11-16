import React from 'react';
import ChatInputField from '../containers/chat_input_field'

class ChatPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ChatInputField chat_id={this.props.chat_id}/>
      </div>
    );
  }
}

export default ChatPage;
