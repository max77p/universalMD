DROP DATABASE IF EXISTS mainUMD;

CREATE DATABASE mainUMD;

USE mainUMD;

CREATE TABLE appointments(
`name` VARCHAR (50) NOT NULL,
`specialty` VARCHAR (25) NOT NULL,
`location_city` VARCHAR (30) NOT NULL,
`rating` FLOAT (3,2) NOT NULL,
`contact` INT NOT NULL,
`gender` VARCHAR(10) NOT NULL
);

CREATE TABLE patients(
`name` VARCHAR (50) NULL,
`email` VARCHAR (25) NULL,
`location` VARCHAR (30) NULL,
`gender` VARCHAR(10) NULL,
`symptoms` TEXT NULL
);



INSERT INTO appointments (name,specialty,location_city,rating,contact,gender) VALUES ("max","doc","toronto",4.2,41323232,"male");

-- CREATE TABLE doctors(
-- 
-- );
-- 
-- CREATE TABLE patients(
-- 
-- );