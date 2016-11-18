import React from 'react';
import ReactDOM from 'react-dom'

import ChatAutoMessage from '../containers/chat_auto_message'

import {Grid, Col, Panel, Form, FormGroup, ControlLabel, FormControl, InputGroup, Button} from 'react-bootstrap'



class ChatInputField extends React.Component {
  constructor(props) {
    super(props);
  }
  _messageInputSend(e){
    e.preventDefault()
    let { messageInputRef } = this.refs
    let messageInput = ReactDOM.findDOMNode(messageInputRef).value
    if (messageInput.trim().length === 0) return
    let { chatMessageSend, chat_id } = this.props
    chatMessageSend(messageInput, chat_id)
    ReactDOM.findDOMNode(messageInputRef).value = ""
  }
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12}>
            <Form horizontal onSubmit={this._messageInputSend.bind(this)} >
              <FormGroup>
                <InputGroup>
                  <FormControl type="text" ref="messageInputRef" placeholder="Enter text" />
                  <InputGroup.Button>
                    <Button type='submit' bsStyle={"primary"}>
                      SEND
                    </Button>
                  </InputGroup.Button>
                </InputGroup>
              </FormGroup>
            </Form>
            <ChatAutoMessage chat_id={this.props.chat_id} chatMessageSend={this.props.chatMessageSend}/>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default ChatInputField;
