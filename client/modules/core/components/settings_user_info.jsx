import React from 'react';
import ReactDOM from 'react-dom';
var _ = require('lodash');
import { Col, Grid, Panel, Button, ControlLabel, HelpBlock, FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';


class SettingsUserInfo extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    let {clearErrors} = this.props
    // Clear up all errors.
    clearErrors();
  }
  saveUserInfo(e) {
    if (e && e.preventDefault)
      e.preventDefault()
    let { fullNameRef, surnameRef, nicknameRef } = this.refs
    let fullName = ReactDOM.findDOMNode(fullNameRef).value
    let surname = ReactDOM.findDOMNode(surnameRef).value
    let nickname = ReactDOM.findDOMNode(nicknameRef).value
    let userInfoObj = {
      fullName,
      surname,
      nickname,
    }
    let {saveUserInfoAction, clearErrors} = this.props
    // Clear up all errors.
    clearErrors();
    // Call save action method.
    saveUserInfoAction(userInfoObj)
  }
  render() {
    // Clone the CSS styles.
    var styles = _.cloneDeep(this.constructor.styles);
    const {fullName, surname} = (this.props.user_profile.profile)?this.props.user_profile.profile:'';
    return (
      <Grid>
        <Col xs={12} sm={6} smOffset={3}>
          <Panel>
            <h1>My Info</h1>
            <div style={styles.schemaError}>{this.props.schemaError}</div>
            <form onSubmit={this.saveUserInfo.bind(this)}  >
              <FormGroup validationState={this.props.fullNameError?"error":"success"}>
                <ControlLabel>Full Names *</ControlLabel>
                <FormControl type="text" ref="fullNameRef" defaultValue={fullName}/>
                <FormControl.Feedback />
                <div style={styles.inputRequiredError}>{this.props.fullNameError}</div>
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup validationState={this.props.surnameError?"error":"success"}>
                <ControlLabel>Surname *</ControlLabel>
                <FormControl type="text" ref="surnameRef" defaultValue={surname}/>
                <FormControl.Feedback />
                <div style={styles.inputRequiredError}>{this.props.surnameError}</div>
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup validationState={this.props.nicknameError?"error":"success"}>
                <ControlLabel>Nickname *</ControlLabel>
                <FormControl type="text" ref="nicknameRef" defaultValue=""/>
                <FormControl.Feedback />
                <div style={styles.inputRequiredError}>{this.props.nicknameError}</div>
                <HelpBlock>If none enter your first name.</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Street Address *</ControlLabel>
                <FormControl type="text" ref="addressRef" />
                <HelpBlock>Include Complex Name, Complex Number if needed.</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Suburb *</ControlLabel>
                <FormControl type="text" ref="suburbRef" />
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>City *</ControlLabel>
                <FormControl type="text" ref="cityRef" />
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Contact Number *</ControlLabel>
                <FormControl type="text" ref="contactNoRef"/>
                <HelpBlock></HelpBlock>
              </FormGroup>
              <Button type='submit' bsSize="large" bsStyle={this.props.saveSuccess===false?"danger":"primary"} > SAVE </Button>
            </form>
          </Panel>
        </Col>
      </Grid>
    );
  }
}
SettingsUserInfo.styles = {
  inputRequiredError: {
    color: '#a94442'
  },
  schemaError: {
    color: '#a94442',
    fontWeight: 'bold'
  },
}
export default SettingsUserInfo;
