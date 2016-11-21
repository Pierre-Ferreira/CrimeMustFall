import React from 'react';
import AccountsUIWrapper from '../../../../imports/ui/AccountsUIWrapper.jsx'
import Login from '../../users/containers/login.js'
import Register from '../../users/containers/new_user.js'

class PublicPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Please log in to use our system. </div>
        {/* <div><AccountsUIWrapper /> </div> */}
        <div><Login /> </div>
      </div>
    );
  }
}

export default PublicPage;
