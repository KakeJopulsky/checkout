const express = require('express');
const { Pool, Client } = require('pg');
const client = new Client('postgres://localhost/checkout');
const app = express();;
client.connect();

client.query('SELECT * from users where name="jack attack"', (err, res) => {
  console.log(err ? err.stack : res.fields);
  client.end();
});


// client.query('INSERT INTO users VALUES ($1, $2, $3)', ['jack attack', 'jackattack@gmail.com', 'hunter2'], (err, res) =>{
//   if(err) return console.log(err);
//   console.log(res);
// })
// client.query({
//   name: 'jack attack',
//   email: 'jackattack@fun.com',
//   password: 'hunter2',
//   address_one: '944 market st'
// });
//   city: 'San Francisco',
//   state: 'California',
//   shipping_zip: 94611,
//   phone: 4154647809,
//   credit_card_number: 1111222233334444,
//   exp_date: 0221,
//   cvv: 420,
//   billing_zip: 94611
// });



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(5000, () => console.log('Example app listening on port 5000!'))