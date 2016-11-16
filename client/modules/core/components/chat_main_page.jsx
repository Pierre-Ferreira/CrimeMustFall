import React from 'react';
import ChatInputField from '../containers/chat_input_field'

class ChatMainPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("YEPPPPconstructor")
  }
  componentWillMount() {
    console.log("YEPPPPcomponentWillMount")
  }
  render() {
    return (
      <div>
        ChatMainPage
        <ChatInputField chat_id={this.props.chat_id}/>
      </div>
    );
  }
}

export default ChatMainPage;
