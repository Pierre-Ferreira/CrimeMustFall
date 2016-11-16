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
console.log('messageInput1:',messageInput, chat_id)
    chatMessageSend(messageInput, chat_id)
  }
  render() {
    return (
      <div>
        <Grid>
          <Col>
            <Panel>
              <Form inline onSubmit={this.messageInputSend.bind(this)}  >
                <FormGroup>
                  <InputGroup>
                    <FormControl type="text" ref="messageInputRef"/>
                    <InputGroup.Button>
                      <Button type='submit' bsStyle={"primary"}>
                        SEND
                      </Button>
                    </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
              </Form>
            </Panel>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default ChatInputField;
