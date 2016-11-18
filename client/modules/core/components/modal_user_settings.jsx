import React from 'react';
import { Modal, Button } from 'react-bootstrap'

import SettingsUserInfo from '../containers/settings_user_info'

class ModalUserSettings extends React.Component {
  render () {
    let showModal = this.props.showModal
    return (
      <div>
        <Modal show={showModal} onHide={this.close}>
          {/* <Modal.Header closeButton>
            <Modal.Title>PLEASE ENTER ALL INFO</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <SettingsUserInfo />
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    )
  }
}

export default ModalUserSettings;
