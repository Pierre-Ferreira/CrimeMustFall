import React from 'react';
import ContactsInfoCardSmall from './contacts_info_card_small.jsx'

import {Panel} from 'react-bootstrap'

class MyContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = (
        <h4>My contacts</h4>
    )
    let {searchCursor} = (this.props || this.props.searchCursor) ? this.props : undefined
    searchCursor = searchCursor ? searchCursor : []
console.log('searchCursor',searchCursor)
    return (
      <div>
        <Panel header={title}>
          <div>
            {searchCursor.length !== 0 ? searchCursor.map((user, index) => (
              /* <div key={user._id}>{user._id} {user.profile.fullName} {user.profile.surname}</div> */
              <ContactsInfoCardSmall key={index} contactDetails={user} />
            )): 'No Result'}
          </div>
        </Panel>
      </div>
    );
  }
}

export default MyContactList;
