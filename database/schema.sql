CREATE TABLE users (
  name VARCHAR(120),
  email VARCHAR(120) PRIMARY KEY,
  password VARCHAR(120)
);

CREATE TABLE shipping (
  email VARCHAR(120) PRIMARY KEY,
  primary_address VARCHAR(120),
  secondary_address VARCHAR(120),
  city VARCHAR(120),
  state VARCHAR(120),
  shipping_zip VARCHAR(120),
  phone BIGINT
);

CREATE TABLE payment (
  email VARCHAR(120) PRIMARY KEY,
  credit_card_number BIGINT,
  exp_date VARCHAR(120),
  cvv INTEGER,
  billing_zip INTEGER
);
