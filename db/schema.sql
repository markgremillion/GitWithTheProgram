### Schema

CREATE DATABASE restaurants_db;
USE restaurants_db;

CREATE TABLE restaurants
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	address varchar(255) NOT NULL,
	typeOfFood varchar(255) NOT NULL,
	rate FLOAT(1),
	price varchar(255) NOT NULL, 
	bio varchar(255),
	PRIMARY KEY (id)
);
