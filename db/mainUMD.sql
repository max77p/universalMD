DROP DATABASE IF EXISTS mainUMD;
CREATE DATABASE mainUMD;
USE mainUMD;
CREATE TABLE appointments(
`name` VARCHAR (50) NOT NULL,
`specialty` VARCHAR (25) NOT NULL,
`location_city` VARCHAR (30) NOT NULL,
`rating` FLOAT (2,2) NOT NULL,
`contact e-mail patient` VARCHAR (60) NOT NULL,
`contact phone number patient` INT (10) NOT NULL,
`contact e-mail doctor` VARCHAR (60) NOT NULL,
`contact phone number doctor` INT (10) NOT NULL,
`gender patient`  ENUM('m','f','o','u') NOT NULL,
`gender doctor`  ENUM('m','f','o','u')


);

INSERT INTO appointments (name, specialty, location_city, rating)
VALUES ('Anne Buccani',' Cardiologist', 'Toronto', 4.5);


CREATE TABLE doctors(
id INT (255) AUTO_INCREMENT NOT NULL PRIMARY KEY,
`name` VARCHAR (50) NOT NULL,
`specialty` VARCHAR (25) NOT NULL,
`location_city` VARCHAR (30) NOT NULL,
`rating` FLOAT (2,1) NOT NULL,
`contact e-mail` VARCHAR (50) NOT NULL,
`contact phone number` INT (10) NOT NULL,
`gender doctor`  ENUM('m','f')
);

CREATE TABLE patients(

`name` VARCHAR (50) NOT NULL,
`specialty` VARCHAR (25) NOT NULL,
`location_city` VARCHAR (30) NOT NULL,
`rating` FLOAT (2,1) NOT NULL,
`contact e-mail` VARCHAR (50) NOT NULL,
`contact phone number` INT (10) NOT NULL,
`gender patient`  ENUM('m','f','o','u') NOT NULL
	

);
