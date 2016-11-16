import React from 'react';
import ReactDOM from 'react-dom'

import ContactsInfoCardSmall from '../containers/contacts_info_card_small.js'

import {Form, FormGroup, FormControl, ControlLabel, Col, Button, Panel} from 'react-bootstrap'


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
    let formattedSearchStr = (searchStr.length > 0 ? searchStr.trim() : '')
    searchEmergencyContacts(formattedSearchStr)
  }
  render() {
    const title = (
        <h4>Contacts Search</h4>
    )
    let {searchCursor} = this.props
console.log('searchCursor1',searchCursor)
    searchCursor = searchCursor ? searchCursor : []
console.log('searchCursor2',searchCursor)
    return (
      <div>
        <Panel header={title}>
          <Form horizontal>
            <FormGroup controlId="formEmergencyContactsSearch">
              <ControlLabel></ControlLabel>
              {/* {' '} */}
              <Col sm={6} smOffset={3}>
                <FormControl ref="contactSearchRef" type="text" placeholder="Type in Name, Surname, Street, Suburb or City" onChange={this.searchStringFn.bind(this)}/>
              </Col>
            </FormGroup>
          </Form>
        </Panel>
        <div>
          {searchCursor.length !== 0 ? searchCursor.map((user, index) => {
            return <ContactsInfoCardSmall key={index} contactID={user} />
          }): 'No Result'}
        </div>
      </div>
    )
  }
}

export default EmergencyContactsSearch;
