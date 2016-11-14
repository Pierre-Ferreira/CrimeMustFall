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
    // let {contactsRequestedByMe} = (this.props || this.props.contactsRequestedByMe) ? this.props : undefined
    let {contactsRequestedByMe} = this.props
console.log('contactsRequestedByMe1',contactsRequestedByMe)
    contactsRequestedByMe = contactsRequestedByMe ? contactsRequestedByMe : []
console.log('contactsRequestedByMe2',contactsRequestedByMe)
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
