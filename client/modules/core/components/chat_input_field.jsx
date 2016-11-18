import React from 'react';
import {Grid, Col, Panel, Form, FormGroup, ControlLabel, FormControl, InputGroup, Button} from 'react-bootstrap'
import ReactDOM from 'react-dom'


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
  _autoTextSend(alertAutoMessage) {
    let { chatMessageSend, chat_id } = this.props
    chatMessageSend(alertAutoMessage, chat_id)
  }
  render() {
    let alertAutoTextMessages = {
      intruder: "INTRUDER ALERT!",
      hi_jacking: "HI-JACKING ALERT!",
      at_my_house: "AT MY HOUSE",
      at_my_neighbour: "AT MY NEIGHBOUR",
      at_this_position: "AT THIS POSITION:"
    }
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
            <Button  bsStyle={"warning"}
                     className="alertAutoTextBtn"
                     onClick={this._autoTextSend.bind(this,alertAutoTextMessages.intruder)}
            >
              INTRUDER
            </Button>
            <Button  bsStyle={"warning"}
                     className="alertAutoTextBtn"
                     onClick={this._autoTextSend.bind(this,alertAutoTextMessages.hi_jacking)}
            >              HI-JACKING
            </Button>
            <Button  bsStyle={"warning"}
                     className="alertAutoTextBtn"
                     onClick={this._autoTextSend.bind(this,alertAutoTextMessages.at_my_house)}
            >              AT MY HOUSE
            </Button>
            <Button  bsStyle={"warning"}
                     className="alertAutoTextBtn"
                     onClick={this._autoTextSend.bind(this,alertAutoTextMessages.at_my_neighbour)}
            >              AT NEIGHBOUR
            </Button>
            <Button  bsStyle={"warning"}
                     className="alertAutoTextBtn"
                     onClick={this._autoTextSend.bind(this,alertAutoTextMessages.at_this_position)}
            >              AT THIS POSITION:
            </Button>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default ChatInputField;
