import React, { Component } from 'react';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  saveAndContinue() {
    console.log('Account data saved');
    console.log(props);
  }

  render() {
    return (
      <div>
        <label>Name</label> 
        <input type="text" ref="name" />

        <label>Email</label>
        <input type="password" ref="email" />

        <label>Password</label>
        <input type="email" ref="password" />

      <button onClick={ this.saveAndContinue }>Save and Continue</button>
      </div>
    )
  }
}

export default Account;