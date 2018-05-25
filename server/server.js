const express = require('express');
const { Pool, Client } = require('pg');
const client = new Client('postgres://localhost/checkout');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
client.connect();

const jsonParser = bodyParser.json()


/*
    POSTGRES ROUTES
*/
// Insert new record into users
app.post('/insert/account', ({body: { name, email, password }}, res) => {
  async function newAccount(name, email, password) {
    await client.query(`INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3);`,[name, email, password], (err, res) => {
            if (err) return console.log(err);
          });
    }
    res.sendStatus(200);
});

// Insert new record into shipping
app.post('/insert/shipping', (
  {body: { email, primary_address = null, secondary_address = null,
  city, state, zip, phoneNumber }}, res) => {
    
    client.query(`INSERT INTO shipping (email, primary_address, secondary_address, city, state, shipping_zip, phone)
      VALUES ($1, $2, $3, $4, $5, $6, $7);`,
      [email, primary_address, secondary_address, city, state, zip, phoneNumber], (err, res) => {
        if (err) return console.log(err);
     });
    res.sendStatus(200);
});

// Insert new record into payment
app.post('/insert/payment', ({body: { name, email, password }}, res) => {
  async function newAccount(name, email, password) {
    await client.query(`INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3);`,[name, email, password], (err, res) => {
            if (err) return console.log(err);
          });
    }
    res.sendStatus(200);
});

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(5000, () => console.log('Example app listening on port 5000!'));
