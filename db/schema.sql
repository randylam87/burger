CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (150) NULL,
    devoured BOOLEAN NULL,
    date TIMESTAMP NULL,
    PRIMARY KEY (id)
);