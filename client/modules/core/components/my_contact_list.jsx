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
    let {my_contacts} = (this.props || this.props.my_contacts) ? this.props : undefined
    my_contacts = my_contacts ? my_contacts : []
console.log('my_contacts',my_contacts)
    return (
      <div>
        <Panel header={title}>
          <div>
            {my_contacts.length !== 0 ? my_contacts.map((my_contact_id, index) => (
              <ContactsInfoCardSmall key={index} contactID={my_contact_id} />
            )): 'No Result'}
          </div>
        </Panel>
      </div>
    );
  }
}

export default MyContactList;
