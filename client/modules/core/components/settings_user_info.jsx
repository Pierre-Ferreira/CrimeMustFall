import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Grid, Panel, Button, ControlLabel, HelpBlock, FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';


class SettingsUserInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  saveUserInfo(e) {
    if (e && e.preventDefault)
      e.preventDefault()
    let { fullNameRef, surnameRef } = this.refs
    let userInfoObj = {
      fullName: ReactDOM.findDOMNode(fullNameRef).value,
      surname: ReactDOM.findDOMNode(surnameRef).value,

    }
    let {saveUserInfoAction} = this.props
    saveUserInfoAction(userInfoObj)
  }
  render() {
    const {fullName, surname} = this.props.user_profile.profile;
    return (
      <Grid>
        <Col xs={12} sm={6} smOffset={3}>
          <Panel>
            <h1>My Info</h1>
            <form onSubmit={this.saveUserInfo.bind(this)}  >
              <FormGroup>
                <ControlLabel>Full Names *</ControlLabel>
                <FormControl type="text" ref="fullNameRef" defaultValue={fullName}/>
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Surname</ControlLabel>
                <FormControl type="text" ref="surnameRef" defaultValue={surname}/>
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Street Address</ControlLabel>
                <FormControl type="text" ref="addressRef" />
                <HelpBlock>Include Complex Name, Complex Number if needed.</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Suburb</ControlLabel>
                <FormControl type="text" ref="suburbRef" />
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>City</ControlLabel>
                <FormControl type="text" ref="cityRef" />
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Contact Number</ControlLabel>
                <FormControl type="text" ref="contactNoRef"/>
                <HelpBlock></HelpBlock>
              </FormGroup>
              <Button type='submit' bsSize="large" bsStyle="primary" > SAVE </Button>
            </form>
          </Panel>
        </Col>
      </Grid>
    );
  }
}

export default SettingsUserInfo;
