import React from 'react';
// import crimeMustFallImg from '../../../../public'

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4 className="homePageHeader">Homepage of Community CrimeFight!</h4>
        <img className="HomepageImg"
             src="/CrimeMustFall.png"
             alt="Homepage" />
      </div>

    );
  }
}

export default Homepage;
