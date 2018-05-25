CREATE TABLE users (
  name VARCHAR(120),
  email VARCHAR(120) PRIMARY KEY,
  password VARCHAR(120)
);

CREATE TABLE shipping (
  user_email VARCHAR(120) PRIMARY KEY REFERENCES users(email),
  address_one VARCHAR(120),
  address_two VARCHAR(120),
  city VARCHAR(120),
  state VARCHAR(120),
  shipping_zip VARCHAR(120),
  phone INTEGER
);

CREATE TABLE payment (
  user_email VARCHAR(120) PRIMARY KEY REFERENCES users(email),
  credit_card_number VARCHAR(120),
  exp_date VARCHAR(120),
  cvv INTEGER,
  billing_zip INTEGER
);
