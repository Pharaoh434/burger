CREATE DATABASE  burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id int  NOT NULL AUTO_INCREMENT,
  burger_name varvhar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 );
                                              
