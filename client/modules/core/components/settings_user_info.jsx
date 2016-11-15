import React from 'react';
import ReactDOM from 'react-dom';
var _ = require('lodash');
import { Col, Grid, Panel, Button, ControlLabel, HelpBlock, FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';


class SettingsUserInfo extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let {clearErrors} = this.props
console.log('componentWillMount', this.props.saveSuccess)
    // Clear up all errors.
    clearErrors();
console.log('componentWillMount', this.props.saveSuccess)
  }
  // componentWillUnmount() {
  //   let {clearErrors} = this.props
  //   // Clear up all errors.
  //   clearErrors();
  // }
  saveUserInfo(e) {
    if (e && e.preventDefault)
      e.preventDefault()
    let { fullNameRef, surnameRef, nicknameRef, addressRef, suburbRef, cityRef, contactNoRef} = this.refs
    let fullName = ReactDOM.findDOMNode(fullNameRef).value
    let surname = ReactDOM.findDOMNode(surnameRef).value
    let nickname = ReactDOM.findDOMNode(nicknameRef).value
    let address = ReactDOM.findDOMNode(addressRef).value
    let suburb = ReactDOM.findDOMNode(suburbRef).value
    let city = ReactDOM.findDOMNode(cityRef).value
    let contactNo = ReactDOM.findDOMNode(contactNoRef).value

    let userInfoObj = {
      fullName,
      surname,
      nickname,
      address,
      suburb,
      city,
      contactNo
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
    const {fullName, surname, nickname, address, suburb, city, contactNo} = (this.props.user_profile.profile)?this.props.user_profile.profile:'';

    return (
      <Grid>
        <Col xs={12} sm={10} smOffset={1} md={6} mdOffset={3}>
          <Panel>
            <h1>My Info</h1>
            <div style={styles.schemaError}>{this.props.schemaError}</div>
            <form onSubmit={this.saveUserInfo.bind(this)}  >
              <FormGroup validationState={this.props.saveSuccess===''?"success":this.props.fullNameError?"error":"success"}>
                <ControlLabel>Full Names *</ControlLabel>
                <FormControl type="text" ref="fullNameRef" defaultValue={fullName}/>
                {this.props.saveSuccess!==''?<FormControl.Feedback />:""}
                <div style={styles.inputRequiredError}>{this.props.fullNameError}</div>
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup validationState={this.props.saveSuccess===''?"success":this.props.surnameError?"error":"success"}>
                <ControlLabel>Surname *</ControlLabel>
                <FormControl type="text" ref="surnameRef" defaultValue={surname}/>
                {this.props.saveSuccess!==''?<FormControl.Feedback />:""}
                <div style={styles.inputRequiredError}>{this.props.surnameError}</div>
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup validationState={this.props.saveSuccess===''?"success":this.props.nicknameError?"error":"success"}>
                <ControlLabel>Nickname *</ControlLabel>
                <FormControl type="text" ref="nicknameRef" defaultValue={nickname}/>
                {this.props.saveSuccess!==''?<FormControl.Feedback />:""}
                <div style={styles.inputRequiredError}>{this.props.nicknameError}</div>
                <HelpBlock>If none enter your first name.</HelpBlock>
              </FormGroup>
              <FormGroup validationState={this.props.saveSuccess===''?"success":this.props.addressError?"error":"success"}>
                <ControlLabel>Street Address *</ControlLabel>
                <FormControl type="text" ref="addressRef" defaultValue={address}/>
                {this.props.saveSuccess!==''?<FormControl.Feedback />:""}
                <div style={styles.inputRequiredError}>{this.props.addressError}</div>
                <HelpBlock>Include Complex Name, Complex Number if needed.</HelpBlock>
              </FormGroup>
              <FormGroup validationState={this.props.saveSuccess===''?"success":this.props.suburbError?"error":"success"}>
                <ControlLabel>Suburb *</ControlLabel>
                <FormControl type="text" ref="suburbRef" defaultValue={suburb}/>
                {this.props.saveSuccess!==''?<FormControl.Feedback />:""}
                <div style={styles.inputRequiredError}>{this.props.suburbError}</div>
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup validationState={this.props.saveSuccess===''?"success":this.props.cityError?"error":"success"}>
                <ControlLabel>City *</ControlLabel>
                <FormControl type="text" ref="cityRef" defaultValue={city}/>
                {this.props.saveSuccess!==''?<FormControl.Feedback />:""}
                <div style={styles.inputRequiredError}>{this.props.cityError}</div>
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup validationState={this.props.saveSuccess===''?"success":this.props.contactNoError?"error":"success"}>
                <ControlLabel>Contact Number *</ControlLabel>
                <FormControl type="text" ref="contactNoRef" defaultValue={contactNo}/>
                {this.props.saveSuccess!==''?<FormControl.Feedback />:""}
                <div style={styles.inputRequiredError}>{this.props.contactNoError}</div>
                <HelpBlock></HelpBlock>
              </FormGroup>
              <Button type='submit' bsSize="large"
                bsStyle={this.props.saveSuccess===''?"primary":this.props.saveSuccess===false?"danger":"success"} >
                {this.props.saveSuccess===''?" SAVE ":this.props.saveSuccess===false?" ERROR ":" SAVED "}
                </Button>
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
