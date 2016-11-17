import React from 'react';
import ContactsInfoCardSmall from '../containers/contacts_info_card_small.js'

import { Panel } from 'react-bootstrap'

class ContactsRequestedByMeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = (
        <h4>Contacts Requested By Me</h4>
    )
    let {contactsRequestedByMe} = this.props
    contactsRequestedByMe = contactsRequestedByMe ? contactsRequestedByMe : []
    return (
      <div>
        <Panel header={title}></Panel>
        <div>
          {contactsRequestedByMe.length !== 0 ? contactsRequestedByMe.map((contact_id, index) => (
            <ContactsInfoCardSmall key={index} contactID={contact_id} />
          )): 'No Result'}
        </div>
      </div>
    );
  }
}

export default ContactsRequestedByMeList;
