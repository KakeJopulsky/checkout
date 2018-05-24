import React, { Component } from 'react';

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creditCardNumber: '',
      expDate: '',
      cvv: '',
      billingZip: '',
    }
  }

  handleChange(e) {
    let state = e.target.name;
    let value = e.target.value;
    this.setState({
      [state]: value
    });
  }

  saveAndContinue() {
    this.props.updateAppState('paymentData', this.state);
    this.props.next();
  }


  render() {
    return (
      <div>
        <label>Credit card #</label> 
        <input name="creditCardNumber" value ={this.state.creditCardNumber} onChange={e => this.handleChange(e)}/>
        
        <label>Expiration date</label>
        <input name="expDate" value ={this.state.expDate} onChange={e => this.handleChange(e)} />

        <label>CVV #</label>
        <input name="cvv" value ={this.state.cvv} onChange={e => this.handleChange(e)} />
        
        <label>Billing zip code</label>
        <input name="billingZip" value ={this.state.billingZip} onChange={e => this.handleChange(e)} />

        <button onClick={ this.saveAndContinue.bind(this) }>Save and Continue</button>
      </div>
    )
  }
}

export default Payment;