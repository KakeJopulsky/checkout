import React, { Component } from 'react';
import Landing from './components/Landing';
import Account from './components/Account';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import Confirm from './components/Confirm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  // 0 - 4
      step: 0,
      accountData: '',
      shippingData: '',
      paymentData: '',
    }
    this.nextStep = this.nextStep.bind(this);
    this.updateAppState = this.updateAppState.bind(this);
  }

  nextStep() {
    this.state.step === 4 
      ? this.setState({ step: 0 })
      : this.setState({ step: this.state.step + 1 })
  }

  updateAppState(payload, state) {
    this.setState({
      [payload]: state
    })
  }

  render() {
    switch (this.state.step) {
      case 0:
        return <Landing next={this.nextStep} />
      case 1:
        return <Account next={this.nextStep} updateAppState={this.updateAppState} />
      case 2:
        return <Shipping next={this.nextStep} updateAppState={this.updateAppState} />
      case 3:
        return <Payment next={this.nextStep} updateAppState={this.updateAppState} />
      case 4:
        return <Confirm next={this.nextStep} data={this.state}/>
    }
  }
}

export default App;