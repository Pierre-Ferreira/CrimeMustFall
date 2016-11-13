import React from 'react';
import {Panel, Col, Button} from 'react-bootstrap'

class ContactsInfoCardSmall extends React.Component {
  constructor(props) {
    super(props);
  }
  _connectContactRequest() {
    let {_id} = this.props.contactDetails
console.log("_id:",_id)
    let {connectContactRequest} = this.props
    connectContactRequest(_id)
  }
  render() {
    let {fullName, surname, nickname} = this.props.contactDetails.profile
    let {userConnectRequest, contactConnectRequest} = this.props.contactDetails

    let btnBsStyle = () => {
      if (userConnectRequest || contactConnectRequest) {
        if (userConnectRequest)
          return "warning"
        if (contactConnectRequest)
          return "danger"
      } else {
        return "info"
      }
    }
    let btnDisabledInd = () => {
      if (userConnectRequest)
        return true
      else
        return false
    }
    let btnText = () => {
      if (userConnectRequest || contactConnectRequest) {
        if (userConnectRequest)
          return "Requested"
        if (contactConnectRequest)
          return "Confirm"
      } else {
        return "Connect"
      }
    }
    let btnClickEvent = this._connectContactRequest.bind(this)

    const title = (
      <div>
        {/* <h4>Contacts</h4> */}
        <Button bsStyle={btnBsStyle()}
                onClick={btnClickEvent}
                disabled={btnDisabledInd()}>
                  {btnText()}
        </Button>
      </div>
    );
    return (
      <Col sm={4}>
        <Panel header={title} bsStyle="primary">
            <div><b>Name:</b> {fullName} {surname}</div>
            <div><b>A.k.a:</b> {nickname}</div>
        </Panel>
      </Col>
    );
  }
}

export default ContactsInfoCardSmall;
