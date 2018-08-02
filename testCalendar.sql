DROP TABLE IF EXISTS time_table;
CREATE TABLE time_table (
id INTEGER PRIMARY KEY, -- year10000+month100+day
db_time TIME NOT NULL,
hour INTEGER NOT NULL,
minute INTEGER NOT NULL, -- 1 to 12
second INTEGER NOT NULL, -- 1 to 31
event VARCHAR(50)
) Engine=MyISAM;

DROP PROCEDURE IF EXISTS fill_date_dimension;
DELIMITER //
CREATE PROCEDURE fill_date_dimension(IN startdate TIME,IN stopdate TIME)
BEGIN
DECLARE currentdate TIME;
SET currentdate = startdate;
WHILE currentdate < stopdate DO
INSERT INTO time_table VALUES (
HOUR(currentdate)*10000+MINUTE(currentdate)*100 + SECOND(currentdate),
currentdate,
HOUR(currentdate),
MINUTE(currentdate),
SECOND(currentdate),
NULL);
SET currentdate = ADDDATE(currentdate,INTERVAL 15 MINUTE);
END WHILE;
END
//
DELIMITER ;

TRUNCATE TABLE time_table;

CALL fill_date_dimension('00:00:00','23:45:00');
OPTIMIZE TABLE time_table;