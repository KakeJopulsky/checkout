import React, { Component } from 'react';

class Shipping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addressOne: '',
      addressTwo: '',
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

  saveAndContinue() {
    this.props.updateAppState('shippingData', this.state);
    // Get form data from state
    // Save to db
    this.props.next();
  }

  render() {
    return (
      <div>
        <label>Address</label> 
        <input name="addressOne" value ={this.state.addressOne} onChange={e => this.handleChange(e)}/>
        
        <label>Secondary Address</label>
        <input name="addressTwo" value ={this.state.addressTwo} onChange={e => this.handleChange(e)} />

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