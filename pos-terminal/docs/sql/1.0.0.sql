CREATE DATABASE pos_terminal;
use pos_terminal;
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `id` bigint(20) NOT NULL,
  `customer_name` VARCHAR (20) NOT NULL,
  `customer_last_name` VARCHAR (20) NULL,
  `customer_email` VARCHAR(30)  NULL,
  `customer_mobile_no` VARCHAR (12) NOT NULL,
  `customer_bank_no` VARCHAR (20) NULL,
  `gender` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
)