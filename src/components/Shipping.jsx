import React, { Component } from 'react';
import axios from 'axios';

class Shipping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      primaryAddress: '',
      secondaryAddress: '',
      city: '',
      state: '',
      zip: '',
      phoneNumber: '',
    }
  }

  handleChange(e) {
    let state = e.target.name;
    let value  = e.target.value;
    this.setState({
      [state]: value
    })
  }

  async saveAndContinue() {
    this.props.updateAppState('shippingData', this.state);
    await axios.post('/insert/shipping', this.state)
      .then(res => console.log(this.props.next()))
      .then(err => console.log(err));
    //this.props.next();
  }

  render() {
    return (
      <div>
        <label>Address</label> 
        <input name="primaryAddress" value ={this.state.primaryAddress} onChange={e => this.handleChange(e)}/>
        
        <label>Secondary Address</label>
        <input name="secondaryAddress" value ={this.state.secondaryAddress} onChange={e => this.handleChange(e)} />

        <label>City</label>
        <input name="city" value ={this.state.city} onChange={e => this.handleChange(e)} />
        
        <label>State</label>
        <input name="state" value ={this.state.state} onChange={e => this.handleChange(e)} />

         <label>Zip</label>
        <input name="zip" value ={this.state.zip} onChange={e => this.handleChange(e)} />

         <label>Phone number</label>
        <input name="phoneNumber" value ={this.state.phoneNumber} onChange={e => this.handleChange(e)} />

        <button onClick={ this.saveAndContinue.bind(this) }>Save and Continue</button>
      </div>
    )
  }
}

export default Shipping;