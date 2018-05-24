import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let state = e.target.name;
    let value  = e.target.value;
    this.setState({
      [state]: value
    })
  }

  saveAndContinue() {
    this.props.updateAppState('accountData', this.state);
    // Perform POST req with user info
    // then go to next step
    this.props.next();
  }

  render() {
    return (
      <div>
        <label>Name</label> 
        <input name="name" value ={this.state.name} onChange={e => this.handleChange(e)}/>
        
        <label>Email</label>
        <input name="email" value ={this.state.email} onChange={e => this.handleChange(e)} />

        <label>Password</label>
        <input name="password" value ={this.state.password} onChange={e => this.handleChange(e)} />

        <button onClick={ this.saveAndContinue.bind(this) }>Save and Continue</button>
      </div>
    )
  }
}

export default Account;