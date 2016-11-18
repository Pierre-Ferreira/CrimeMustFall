import React from 'react';
import {Panel, Col, Button} from 'react-bootstrap'

class ContactsInfoCardSmall extends React.Component {
  constructor(props) {
    super(props);
  }
  _connectContactRequest() {
    let {_id} = this.props.contactDetails
    let {connectContactRequest} = this.props
    connectContactRequest(_id)
  }
  _contactConnectRequestConfirm() {
    let {_id} = this.props.contactDetails
    let {contactConnectRequestConfirm} = this.props
    contactConnectRequestConfirm(_id)
  }
  render() {
    let {fullName, surname, nickname, address, suburb, city, contactNo} = this.props.contactDetails.profile
    let {userConnectRequest, contactConnectRequest, contactConnected} = this.props.contactDetails

    let btnBsStyle = () => {
      if (userConnectRequest || contactConnectRequest || contactConnected) {
        if (contactConnected)
          return "default"
        if (userConnectRequest)
          return "warning"
        if (contactConnectRequest)
          return "danger"
      } else {
        return "info"
      }
    }
    let btnDisabledInd = () => {
      if (userConnectRequest || contactConnected)
        return true
      else
        return false
    }
    let btnText = () => {
      if (userConnectRequest || contactConnectRequest || contactConnected) {
        if (contactConnected)
          return "Connected"
        if (userConnectRequest)
          return "Requested"
        if (contactConnectRequest)
          return "Confirm"
      } else {
        return "Connect"
      }
    }
    let btnClickEvent =() => {
      if (userConnectRequest || contactConnectRequest || contactConnected) {
        if (userConnectRequest || contactConnected)
          return () => {}
        if (contactConnectRequest)
          return this._contactConnectRequestConfirm.bind(this)
      } else {
        return this._connectContactRequest.bind(this)
      }
    }
    let panelBsStyle = () => {
      if (contactConnected) {
          return "primary"
      } else {
        return "primary"
      }
    }
    const title = (
      <div>
        {/* <h4>Contacts</h4> */}
        <Button bsStyle={btnBsStyle()}
                onClick={btnClickEvent()}
                disabled={btnDisabledInd()}
                >
                  {btnText()}
        </Button>
      </div>
    );
    return (
      <Col sm={4}>
        <Panel header={title} bsStyle={panelBsStyle()} className="contactsInfoCardSmallPanel">
            <div><b>Name:</b> {fullName} {surname}</div>
            <div><b>A.k.a:</b> {nickname}</div>
            <div><b>Address:</b> {address} </div>
            <div><b>Suburb:</b> {suburb}</div>
            <div><b>City:</b> {city}</div>
            <div><b>Contact No:</b> {contactNo}</div>
        </Panel>
      </Col>
    );
  }
}

export default ContactsInfoCardSmall;
