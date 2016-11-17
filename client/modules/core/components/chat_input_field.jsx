import React from 'react';
import {Grid, Col, Panel, Form, FormGroup, ControlLabel, FormControl, InputGroup, Button} from 'react-bootstrap'
import ReactDOM from 'react-dom'


class ChatInputField extends React.Component {
  constructor(props) {
    super(props);
  }
  messageInputSend(e){
    e.preventDefault()
    let { messageInputRef } = this.refs
    let messageInput = ReactDOM.findDOMNode(messageInputRef).value
    let { chatMessageSend, chat_id } = this.props
    chatMessageSend(messageInput, chat_id)
    ReactDOM.findDOMNode(messageInputRef).value = ""
  }
  render() {
    return (
      <div>
        <Grid>
          <Col>
            <form inline onSubmit={this.messageInputSend.bind(this)} >
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
            </form>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default ChatInputField;
