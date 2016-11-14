import React from 'react';
import ContactsInfoCardSmall from '../containers/contacts_info_card_small.js'

import {Panel} from 'react-bootstrap'

class MyContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = (
        <h4>My contacts</h4>
    )
    let {myContacts} = this.props
    myContacts = myContacts ? myContacts : []
console.log('myContacts',myContacts)
    return (
      <div>
        <Panel header={title}></Panel>
        <div>
          {myContacts.length !== 0 ? myContacts.map((contact_id, index) => (
            <ContactsInfoCardSmall key={index} contactID={contact_id} />
          )): 'No Result'}
        </div>
      </div>
    );
  }
}

export default MyContactList;
