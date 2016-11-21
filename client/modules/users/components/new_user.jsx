import React from 'react';
import ReactDOM from 'react-dom'

import { Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap'

class NewUser extends React.Component {
	_createUser(e) {
		e.preventDefault();
		const {create} = this.props;
		// const {email, password} = this.refs;
		// create(email.value, password.value);

		// const {loginUser} = this.props;
		const {emailRef, passwordRef} = this.refs;
		let email = ReactDOM.findDOMNode(emailRef).value
		let password = ReactDOM.findDOMNode(passwordRef).value
		create(email, password);
		// 	ReactDOM.findDOMNode(emailRef).value = ''
			// ReactDOM.findDOMNode(passwordRef).value = ''
	}
	render() {
		const {error} = this.props;
		return (
			<div>
				<h1>Register</h1>
				{error ? <p style={{color: 'red'}}>{error}</p> : null}
				<Form horizontal onSubmit={this._createUser.bind(this)}>
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							Email
						</Col>
						<Col sm={8}>
							<FormControl ref="emailRef" type="email" placeholder="Email" />
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} sm={2}>
							Password
						</Col>
						<Col sm={8}>
							<FormControl ref="passwordRef" type="password" placeholder="Password" />
							<span>Already have an account? </span><a href='/login'>Login Here</a>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit">
								Register
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		)
	}
}

export default NewUser;
