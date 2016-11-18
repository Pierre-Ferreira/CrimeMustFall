import React from 'react';
import ContactsInfoCardSmall from '../containers/contacts_info_card_small.js'

import { Panel } from 'react-bootstrap'

class ContactsRequestsToMeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = (
        <h4>Requests to me</h4>
    )
    let {contactsRequestsToMe} = this.props
    contactsRequestsToMe = contactsRequestsToMe ? contactsRequestsToMe : []
    return (
      <div>
        <Panel header={title}></Panel>
        <div>
          {contactsRequestsToMe.length !== 0 ? contactsRequestsToMe.map((contact_id, index) => (
            <ContactsInfoCardSmall key={index} contactID={contact_id} />
          )): 'No Result'}
        </div>
      </div>
    );
  }
}

export default ContactsRequestsToMeList;
