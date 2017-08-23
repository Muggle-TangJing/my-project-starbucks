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
(null,'·��','����Ҫ��Ϊ������������~',1234437858734875),
(null,'Ů��','��������������Ҳ�ᱻԭ��,��Ϊ�����������~',1234437858734876),
(null,'zolo','��������ǽ�ʿ�ĳ���!',1234437858734879),
(null,'nami','��Ϊΰ��ĺ���ʿ!',1234437858734871),
(null,'sanji','����allblue~',1234437858734872),
(null,'�ǰ�','��Ϊһ���������˵�ҽ��!',1234437858734874);
