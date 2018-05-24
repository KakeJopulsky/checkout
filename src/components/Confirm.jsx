import React, { Component } from 'react';

const Confirm = (props) => (
  <div>
    <table>
    <tbody>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
    <tr>
      <td>{props.data.accountData.name}</td>
      <td>{props.data.accountData.email}</td>
    </tr>

    <tr>
      <th>Primary address</th>
      <th>Secondary address</th>
    </tr>
    <tr>
      <td>{props.data.shippingData.addressOne}</td>
      <td>{props.data.shippingData.addressTwo}</td>
    </tr>

    <tr>
      <th>City</th>
      <th>State</th>
      <th>Zip</th>
    </tr>
    <tr>
      <td>{props.data.shippingData.city}</td>
      <td>{props.data.shippingData.state}</td>
      <td>{props.data.shippingData.zip}</td>
    </tr>

    <tr>
      <th>Phone number</th>
    </tr>
    <tr>
      <td>{props.data.shippingData.phoneNumber}</td>
    </tr>

    <tr>
      <th>Credit card number</th>
      <th>Expiration date</th>
      <th>CVV</th>
      <th>Billing zip</th>
    </tr>
    <tr>
      <td>{props.data.paymentData.creditCardNumber}</td>
      <td>{props.data.paymentData.expDate}</td>
      <td>{props.data.paymentData.cvv}</td>
      <td>{props.data.paymentData.billingZip}</td>
    </tr>

    </tbody>
    </table>
    <button onClick={() => props.next()}>Save and Continue</button>
  </div>
);

export default Confirm;