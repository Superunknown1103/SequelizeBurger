CREATE DATABASE burgers;
USE burgerlist_db;

CREATE TABLE burgerlist
(
	id int NOT NULL AUTO_INCREMENT,
	burger varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);
