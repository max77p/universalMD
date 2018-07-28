DROP DATABASE IF EXISTS appointmentsUMD;

CREATE DATABASE appointmentsUMD;

USE appointmentsUMD;

CREATE TABLE appointments(


`name` VARCHAR (50) NOT NULL,
`specialty` VARCHAR (25) NOT NULL,
`location_city` VARCHAR (30) NOT NULL,
`rating` FLOAT (2,2) NOT NULL,
`contact` 
`gender`