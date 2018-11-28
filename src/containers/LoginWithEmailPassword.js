import React from 'react';
import {connect} from 'react-redux';
import {FormGroup, Form, ControlLabel, FormControl, Col, Button} from 'react-bootstrap';
import {signInwithEmailPassword} from "../actions/login";
import {bindActionCreators} from 'redux';

class LoginWithEmailPassword extends React.Component {

  constructor(props) {
    super(props);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {emailAddress: '', passwordValue: ''}
  }

  loginSubmit(e) {
    e.preventDefault();

    this.props.actions.signInwithEmailPassword(this.state.emailAddress, this.state.passwordValue);
  }

  handleEmailChange(event) {
    this.setState({emailAddress: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({passwordValue: event.target.value});
  }


  render() {
    return (
      <Form horizontal={true} onSubmit={this.loginSubmit}>
        <FormGroup controlId='formHorizontalEmail'>
          <Col componentClass={ControlLabel} sm={2}> Email Address </Col>
          <Col sm={10}>
            <FormControl required type='email' value={this.state.emailAddress} onChange={this.handleEmailChange}
                         placeholder='Enter email'/>
          </Col>
        </FormGroup>

        <FormGroup controlId='formHorizontalPassword'>
          <Col componentClass={ControlLabel} sm={2}> Password </Col>
          <Col sm={10}>
            <FormControl required type='password' value={this.state.passwordValue} onChange={this.handlePasswordChange}
                         placeholder='Enter password'/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <div className='error'> {(this.props.loginError) ? ('*' + this.props.loginError) : ''}</div>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button className='uoRButton' type='submit'>Login</Button>
          </Col>
        </FormGroup>

      </Form>
    );
  }
}

LoginWithEmailPassword.propTypes = {
  actions: React.PropTypes.object.isRequired,
  signInwithEmailPassword: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    loginStatus: state.loginReducer.loginStatus,
    loginError: state.loginReducer.loginError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      signInwithEmailPassword,
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithEmailPassword);
