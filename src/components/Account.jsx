import React, { Component } from 'react';
import axios from 'axios';

class Account extends React.Component {
  constructor(props) {
    //allBind(this);
    super(props);

    this.state = {

    }
  }

  saveAndContinue() {
    console.log('Account data saved');
    console.log('this props ' + this.props.test);
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

      <button onClick={ this.saveAndContinue.bind(this) }>Save and Continue</button>
      </div>
    )
  }
}

export default Account;