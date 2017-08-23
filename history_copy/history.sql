SET NAMES 'utf8';
DROP DATABASE IF EXISTS history;
CREATE DATABASE history CHARSET=UTF8;
USE history;

CREATE TABLE h_forum(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  content VARCHAR(1024),
  pubTime BIGINT
);
INSERT INTO h_forum VALUES
(null,'路飞','我是要成为海贼王的男人~',1234437858734875),
(null,'女帝','就算妾身毁灭世界也会被原谅,因为妾身美若天仙~',1234437858734876),
(null,'zolo','背后的伤是剑士的耻辱!',1234437858734879),
(null,'nami','成为伟大的航海士!',1234437858734871),
(null,'sanji','邂逅allblue~',1234437858734872),
(null,'乔巴','成为一名救死扶伤的医生!',1234437858734874);
