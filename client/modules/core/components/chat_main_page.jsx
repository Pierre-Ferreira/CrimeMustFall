import React from 'react';

import { Button } from 'react-bootstrap'

class ChatMainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  CreateNewChat () {
    let { createNewChat } = this.props
    createNewChat()
  }
  render() {
    return (
      <div>
        ChatMainPage
        <Button onClick={this.CreateNewChat.bind(this)}> NEW ALERT</Button>
      </div>
    );
  }
}

export default ChatMainPage;
