const express = require('express');
const { Pool, Client } = require('pg');
const client = new Client('postgres://localhost/checkout');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(bodyParser.json());
client.connect();

app.use('/', express.static(path.join(__dirname, '../dist/')));

/*
    POSTGRES ROUTES
*/

// Insert new record into users
app.post('/insert/account', ({ body: { name, email, password } }, res) => {
  client.query(`INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3);`, [name, email, password], (err, res) => {
      if (err) return console.log(err);
    });
  res.sendStatus(200);
});

// Insert new record into shipping
app.post('/insert/shipping', (
  { body: { email,
    primaryAddress = null,
    secondaryAddress = null,
    city,
    state,
    zip,
    phoneNumber
  } }, res) => {
  console.log(email, primaryAddress, secondaryAddress, city, state, zip, phoneNumber);
  client.query(`INSERT INTO shipping (email, primary_address, secondary_address, city, state, shipping_zip, phone)
      VALUES ($1, $2, $3, $4, $5, $6, $7);`,
    [email, primary_address, secondary_address, city, state, zip, phoneNumber], (err, res) => {
      if (err) return console.log(err);
    });
  res.sendStatus(200);
});

// Insert new record into payment
app.post('/insert/payment', ({ body: { email, creditCardNumber, expDate, cvv, billingZip } }, res) => {
  client.query(`INSERT INTO payment (email, credit_card_number, exp_date, cvv, billing_zip)
    VALUES ($1, $2, $3, $4, $5);`, [email, creditCardNumber, expDate, cvv, billingZip], (err, res) => {
      if (err) return console.log(err);
    });
  res.sendStatus(200);
});

app.listen(5000, () => console.log('Example app listening on port 5000!'));
