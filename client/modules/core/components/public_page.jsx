import React from 'react';
import AccountsUIWrapper from '../../../../imports/ui/AccountsUIWrapper.jsx'

class PublicPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Please log in to use our system. </div>
        <div><AccountsUIWrapper /> </div>
      </div>
    );
  }
}

export default PublicPage;
