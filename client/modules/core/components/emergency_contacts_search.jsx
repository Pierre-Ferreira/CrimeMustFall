import React from 'react';
import ReactDOM from 'react-dom'

import ContactsInfoCardSmall from '../containers/contacts_info_card_small.js'

import {Form, FormGroup, FormControl, ControlLabel, Col, Button, Panel} from 'react-bootstrap'


class EmergencyContactsSearch extends React.Component{
  constructor(props) {
    super(props);
  }
  _searchStringFn (e) {
    e.preventDefault();
    let { contactSearchRef } = this.refs
    let searchStr = ReactDOM.findDOMNode(contactSearchRef).value
    let {searchEmergencyContacts} = this.props
    let formattedSearchStr = (searchStr.length > 0 ? searchStr.trim() : '')
    searchEmergencyContacts(formattedSearchStr)
  }
  render() {
    const title = (
        <h4>Contacts Search</h4>
    )
    let {searchCursor} = this.props
    searchCursor = searchCursor ? searchCursor : []
    return (
      <div>
        <Panel header={title}>

        </Panel>
        <Form horizontal>
          <FormGroup controlId="formEmergencyContactsSearch">
            <ControlLabel></ControlLabel>
            <Col sm={8} smOffset={2}>
              <FormControl className="contactSearchInput" ref="contactSearchRef" type="text" placeholder="Type in Name, Surname, Street, Suburb or City" onChange={this._searchStringFn.bind(this)}/>
            </Col>
          </FormGroup>
        </Form>
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
