import React from 'react';
import ReactDOM from 'react-dom'

import { Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap'

class Login extends React.Component {
	_login(e) {
		e.preventDefault();
		const {loginUser} = this.props;
		const {emailRef, passwordRef} = this.refs;
		let email = ReactDOM.findDOMNode(emailRef).value
		let password = ReactDOM.findDOMNode(passwordRef).value
		loginUser(email, password);
 	// 	ReactDOM.findDOMNode(emailRef).value = ''
		// ReactDOM.findDOMNode(passwordRef).value = ''
	}
	render() {
		const {error} = this.props;
		return (
			<div>
				<h1>Login</h1>
				{error ? <p style={{color: 'red'}}>{error}</p> : null}
				{/* <form>
					<input  />
					<input  />
					<button  >Login</button>
				</form> */}
				<Form horizontal onSubmit={this._login.bind(this)}>
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
							<span>Don't have an account? </span><a href='/register'> Register here </a>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit">
								Sign in
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		)
	}
}

export default Login;
