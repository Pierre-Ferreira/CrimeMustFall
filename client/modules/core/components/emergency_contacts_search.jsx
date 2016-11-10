import React from 'react';
import ReactDOM from 'react-dom'
import {Form, FormGroup, FormControl, ControlLabel, Col, Button} from 'react-bootstrap'


class EmergencyContactsSearch extends React.Component{
  constructor(props) {
    super(props);
  }
  searchStringFn (e) {
    e.preventDefault();
    let { contactSearchRef } = this.refs
    let searchStr = ReactDOM.findDOMNode(contactSearchRef).value
    console.log("SUBMITTING!", searchStr)
    let {searchEmergencyContacts} = this.props
    searchEmergencyContacts(searchStr)
  }
  render() {
    let {searchCursor} = this.props.searchCursor?this.props:[]
console.log('searchCursor',searchCursor)
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="formEmergencyContactsSearch">
            <ControlLabel></ControlLabel>
            {' '}
            <Col sm={6} smOffset={3}>
              <FormControl ref="contactSearchRef" type="text" placeholder="Type in Name, Surname, Street, Suburb or City" onChange={this.searchStringFn.bind(this)}/>
            </Col>
          </FormGroup>
        </Form>
        {searchCursor ? searchCursor.map((user) => (
          <div key={user._id}>{user._id} {user.profile.fullName} {user.profile.surname}</div>
        )): ''}
      </div>
    )
  }
}

export default EmergencyContactsSearch;
