CREATE DATABASE blog;

CREATE TABLE address (

    add_uuid UUID NOT NULL PRIMARY KEY,
    street_num INTEGER,
    street VARCHAR,
    postal_code VARCHAR,
    city VARCHAR,
    country VARCHAR
);

CREATE TYPE gender AS ENUM ('Male', 'Female');

CREATE TABLE user_tbl (
    user_uuid UUID NOT NULL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    gender gender NOT NULL,
    email VARCHAR NOT NULL,
    phone_number INTEGER,
    address_uuid UUID REFERENCES address(add_uuid),
    date_created DATE NOT NULL
);

CREATE TABLE posts(
    post_uuid UUID NOT NULL PRIMARY KEY,
    title VARCHAR(100) NOT NULL, 
    description VARCHAR(100) NOT NULL,
    content VARCHAR(900) NOT NULL
);