/*
SQLyog Ultimate v11.33 (64 bit)
MySQL - 5.7.19 : Database - folarpos_instant
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `apps` */

DROP TABLE IF EXISTS `apps`;

CREATE TABLE `apps` (
  `apps_id` int(1) NOT NULL AUTO_INCREMENT,
  `apps_name` varchar(100) DEFAULT NULL,
  `apps_address` text,
  `apps_phone` varchar(14) DEFAULT NULL,
  `apps_logo` varchar(100) DEFAULT NULL,
  `apps_mail` varchar(100) DEFAULT NULL,
  `apps_meta_keyword` varchar(150) DEFAULT NULL,
  `apps_meta_desc` text,
  `apps_site` varchar(100) DEFAULT NULL,
  `apps_fav` varchar(100) DEFAULT NULL,
  `apps_bg` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`apps_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `apps` */

insert  into `apps`(`apps_id`,`apps_name`,`apps_address`,`apps_phone`,`apps_logo`,`apps_mail`,`apps_meta_keyword`,`apps_meta_desc`,`apps_site`,`apps_fav`,`apps_bg`) values (1,'Folarpos Instant','Jl. Kapten Haryadi No 117, Sleman, Yogyakarta','0274883681','system/logo.png','instant@folarpos.co.id','Cashier Instant, Cashier Modern, Cashier Jogja, Instant, Software Jogja','Folarpos Instant merupakan layanan Point of Sale untuk kebutuhan UKM pemula atau sudah berkembang. Didukung dengan fitur-fitur unggulan menjadikan Folarpos Instant menjadi mitra bisnis anda yang tepat','www.folarpos.co.id','system/favicon.png','system/bg.png');

/*Table structure for table `apps_mode` */

DROP TABLE IF EXISTS `apps_mode`;

CREATE TABLE `apps_mode` (
  `mode_id` int(11) NOT NULL AUTO_INCREMENT,
  `mode_name` varchar(100) DEFAULT NULL,
  `mode_status` int(1) DEFAULT NULL,
  `mode_description` text,
  PRIMARY KEY (`mode_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `apps_mode` */

insert  into `apps_mode`(`mode_id`,`mode_name`,`mode_status`,`mode_description`) values (1,'Mode table',2,'Apakah outlet menggunakan meja atau lesahan'),(4,'Member',2,'Outlet dapat menambahkan member.'),(3,'Hutang Mode',2,'Outlet dapat menggunakan hutang dalam transaksi nya');

/*Table structure for table `apps_outlet_roles` */

DROP TABLE IF EXISTS `apps_outlet_roles`;

CREATE TABLE `apps_outlet_roles` (
  `outlet_roles_id` int(11) NOT NULL AUTO_INCREMENT,
  `apps_id` int(1) NOT NULL DEFAULT '1',
  `outlet_roles_name` varchar(100) DEFAULT NULL,
  `outlet_roles_direct` varchar(100) DEFAULT NULL,
  `outlet_roles_header` varchar(100) DEFAULT NULL,
  `outlet_roles_nav` varchar(100) DEFAULT NULL,
  `outlet_roles_status` int(1) DEFAULT NULL,
  PRIMARY KEY (`outlet_roles_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `apps_outlet_roles` */

insert  into `apps_outlet_roles`(`outlet_roles_id`,`apps_id`,`outlet_roles_name`,`outlet_roles_direct`,`outlet_roles_header`,`outlet_roles_nav`,`outlet_roles_status`) values (1,1,'Owner','dashboard-outlet','header_outlet','nav_outlet',1),(2,1,'Cashier','pos','header_cashier',NULL,2);

/*Table structure for table `apps_roles` */

DROP TABLE IF EXISTS `apps_roles`;

CREATE TABLE `apps_roles` (
  `roles_id` int(11) NOT NULL AUTO_INCREMENT,
  `apps_id` int(1) NOT NULL DEFAULT '1',
  `roles_name` varchar(100) DEFAULT NULL,
  `roles_header` varchar(100) DEFAULT NULL,
  `roles_nav` varchar(100) DEFAULT NULL,
  `roles_direct` varchar(100) DEFAULT NULL,
  `roles_status` int(1) DEFAULT NULL,
  PRIMARY KEY (`roles_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `apps_roles` */

insert  into `apps_roles`(`roles_id`,`apps_id`,`roles_name`,`roles_header`,`roles_nav`,`roles_direct`,`roles_status`) values (1,1,'Admin','header_admin','nav_admin','admin/dashboard',1),(2,1,'Finance','header_finance','nav_finance','fin/dashboard',1),(3,1,'Marketing','header_marketing','nav_marketing','mark/dashboard',2),(4,1,'Owner','header_owner','nav_owner','owner/dashboard',1),(5,1,'Customers','header_customers','nav_customers','cust/customers',1),(6,1,'Cashier','header_cashier','nav_cashier','cashier/dashboard',2);

/*Table structure for table `apps_serv_mode` */

DROP TABLE IF EXISTS `apps_serv_mode`;

CREATE TABLE `apps_serv_mode` (
  `serv_mode_id` int(5) NOT NULL AUTO_INCREMENT,
  `serv_id` int(3) NOT NULL,
  `mode_id` int(11) NOT NULL,
  PRIMARY KEY (`serv_mode_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

/*Data for the table `apps_serv_mode` */

insert  into `apps_serv_mode`(`serv_mode_id`,`serv_id`,`mode_id`) values (13,14,3),(10,0,4),(9,0,1),(7,10,1),(8,10,4);

/*Table structure for table `apps_services` */

DROP TABLE IF EXISTS `apps_services`;

CREATE TABLE `apps_services` (
  `serv_id` int(3) NOT NULL AUTO_INCREMENT,
  `apps_id` int(1) NOT NULL DEFAULT '1',
  `serv_name` varchar(100) DEFAULT NULL,
  `serv_price` double DEFAULT NULL,
  `serv_image` varchar(100) DEFAULT NULL,
  `serv_status` int(1) NOT NULL,
  PRIMARY KEY (`serv_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

/*Data for the table `apps_services` */

insert  into `apps_services`(`serv_id`,`apps_id`,`serv_name`,`serv_price`,`serv_image`,`serv_status`) values (1,1,'Resto - Cashier Pro',250000,NULL,0),(2,1,'Resto - Cashier Premium',450000,NULL,0),(3,1,'Clinic - Cashier Pro',350000,NULL,0),(4,1,'Clinic - Cashier Premium',550000,'assets/services-pict/folar-maint-5a68a7dd2aaad.jpg',0),(8,1,'Services 1s',4500000,'assets/services-pict/folar-maint-5a68a2b49364a.jpg',2),(10,1,'R R',3454656,'assets/services-pict/folar-serv-5a728b62320df.jpg',2),(11,1,'R76879',2000000,'assets/services-pict/folar-serv-5a728b981890f.jpg',2),(12,1,'Test',30000,'assets/services-pict/folar-serv-5a9cf18757f77.jpg',2),(13,1,'RARARERE',542333,'assets/services-pict/folar-serv-5a9cf1d51dec5.jpg',2),(14,1,'Terfsdf',43534634,'assets/services-pict/folar-serv-5a9cf1fa3b605.jpg',2);

/*Table structure for table `features_extra` */

DROP TABLE IF EXISTS `features_extra`;

CREATE TABLE `features_extra` (
  `features_extra_id` int(2) NOT NULL,
  `features_extra_name` varchar(50) NOT NULL,
  `features_extra_note` varchar(100) DEFAULT NULL,
  `features_extra_status` int(1) NOT NULL DEFAULT '2',
  `features_extra_type` int(1) NOT NULL DEFAULT '1' COMMENT '1:include;2:exclude'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `features_extra` */

insert  into `features_extra`(`features_extra_id`,`features_extra_name`,`features_extra_note`,`features_extra_status`,`features_extra_type`) values (1,'Grafik Pendapan & Apps Secure',NULL,1,1),(2,'Rata-rata Penjualan',NULL,1,1),(3,'10 Menu Terlaris',NULL,1,1),(4,'Pembayaran - Pajak','10',2,1),(5,'Pembayaran - Cara Bayar',NULL,1,1),(6,'Pembayaran - Services',NULL,2,1),(7,'10 Menu penjualan terendah',NULL,1,1),(8,'Pembayaran - Diskon Pegawai','20',2,1),(9,'Stock Bahan Menu',NULL,2,1),(10,'Purchase Order Bahan Menu',NULL,2,1);

/*Table structure for table `finance` */

DROP TABLE IF EXISTS `finance`;

CREATE TABLE `finance` (
  `finance_id` int(20) NOT NULL,
  `orders_id` int(20) DEFAULT NULL,
  `finance_ct_id` int(2) NOT NULL,
  `shift_id` int(11) DEFAULT NULL,
  `users_id` int(11) NOT NULL,
  `finance_kode` varchar(20) DEFAULT NULL,
  `finance_date` datetime DEFAULT NULL,
  `finance_name` varchar(100) DEFAULT NULL,
  `finance_desc` text,
  `finance_total` double DEFAULT '0',
  `finance_status` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `finance` */

insert  into `finance`(`finance_id`,`orders_id`,`finance_ct_id`,`shift_id`,`users_id`,`finance_kode`,`finance_date`,`finance_name`,`finance_desc`,`finance_total`,`finance_status`) values (1,NULL,3,1,2,NULL,'2017-12-27 09:36:36','saldo',NULL,500000,0),(2,NULL,2,1,2,NULL,'2017-12-27 09:37:10','None','none',60000,0),(3,NULL,3,1,2,NULL,'2017-12-28 15:09:45','saldo',NULL,500000,0),(4,NULL,2,1,2,NULL,'2017-12-28 15:10:14','None','none',84000,0);

/*Table structure for table `finance_ct` */

DROP TABLE IF EXISTS `finance_ct`;

CREATE TABLE `finance_ct` (
  `finance_ct_id` int(2) NOT NULL,
  `finance_ct_name` varchar(100) DEFAULT NULL,
  `finance_ct_desc` tinytext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `finance_ct` */

insert  into `finance_ct`(`finance_ct_id`,`finance_ct_name`,`finance_ct_desc`) values (1,'pemasukan',NULL),(2,'pengeluaran',NULL),(3,'saldo',NULL);

/*Table structure for table `finance_dt` */

DROP TABLE IF EXISTS `finance_dt`;

CREATE TABLE `finance_dt` (
  `finance_dt_id` int(20) NOT NULL,
  `finance_id` int(20) NOT NULL,
  `finance_dt_date` datetime NOT NULL,
  `finance_dt_name` varchar(100) DEFAULT NULL,
  `finance_dt_qty` double NOT NULL DEFAULT '0',
  `finance_dt_satuan` varchar(20) DEFAULT NULL,
  `finance_dt_price` float DEFAULT '0',
  `finance_dt_total` float DEFAULT '0',
  `finance_dt_note` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `finance_dt` */

insert  into `finance_dt`(`finance_dt_id`,`finance_id`,`finance_dt_date`,`finance_dt_name`,`finance_dt_qty`,`finance_dt_satuan`,`finance_dt_price`,`finance_dt_total`,`finance_dt_note`) values (1,2,'2017-12-27 09:37:10','Minyak',5,'kg',12000,60000,0),(2,4,'2017-12-28 15:10:14','minyak',7,'kg',12000,84000,0);

/*Table structure for table `log_login` */

DROP TABLE IF EXISTS `log_login`;

CREATE TABLE `log_login` (
  `log_fail_id` int(11) NOT NULL AUTO_INCREMENT,
  `log_fail_date` datetime NOT NULL,
  `log_fail_email` varchar(100) NOT NULL,
  `log_fail_ip` varchar(50) NOT NULL,
  `log_fail_device` varchar(20) NOT NULL,
  PRIMARY KEY (`log_fail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

/*Data for the table `log_login` */

insert  into `log_login`(`log_fail_id`,`log_fail_date`,`log_fail_email`,`log_fail_ip`,`log_fail_device`) values (1,'2018-01-31 15:00:34','folarium@gmail.com','192.168.1.13','desktop'),(2,'2018-01-31 15:00:41','folarium@gmail.com','192.168.1.13','desktop'),(3,'2018-02-01 10:45:46','anarifa48@gmail.com','192.168.1.9','desktop'),(4,'2018-02-01 10:46:03','anarifa48@gmail.com','192.168.1.9','desktop'),(5,'2018-02-01 10:46:49','anarifa48@gmail.com','192.168.1.9','desktop'),(18,'2018-02-15 14:41:48','cashier.folarpos@gmail.com','192.168.1.38','mobile'),(19,'2018-03-01 12:28:59','folarium@gmail.com','::1','desktop'),(20,'2018-03-05 10:50:10','folarium@gmail.com','::1','desktop');

/*Table structure for table `log_outlet_stock` */

DROP TABLE IF EXISTS `log_outlet_stock`;

CREATE TABLE `log_outlet_stock` (
  `stock_id` int(11) NOT NULL AUTO_INCREMENT,
  `ingd_id` int(11) DEFAULT NULL,
  `prod_id` int(11) DEFAULT NULL,
  `stock_date` datetime DEFAULT NULL,
  `stock_in` double DEFAULT NULL,
  `stock_out` double DEFAULT NULL,
  `stock_rest` double DEFAULT NULL,
  `stock_note` varchar(100) DEFAULT NULL,
  `stock_ref_modul` varchar(10) DEFAULT NULL,
  `stock_ref_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`stock_id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=latin1;

/*Data for the table `log_outlet_stock` */

insert  into `log_outlet_stock`(`stock_id`,`ingd_id`,`prod_id`,`stock_date`,`stock_in`,`stock_out`,`stock_rest`,`stock_note`,`stock_ref_modul`,`stock_ref_id`) values (1,NULL,1,'2018-02-12 16:35:13',10,1,9,NULL,NULL,NULL),(2,NULL,3,'2018-02-21 16:35:18',2,1,1,NULL,NULL,NULL),(6,18,NULL,'2018-03-01 17:16:46',5000,0,5000,NULL,NULL,NULL),(10,21,NULL,'2018-03-01 17:32:36',5000,0,5000,NULL,NULL,NULL),(11,21,NULL,'2018-03-01 17:32:36',0,5000,0,NULL,NULL,NULL),(12,22,NULL,'2018-03-01 18:13:53',1000,0,1000,'Pengadaan barang pertama kali',NULL,NULL),(13,22,NULL,'2018-03-01 18:13:53',0,1000,0,'Pengeluaran bahan pertama kali',NULL,NULL),(14,23,NULL,'2018-03-01 19:10:04',1900,0,1900,'Pengadaan barang pertama kali',NULL,NULL),(15,23,NULL,'2018-03-01 19:10:04',0,1900,0,'Pengeluaran bahan pertama kali',NULL,NULL),(54,12,NULL,'2018-03-08 10:14:44',1000,0,1000,'Pengadaan Daging sebesar 1000 gr',NULL,NULL),(55,12,NULL,'2018-03-08 10:20:49',100,0,1100,'Pengadaan Daging sebesar 100 gr',NULL,NULL),(56,12,NULL,'2018-03-08 10:24:22',50,0,1150,'Pengadaan Daging sebesar 50 gr',NULL,NULL),(57,12,NULL,'2018-03-08 10:48:58',20,0,1170,'Pengadaan Daging sebesar 20 gr',NULL,NULL),(58,7,NULL,'2018-03-08 10:50:34',0,4,NULL,'Penggunaan Lada Hitam sebanyak 4 gram untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(59,9,NULL,'2018-03-08 10:50:34',0,6,NULL,'Penggunaan Kemiri sebanyak 6 gr untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(60,10,NULL,'2018-03-08 10:50:34',0,2,NULL,'Penggunaan Telur sebanyak 2 Butir untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(61,12,NULL,'2018-03-08 10:50:34',0,50,1120,'Penggunaan Daging sebanyak 50 gr untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(62,7,NULL,'2018-03-08 10:53:03',0,4,NULL,'Penggunaan Lada Hitam sebanyak 4 gram untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(63,9,NULL,'2018-03-08 10:53:03',0,6,NULL,'Penggunaan Kemiri sebanyak 6 gr untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(64,10,NULL,'2018-03-08 10:53:03',0,2,NULL,'Penggunaan Telur sebanyak 2 Butir untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(65,12,NULL,'2018-03-08 10:53:03',0,50,1070,'Penggunaan Daging sebanyak 50 gr untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(66,7,NULL,'2018-03-08 10:53:56',0,4,NULL,'Penggunaan Lada Hitam sebanyak 4 gram untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(67,9,NULL,'2018-03-08 10:53:56',0,6,NULL,'Penggunaan Kemiri sebanyak 6 gr untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(68,10,NULL,'2018-03-08 10:53:56',0,2,NULL,'Penggunaan Telur sebanyak 2 Butir untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(69,12,NULL,'2018-03-08 10:53:56',0,50,1020,'Penggunaan Daging sebanyak 50 gr untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(70,7,NULL,'2018-03-08 10:58:43',0,4,980,'Penggunaan Lada Hitam sebanyak 4 gram untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(71,9,NULL,'2018-03-08 10:58:43',0,6,90,'Penggunaan Kemiri sebanyak 6 gr untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(72,10,NULL,'2018-03-08 10:58:43',0,2,990,'Penggunaan Telur sebanyak 2 Butir untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(73,12,NULL,'2018-03-08 10:58:43',0,50,970,'Penggunaan Daging sebanyak 50 gr untuk Pembelian Chicken Grilled sebanyak 2 Piring',NULL,NULL),(74,7,NULL,'2018-03-08 11:03:20',0,2,978,'Penggunaan Lada Hitam sebanyak 2 gram untuk Pembelian Chicken Grilled sebanyak 1 Piring',NULL,NULL),(75,9,NULL,'2018-03-08 11:03:20',0,3,87,'Penggunaan Kemiri sebanyak 3 gr untuk Pembelian Chicken Grilled sebanyak 1 Piring',NULL,NULL),(76,10,NULL,'2018-03-08 11:03:20',0,1,989,'Penggunaan Telur sebanyak 1 Butir untuk Pembelian Chicken Grilled sebanyak 1 Piring',NULL,NULL),(77,12,NULL,'2018-03-08 11:03:20',0,25,945,'Penggunaan Daging sebanyak 25 gr untuk Pembelian Chicken Grilled sebanyak 1 Piring',NULL,NULL),(78,24,NULL,'2018-03-08 11:25:27',10,0,10,'Pengadaan barang pertama kali',NULL,NULL),(79,24,NULL,'2018-03-08 11:25:27',0,10,0,'Pengeluaran bahan pertama kali',NULL,NULL),(80,25,NULL,'2018-03-08 11:26:36',10000,0,10000,'Pengadaan barang pertama kali',NULL,NULL),(81,25,NULL,'2018-03-08 11:26:36',0,10000,0,'Pengeluaran bahan pertama kali',NULL,NULL),(82,26,NULL,'2018-03-08 11:30:07',1000,0,1000,'Pengadaan barang pertama kali',NULL,NULL),(83,26,NULL,'2018-03-08 11:30:07',0,1000,0,'Pengeluaran bahan pertama kali',NULL,NULL),(84,27,NULL,'2018-03-08 11:31:10',1000,0,1000,'Pengadaan barang pertama kali',NULL,NULL),(85,27,NULL,'2018-03-08 11:31:10',0,1000,0,'Pengeluaran bahan pertama kali',NULL,NULL),(86,28,NULL,'2018-03-08 11:31:29',1000,0,1000,'Pengadaan barang pertama kali',NULL,NULL),(87,28,NULL,'2018-03-08 11:31:29',0,1000,0,'Pengeluaran bahan pertama kali',NULL,NULL),(88,29,NULL,'2018-03-08 11:31:55',1000,0,1000,'Pengadaan barang pertama kali',NULL,NULL),(89,29,NULL,'2018-03-08 11:31:55',0,1000,0,'Pengeluaran bahan pertama kali',NULL,NULL),(90,8,NULL,'2018-03-08 16:02:46',120,0,120,'Penambahan Lada Merah sebanyak 120',NULL,NULL),(91,13,NULL,'2018-03-08 16:02:46',1000,0,1000,'Penambahan Parmesan Cheese sebanyak 1000',NULL,NULL),(92,11,NULL,'2018-03-08 16:02:46',1000,0,1000,'Penambahan Ikan laut sebanyak 1000',NULL,NULL);

/*Table structure for table `md_bank` */

DROP TABLE IF EXISTS `md_bank`;

CREATE TABLE `md_bank` (
  `bank_id` int(11) NOT NULL AUTO_INCREMENT,
  `bank_code` varchar(5) DEFAULT NULL,
  `bank_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`bank_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `md_bank` */

insert  into `md_bank`(`bank_id`,`bank_code`,`bank_name`) values (3,'sdfsa','Dsfdfd'),(4,'34543','erfgfhgfh'),(5,'46gfd','lalapo');

/*Table structure for table `md_cont_ct` */

DROP TABLE IF EXISTS `md_cont_ct`;

CREATE TABLE `md_cont_ct` (
  `cont_ct_id` int(2) NOT NULL AUTO_INCREMENT,
  `cont_ct_name` varchar(100) DEFAULT NULL,
  `cont_ct_url` varchar(120) DEFAULT NULL,
  `cont_ct_status` int(1) DEFAULT NULL,
  PRIMARY KEY (`cont_ct_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `md_cont_ct` */

insert  into `md_cont_ct`(`cont_ct_id`,`cont_ct_name`,`cont_ct_url`,`cont_ct_status`) values (1,'Cat 2','Cat-2',2),(3,'Dsf','dsf',2);

/*Table structure for table `md_dig_layout` */

DROP TABLE IF EXISTS `md_dig_layout`;

CREATE TABLE `md_dig_layout` (
  `lay_id` int(1) NOT NULL,
  `lay_name` varchar(100) DEFAULT NULL,
  `type_id` int(1) DEFAULT NULL,
  `lay_url` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `md_dig_layout` */

insert  into `md_dig_layout`(`lay_id`,`lay_name`,`type_id`,`lay_url`) values (1,'Monitor 1',1,'layout-primary'),(2,'Monitor 2',2,'layout-secondary');

/*Table structure for table `md_dig_type` */

DROP TABLE IF EXISTS `md_dig_type`;

CREATE TABLE `md_dig_type` (
  `type_id` int(2) NOT NULL,
  `type_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `md_dig_type` */

insert  into `md_dig_type`(`type_id`,`type_name`) values (1,'1 Layout'),(2,'2 Layout'),(3,'3 Layout'),(4,'4 Layout'),(5,'5 Layout'),(6,'6 Layout'),(7,'8 Layout');

/*Table structure for table `md_discount` */

DROP TABLE IF EXISTS `md_discount`;

CREATE TABLE `md_discount` (
  `disc_id` int(11) NOT NULL AUTO_INCREMENT,
  `outlet_id` int(11) NOT NULL,
  `disc_name` varchar(100) DEFAULT NULL,
  `disc_percent` double DEFAULT NULL,
  `disc_nominal` double DEFAULT NULL,
  `disc_type` int(1) DEFAULT NULL,
  `disc_started` date DEFAULT NULL,
  `disc_expired` date DEFAULT NULL,
  `disc_status` int(1) DEFAULT NULL,
  PRIMARY KEY (`disc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `md_discount` */

insert  into `md_discount`(`disc_id`,`outlet_id`,`disc_name`,`disc_percent`,`disc_nominal`,`disc_type`,`disc_started`,`disc_expired`,`disc_status`) values (1,1,'Liburan Sekolah',3,NULL,NULL,'2018-02-11','2018-02-16',1);

/*Table structure for table `md_ingredients` */

DROP TABLE IF EXISTS `md_ingredients`;

CREATE TABLE `md_ingredients` (
  `ingd_id` int(11) NOT NULL AUTO_INCREMENT,
  `outlet_id` int(11) NOT NULL,
  `ingd_reg` datetime DEFAULT NULL,
  `ingd_name` varchar(100) DEFAULT NULL,
  `ingd_price` double DEFAULT '0',
  `ingd_unit` varchar(10) DEFAULT NULL,
  `ingd_stock` double DEFAULT '0',
  `ingd_status` int(1) DEFAULT '2',
  PRIMARY KEY (`ingd_id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

/*Data for the table `md_ingredients` */

insert  into `md_ingredients`(`ingd_id`,`outlet_id`,`ingd_reg`,`ingd_name`,`ingd_price`,`ingd_unit`,`ingd_stock`,`ingd_status`) values (8,1,NULL,'Lada Merah',1000,'gr',120,2),(7,1,'2018-02-28 12:01:26','Lada Hitam',10000,'gram',978,2),(13,1,NULL,'Parmesan Cheese',10000,'gram',1000,2),(9,1,NULL,'Kemiri',3000,'gr',87,2),(10,1,NULL,'Telur',2000,'Butir',989,2),(11,1,NULL,'Ikan laut',20000,'gr',1000,2),(12,1,NULL,'Daging',100000,'gr',945,2),(22,1,NULL,'Mirin',30000,'ml',1000,2),(23,1,NULL,'Sake',14200,'ml',1900,2),(18,1,NULL,'Pork',10000,'gr',5000,2),(21,1,NULL,'Ginseng',13500,'gr',5000,2),(24,1,NULL,'Pisang raja',10000,'Buah',10,2),(25,1,NULL,'Tepung terigu',60000,'gr',10000,2),(26,1,NULL,'Ayam',100000,'gr',1000,2),(27,1,NULL,'Jamur tiram',100000,'gr',1000,2),(28,1,NULL,'Tempe',70000,'gr',1000,2),(29,1,NULL,'Sauce',20000,'ml',1000,2);

/*Table structure for table `md_outlet` */

DROP TABLE IF EXISTS `md_outlet`;

CREATE TABLE `md_outlet` (
  `outlet_id` int(11) NOT NULL AUTO_INCREMENT,
  `serv_id` int(3) NOT NULL,
  `outlet_name` varchar(100) DEFAULT NULL,
  `outlet_address` text,
  `outlet_phone` int(10) unsigned DEFAULT NULL,
  `outlet_mail` varchar(100) DEFAULT NULL,
  `outlet_site` varchar(100) DEFAULT NULL,
  `outlet_logo` varchar(100) DEFAULT NULL,
  `outlet_status` int(1) DEFAULT NULL,
  `outlet_printer_cashier_name` varchar(10) DEFAULT NULL,
  `outlet_printer_cashier_port` varchar(10) DEFAULT NULL,
  `outlet_printer_bars_name` varchar(10) DEFAULT NULL,
  `outlet_printer_bars_port` varchar(10) DEFAULT NULL,
  `outlet_printer_kitchen_name` varchar(10) DEFAULT NULL,
  `outlet_printer_kitchen_port` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`outlet_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `md_outlet` */

insert  into `md_outlet`(`outlet_id`,`serv_id`,`outlet_name`,`outlet_address`,`outlet_phone`,`outlet_mail`,`outlet_site`,`outlet_logo`,`outlet_status`,`outlet_printer_cashier_name`,`outlet_printer_cashier_port`,`outlet_printer_bars_name`,`outlet_printer_bars_port`,`outlet_printer_kitchen_name`,`outlet_printer_kitchen_port`) values (1,1,'Outlet Biru','Jl. Mantingan Pandean, Km.01, Dsn. Ngelo, Ds.jatimulyo, Kec. Mantingan',4294967295,'dhoni.p.saputra@gmail.com','email.com','assets/outlet-pict/outlet-5a712cf8d6c37.jpg',2,NULL,NULL,NULL,NULL,NULL,NULL),(2,1,'Gdfgf','Awdsfdf',3453544,'ana@ldmfd','dsfdf.com','assets/outlet-pict/outlet-5a72910fd9f95.jpg',1,'dswdsf','1','erer','2','erer','1'),(3,2,'Grt','Yfhgfhgj',567678,'asdf@fg','fgh.com','assets/outlet-pict/outlet-5a72913a208ff.jpg',1,NULL,NULL,NULL,NULL,NULL,NULL),(4,1,'Outlet Merah','Disana',12345,'dhoni.p.saputra@gmail.com','12345.com','assets/outlet-pict/outlet-5a8a925062af2.jpg',1,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `md_outlet_payment_method` */

DROP TABLE IF EXISTS `md_outlet_payment_method`;

CREATE TABLE `md_outlet_payment_method` (
  `outlet_payment_method_id` int(11) NOT NULL AUTO_INCREMENT,
  `outlet_id` int(11) NOT NULL,
  `method_id` int(3) NOT NULL,
  PRIMARY KEY (`outlet_payment_method_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `md_outlet_payment_method` */

insert  into `md_outlet_payment_method`(`outlet_payment_method_id`,`outlet_id`,`method_id`) values (3,1,4),(4,1,5);

/*Table structure for table `md_payment_method` */

DROP TABLE IF EXISTS `md_payment_method`;

CREATE TABLE `md_payment_method` (
  `method_id` int(3) NOT NULL AUTO_INCREMENT,
  `method_name` varchar(100) DEFAULT NULL,
  `method_type` int(1) DEFAULT NULL,
  `method_status` int(1) DEFAULT NULL,
  PRIMARY KEY (`method_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `md_payment_method` */

insert  into `md_payment_method`(`method_id`,`method_name`,`method_type`,`method_status`) values (1,'Tunai',2,2),(2,'Bank',2,2),(3,'Tunai + Bank',2,1),(4,'Debit card',1,2),(5,'Cash',1,2);

/*Table structure for table `md_prod_ingredients` */

DROP TABLE IF EXISTS `md_prod_ingredients`;

CREATE TABLE `md_prod_ingredients` (
  `prod_ingd_id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_id` int(11) NOT NULL,
  `ingd_id` int(11) NOT NULL,
  `prod_ingd_qty` double DEFAULT '0',
  `prod_ingd_reg` datetime DEFAULT NULL,
  PRIMARY KEY (`prod_ingd_id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

/*Data for the table `md_prod_ingredients` */

insert  into `md_prod_ingredients`(`prod_ingd_id`,`prod_id`,`ingd_id`,`prod_ingd_qty`,`prod_ingd_reg`) values (1,29,7,2,'2018-02-28 12:49:47'),(2,29,9,3,'2018-02-28 12:49:47'),(3,29,10,1,'2018-02-28 12:49:47'),(4,29,12,25,'2018-02-28 12:49:47'),(5,30,7,0,'2018-02-28 15:57:54'),(6,30,9,0,'2018-02-28 15:57:54'),(7,30,11,0,'2018-02-28 15:57:54'),(13,31,10,2,'2018-02-28 16:48:57'),(12,31,8,22,'2018-02-28 16:48:57'),(11,31,7,12,'2018-02-28 16:48:57'),(14,1,10,1,'2018-03-08 11:14:43'),(15,3,10,1,'2018-03-08 11:24:20'),(16,3,7,10,'2018-03-08 11:24:20'),(17,3,8,10,'2018-03-08 11:24:20'),(18,4,24,1,'2018-03-08 11:28:45'),(19,4,25,100,'2018-03-08 11:28:45'),(20,5,26,80,'2018-03-08 11:30:44'),(21,5,9,10,'2018-03-08 11:30:44'),(22,6,27,40,'2018-03-08 11:32:58'),(23,7,8,10,'2018-03-08 11:37:26'),(24,7,29,50,'2018-03-08 11:37:26'),(25,8,28,90,'2018-03-08 11:37:49'),(26,9,29,50,'2018-03-08 11:38:11');

/*Table structure for table `md_prod_type` */

DROP TABLE IF EXISTS `md_prod_type`;

CREATE TABLE `md_prod_type` (
  `type_id` int(3) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `md_prod_type` */

insert  into `md_prod_type`(`type_id`,`type_name`) values (1,'Makanan'),(2,'Minuman');

/*Table structure for table `md_products` */

DROP TABLE IF EXISTS `md_products`;

CREATE TABLE `md_products` (
  `prod_id` int(11) NOT NULL AUTO_INCREMENT,
  `outlet_id` int(11) NOT NULL,
  `type_id` int(3) NOT NULL,
  `prod_name` varchar(100) DEFAULT NULL,
  `prod_price` double DEFAULT NULL,
  `prod_unit` varchar(10) DEFAULT NULL,
  `prod_stock` double DEFAULT NULL,
  `prod_image` varchar(100) DEFAULT NULL,
  `prod_charge_percent` double DEFAULT NULL,
  `prod_charge_nominal` double DEFAULT NULL,
  `prod_status` int(1) DEFAULT NULL,
  `prod_disc_percent` double DEFAULT NULL,
  `prod_disc_nominal` double DEFAULT NULL,
  `prod_description` longtext,
  PRIMARY KEY (`prod_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

/*Data for the table `md_products` */

insert  into `md_products`(`prod_id`,`outlet_id`,`type_id`,`prod_name`,`prod_price`,`prod_unit`,`prod_stock`,`prod_image`,`prod_charge_percent`,`prod_charge_nominal`,`prod_status`,`prod_disc_percent`,`prod_disc_nominal`,`prod_description`) values (1,1,1,'Mie Ayam Telor Goreng',10000,'Mangkok',809,'assets/product-pict/1/090f5c637d1ecf1e26d1915a82903e59.jpg',1,500,1,1,100,''),(3,1,1,'Nasi goreng Spesial',13000,'Mangkok',847,'assets/product-pict/3/99bd3ff1a1f3092f1fe1632445c38d17.jpg',1,500,1,1,10,''),(4,1,1,'Molen Bakar',1000,'Gelintir',876,'assets/product-pict/4/9f07b70aacc4d9e3a042e4abe913ed83.jpg',1,0,1,1,10,''),(5,1,1,'Garang Asem',10000,'Mangkok',976,'assets/product-pict/5/41fcc1032b1fb7930dc9b718e20fd756.jpg',1,500,1,1,10,''),(6,1,1,'Penyetan Jamur',10000,'Mangkok',948,'assets/product-pict/6/c561230aaa776d418a5cefd995a31941.jpg',1,500,1,1,10,''),(7,1,1,'Salad with peanut topping',10000,'Mangkok',968,'assets/product-pict/7/605dc6d492060378a4d58ce0dfe78221.jpg',1,500,1,1,10,''),(8,1,1,'Tempeh roaster',10000,'Mangkok',980,'assets/product-pict/8/136cdc5c72f27bec0cc000d3deb0e9b1.jpg',1,500,1,1,10,''),(9,1,1,'Touge with sauce barbeque',10000,'Mangkok',997,'assets/product-pict/9/a561f97b11a75845ebff4c7802ea0414.jpg',1,500,1,1,10,''),(10,1,1,'Tempeh steak with barbeque sauce',10000,'Mangkok',999,'assets/product-pict/10/a921f71bbfd74ee14b9d869dd89f79ba.jpg',1,500,1,1,10,NULL),(11,1,2,'Marimas with orange squash',10000,'Mangkok',963,'assets/product-pict/11/a14af5b9f1d99bb03186112b6c8c2d83.jpg',1,500,1,1,10,NULL),(12,1,2,'Nasgitel',10000,'Liter',999,'assets/product-pict/12/9aad22b6ca024cb0b237de0a1eb2b3c6.jpg',1,500,1,1,10,NULL),(13,1,2,'Banana Squash',10000,'Liter',997,'assets/product-pict/13/c70bb0a3877357179c2c74af50760a9b.jpg',1,500,1,1,10,NULL),(14,1,1,'Oyster Sauce',10000,'Buah',-5,'assets/product-pict/14/abba64a47a3fabc95ad83aa7e3a362f4.jpg',1,1,1,1,1,NULL),(15,1,1,'Garlic Sauce',10000,'piring',100,'assets/product-pict/15/a611fecfc488c2ca995c6543e90dba01.jpg',1,1,1,1,1,NULL),(16,1,1,'Sweet and Sour Sauce',10000,'piring',100,'assets/product-pict/16/b228f2ee92af30a8ca88dc8d1fbe8971.jpg',1,1,1,1,1,NULL),(17,1,1,'Chilli Sauce',10000,'piring',100,'assets/product-pict/17/b1ba9273a9e1f2b33a62f2e4e1ea74fb.jpg',1,1,1,1,1,NULL),(18,1,1,'Peking Sauce',10000,'piring',100,'assets/product-pict/18/9ef36d3a85cee643a8eb2fbe6d83474c.jpg',1,1,1,1,1,NULL),(19,1,1,'Mini Prawn Omelletes',10000,'piring',100,'assets/product-pict/19/82c72fba1df47eb343640a668cd802fc.jpg',1,1,1,1,1,NULL),(20,1,1,'King Prawn Omelletes',10000,'piring',100,'assets/product-pict/20/1db0f1b548d262846714630d5d05a9bc.jpg',1,1,1,1,1,NULL),(21,1,1,'Steamed Duck With Crab Meat Sauce and Vegetables',10000,'piring',100,'assets/product-pict/21/590a32aea18a30b82e56c44c4ec25b5b.jpg',1,1,1,1,1,NULL),(22,1,2,'Matcha Cocktail',10000,'Gelas',81,'assets/product-pict/22/03f2df17736dc2bcf5e220b3d6be6f30.jpg',1,1,1,1,1,NULL),(23,1,2,'Champagne',10000,'Gelas',100,'assets/product-pict/23/872f6d76e90d8cf0b7d68dcb521d7edb.jpg',1,1,1,1,1,NULL),(24,1,1,'Teriyaki Squid',10000,'Gelas',100,'assets/product-pict/24/825f310203189daf723c4ead890df120.jpg',1,1,1,1,1,NULL),(25,1,1,'Grilled Lamb',100000,'Gelas',100,'assets/product-pict/25/2f4d5b77e9d5dbbae675c2ab88708b6c.jpg',1,1,1,1,1,NULL),(27,1,1,'Mie Ayam',10000,'Mangkok',1000,'assets/product-pict/27/1474f8c2854c249f9f66c01ce7cda324.jpg',1,500,1,1,100,NULL),(28,1,1,'Lemper Guling',100000,'Gelundung',100,'assets/product-pict/28/b92dbb62861bdeb76bbdbba3cba3c3f0.jpg',1,1,1,1,1,NULL),(29,1,1,'Chicken Grilled',30000,'Piring',-25,NULL,0,0,1,0,0,'Ayam jawa yang dibakar dengan bumbu asli racikan ala perancis dan teknik pengasapan yang berasal dari Italia yang menambah cita rasa dari ayam tersebut.\r\n\r\ngratis es teh'),(31,2,1,'Scampi',20000,'Piring',20,'assets/product-pict/31/cb7e9f49e2ddfb4687b1f87900be8e14.jpeg',0,0,1,0,0,'0');

/*Table structure for table `md_tables` */

DROP TABLE IF EXISTS `md_tables`;

CREATE TABLE `md_tables` (
  `tab_id` int(11) NOT NULL AUTO_INCREMENT,
  `outlet_id` int(11) NOT NULL,
  `tab_name` varchar(100) DEFAULT NULL,
  `tab_status` int(1) DEFAULT NULL,
  PRIMARY KEY (`tab_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

/*Data for the table `md_tables` */

insert  into `md_tables`(`tab_id`,`outlet_id`,`tab_name`,`tab_status`) values (3,1,'Meja 2',1),(4,1,'Meja 3',1),(5,1,'Meja 4',1),(6,1,'Meja 5',0),(7,1,'Meja 6',1),(8,1,'Meja 7',1),(9,1,'Meja 8',1),(17,1,'Meja 12',0),(18,2,'Meja 1',1);

/*Table structure for table `md_users` */

DROP TABLE IF EXISTS `md_users`;

CREATE TABLE `md_users` (
  `users_id` int(11) NOT NULL AUTO_INCREMENT,
  `roles_id` int(11) NOT NULL,
  `users_fullname` varchar(100) DEFAULT NULL,
  `users_mail` varchar(100) DEFAULT NULL,
  `users_phone` varchar(14) DEFAULT NULL,
  `users_address` text,
  `users_born` date DEFAULT NULL,
  `users_photo` varchar(100) DEFAULT NULL,
  `users_password` varchar(100) DEFAULT NULL,
  `users_registered` datetime DEFAULT NULL,
  `users_status` int(1) DEFAULT NULL,
  PRIMARY KEY (`users_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

/*Data for the table `md_users` */

insert  into `md_users`(`users_id`,`roles_id`,`users_fullname`,`users_mail`,`users_phone`,`users_address`,`users_born`,`users_photo`,`users_password`,`users_registered`,`users_status`) values (1,1,'Admin','folarium@gmail.com','0812345566','Jl. Kapten Haryadi No 117','1992-02-23','assets/photo-pict/admin-5a6982d7b91f3.jpg','2aefc34200a294a3cc7db81b43a81873','2018-01-18 08:00:00',2),(5,5,'Customer','nanikanarifah48@gmail.com','90723403264','jogja','1970-01-01','assets/emp-pict/folar-emp-5a72940ebc1d8.jpg',NULL,'0000-00-00 00:00:00',NULL),(6,2,'Finance','anarifa48@gmail.com','09273624','ljksahs','1970-01-01','assets/emp-pict/folar-emp-5a72949eaab71.jpg',NULL,'0000-00-00 00:00:00',NULL),(7,6,'Dhoni','dellacroug@gmail.com','634534346','disana ','1970-04-01','assets/emp-pict/folar-emp-5a83a4585f642.jpg','827ccb0eea8a706c4c34a16891f84e7b','2018-02-14 12:49:27',4),(8,4,'Dhoni Purnomo Saputra','dhoni.purnomo.saputra@gmail.com',NULL,NULL,NULL,NULL,'827ccb0eea8a706c4c34a16891f84e7b',NULL,2),(9,4,'Dellacroug','detekoe@gmail.com',NULL,NULL,NULL,NULL,'827ccb0eea8a706c4c34a16891f84e7b',NULL,2),(10,6,'Cashier','cashier.folarium@gmail.com','45345345','disana','1970-01-01','assets/emp-pict/folar-emp-5a83e3c3b1cf6.jpg','827ccb0eea8a706c4c34a16891f84e7b','2018-02-14 15:44:57',2),(11,6,'Cashier Folarpos','cashier.folarpos@gmail.com','234235234','disana','1970-01-06','assets/emp-pict/folar-emp-5a83fbd348e2f.jpg','e10adc3949ba59abbe56e057f20f883e','2018-02-14 16:11:25',2),(16,4,'Dhoni Purnomo Saputra','support@aicorp.localhost',NULL,NULL,NULL,NULL,'827ccb0eea8a706c4c34a16891f84e7b',NULL,1),(17,4,'Dhoni Purnomo Saputra','owner.folarpos@gmail.com',NULL,NULL,NULL,NULL,'827ccb0eea8a706c4c34a16891f84e7b',NULL,2);

/*Table structure for table `md_users_outlet` */

DROP TABLE IF EXISTS `md_users_outlet`;

CREATE TABLE `md_users_outlet` (
  `users_outlet_id` int(11) NOT NULL AUTO_INCREMENT,
  `outlet_roles_id` int(11) NOT NULL COMMENT 'sebelumnya outlet_roles_id',
  `outlet_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `users_outlet_registered` datetime DEFAULT NULL,
  `users_outlet_status` int(1) DEFAULT NULL,
  PRIMARY KEY (`users_outlet_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `md_users_outlet` */

insert  into `md_users_outlet`(`users_outlet_id`,`outlet_roles_id`,`outlet_id`,`users_id`,`users_outlet_registered`,`users_outlet_status`) values (1,1,1,17,'2018-01-31 09:42:01',2),(2,1,2,3,'2018-02-01 11:01:20',2),(3,1,3,3,'2018-02-01 11:02:02',NULL),(4,2,1,11,'2018-02-14 16:07:32',2),(5,1,4,17,'2018-02-19 16:01:05',NULL);

/*Table structure for table `mg_contents` */

DROP TABLE IF EXISTS `mg_contents`;

CREATE TABLE `mg_contents` (
  `cont_id` int(11) NOT NULL AUTO_INCREMENT,
  `apps_id` int(1) NOT NULL,
  `cont_ct_id` int(2) NOT NULL,
  `cont_header` varchar(100) DEFAULT NULL,
  `cont_title` varchar(150) DEFAULT NULL,
  `cont_url` varchar(150) DEFAULT NULL,
  `cont_date` datetime DEFAULT NULL,
  `cont_desc` text,
  `cont_files` varchar(100) DEFAULT NULL,
  `cont_keyword` varchar(100) DEFAULT NULL,
  `cont_status` int(1) DEFAULT NULL,
  `cont_publish` date DEFAULT NULL,
  `cont_expired` date DEFAULT NULL,
  PRIMARY KEY (`cont_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

/*Data for the table `mg_contents` */

insert  into `mg_contents`(`cont_id`,`apps_id`,`cont_ct_id`,`cont_header`,`cont_title`,`cont_url`,`cont_date`,`cont_desc`,`cont_files`,`cont_keyword`,`cont_status`,`cont_publish`,`cont_expired`) values (9,1,1,'assets/promo-pict/promo-5a77f746e3527.jpg','Telo','Telo','2018-02-02 22:20:28','<p>dfsad Asd Sa</p>',NULL,NULL,1,'2000-01-01','2010-01-01'),(10,1,1,'assets/promo-pict/promo-5a7934ff70ce6.jpg','Rtrtrt','Rtrtrt','2018-02-06 11:54:23','<p>rtrtrtrt</p>','assets/promo-pict/files-other/FOLARPOS CATALOG.pdf','Rrtrt',1,'2018-02-10','2018-02-21');

/*Table structure for table `mg_disc_outlet` */

DROP TABLE IF EXISTS `mg_disc_outlet`;

CREATE TABLE `mg_disc_outlet` (
  `disc_outlet_id` int(11) NOT NULL AUTO_INCREMENT,
  `outlet_id` int(11) NOT NULL,
  `disc_id` int(11) NOT NULL,
  `disc_outlet_date` datetime DEFAULT NULL,
  `disc_outlet_status` int(11) NOT NULL,
  PRIMARY KEY (`disc_outlet_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

/*Data for the table `mg_disc_outlet` */

insert  into `mg_disc_outlet`(`disc_outlet_id`,`outlet_id`,`disc_id`,`disc_outlet_date`,`disc_outlet_status`) values (3,11,1,'2018-02-06 21:02:36',2),(7,11,4,'2018-02-06 21:12:20',2),(11,9,5,'2018-02-09 11:10:49',2),(13,11,5,'2018-02-09 11:10:49',2),(14,10,4,'2018-02-09 11:24:20',2),(15,9,6,'2018-02-09 11:27:10',2);

/*Table structure for table `mg_disc_products` */

DROP TABLE IF EXISTS `mg_disc_products`;

CREATE TABLE `mg_disc_products` (
  `disc_prod_id` int(11) NOT NULL AUTO_INCREMENT,
  `disc_id` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  PRIMARY KEY (`disc_prod_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `mg_disc_products` */

/*Table structure for table `mg_inv_outlet` */

DROP TABLE IF EXISTS `mg_inv_outlet`;

CREATE TABLE `mg_inv_outlet` (
  `inv_outlet_id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `bank_id` int(11) NOT NULL,
  `outlet_id` int(11) NOT NULL,
  `inv_outlet_date` datetime DEFAULT NULL,
  `inv_outlet_nominal` double DEFAULT NULL,
  `inv_outlet_paid` datetime DEFAULT NULL,
  `inv_outlet_evidence` varchar(100) DEFAULT NULL,
  `inv_outlet_status` int(1) DEFAULT NULL,
  PRIMARY KEY (`inv_outlet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `mg_inv_outlet` */

/*Table structure for table `mg_member` */

DROP TABLE IF EXISTS `mg_member`;

CREATE TABLE `mg_member` (
  `member_id` int(11) NOT NULL AUTO_INCREMENT,
  `outlet_id` int(11) NOT NULL,
  `member_name` varchar(100) DEFAULT NULL,
  `member_code` varchar(8) DEFAULT NULL,
  `member_phone` varchar(100) DEFAULT NULL,
  `member_mail` varchar(100) DEFAULT NULL,
  `member_registered` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`member_id`),
  UNIQUE KEY `member_code` (`member_code`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

/*Data for the table `mg_member` */

insert  into `mg_member`(`member_id`,`outlet_id`,`member_name`,`member_code`,`member_phone`,`member_mail`,`member_registered`) values (12,1,'bsdvsdfsdf','125a8e71','sdfjlskdfj','dhoni.p.saputra@gmail.com','2018-02-22 14:30:23'),(2,1,'Didi Sudada','laeyes','1568898588','dhoni.p.saputra@gmail.com','0000-00-00 00:00:00'),(4,1,'Tata sutete','regh54','1','dhoni.p.saputra@gmail.com',NULL),(16,1,'sfasgasgasdf','165a8e99','23423523234','dhoni.p.saputra@gmail.com','2018-02-22 17:22:37'),(6,1,'Jaja','5a8e4e00','1','dhoni.p.saputra@gmail.com','2018-02-22 11:58:40'),(7,1,'Jaja','3h343','1','dhoni.p.saputra@gmail.com','2018-02-22 11:59:40'),(8,1,'Jaja','5a8e4e8f','1','dhoni.p.saputra@gmail.com','2018-02-22 12:01:03'),(9,1,'Jaja','5a8e4ebc','1','dhoni.p.saputra@gmail.com','2018-02-22 12:01:48'),(10,1,'Jaja','h35h53','1','dhoni.p.saputra@gmail.com','2018-02-22 12:03:26'),(11,1,'Jaja','115a8e4f','1','dhoni.p.saputra@gmail.com','2018-02-22 12:04:00'),(13,1,'asdasdasfasd','135a8e73','32425324235234','dhoni.p.saputra@gmail.com','2018-02-22 14:37:10'),(14,1,'laskjflasgegwlkefjQ','145a8e73','34346345345','dhoni.p.saputra@gmail.com','2018-02-22 14:38:04'),(15,1,'gflkaskjaskfjalsdjl','155a8e74','sdlfkjsdlfkjl','dhoni.p.saputra@gmail.com','2018-02-22 14:44:41'),(17,1,'wefwefweweg','175a8ea7','35235234','dhoni.p.saputra@gmail.com','2018-02-22 18:21:42'),(18,1,'gwegwefew','185a8ea8','wegwefwef','dhoni.p.saputra@gmail.com','2018-02-22 18:23:54'),(19,1,'gfwegwefff323','195a8eaa','sdfsdfsdf','dhoni.p.saputra@gmail.com','2018-02-22 18:32:30'),(20,1,'qwfqw','205a8eb0','gwefewfef','dhoni.p.saputra@gmail.com','2018-02-22 18:57:31'),(21,1,'Dhoni','215a8f88','12345','dhoni.p.saputra@gmail.com','2018-02-23 10:20:43');

/*Table structure for table `mg_member_debt` */

DROP TABLE IF EXISTS `mg_member_debt`;

CREATE TABLE `mg_member_debt` (
  `debt_id` int(11) NOT NULL AUTO_INCREMENT,
  `pay_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `debt_date` datetime DEFAULT NULL,
  `debt_in` double DEFAULT NULL,
  `debt_out` double DEFAULT NULL,
  `debt_rest` double DEFAULT NULL,
  PRIMARY KEY (`debt_id`)
) ENGINE=MyISAM AUTO_INCREMENT=58 DEFAULT CHARSET=latin1;

/*Data for the table `mg_member_debt` */

insert  into `mg_member_debt`(`debt_id`,`pay_id`,`member_id`,`debt_date`,`debt_in`,`debt_out`,`debt_rest`) values (57,85,2,'2018-02-27 11:08:48',0,10000,200000),(56,85,2,'2018-02-27 11:08:45',0,10000,210000),(51,85,2,'2018-02-26 21:42:24',80000,0,220000),(50,88,2,'2018-02-26 21:40:14',140000,0,140000),(49,87,4,'2018-02-26 21:34:20',140000,0,140000);

/*Table structure for table `mg_modal` */

DROP TABLE IF EXISTS `mg_modal`;

CREATE TABLE `mg_modal` (
  `modal_id` int(11) NOT NULL AUTO_INCREMENT,
  `users_outlet_id` int(11) NOT NULL,
  `outlet_id` int(11) NOT NULL,
  `modal_date` datetime DEFAULT NULL,
  `modal_nominal` double DEFAULT NULL,
  `modal_note` text,
  `id_shift` int(11) NOT NULL,
  PRIMARY KEY (`modal_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `mg_modal` */

insert  into `mg_modal`(`modal_id`,`users_outlet_id`,`outlet_id`,`modal_date`,`modal_nominal`,`modal_note`,`id_shift`) values (2,4,1,NULL,10000,NULL,0),(3,4,1,'2018-02-23 10:12:53',234234,'523434343',0),(4,4,1,'2018-02-27 18:17:21',10000,'asdasfasdasdasd',0),(5,4,1,'2018-02-27 19:28:57',2342344,'sdfsdfsdfsdf',0),(6,4,1,'2018-03-07 18:15:39',20000,'Modal',2);

/*Table structure for table `mg_po` */

DROP TABLE IF EXISTS `mg_po`;

CREATE TABLE `mg_po` (
  `po_id` int(11) NOT NULL AUTO_INCREMENT,
  `users_outlet_id` int(11) NOT NULL,
  `outlet_id` int(11) NOT NULL,
  `po_date` datetime DEFAULT NULL,
  `po_supplier` varchar(100) DEFAULT NULL,
  `po_total` double DEFAULT NULL,
  `po_status` int(1) DEFAULT NULL,
  `po_paid` datetime DEFAULT NULL,
  PRIMARY KEY (`po_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `mg_po` */

/*Table structure for table `mg_po_dt` */

DROP TABLE IF EXISTS `mg_po_dt`;

CREATE TABLE `mg_po_dt` (
  `po_dt_id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_id` int(11) NOT NULL,
  `po_id` int(11) NOT NULL,
  `po_dt_price` double DEFAULT NULL,
  `po_dt_qty` double DEFAULT NULL,
  `po_dt_total` double DEFAULT NULL,
  PRIMARY KEY (`po_dt_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `mg_po_dt` */

/*Table structure for table `mg_shift` */

DROP TABLE IF EXISTS `mg_shift`;

CREATE TABLE `mg_shift` (
  `id_shift` int(11) NOT NULL AUTO_INCREMENT,
  `shift_start` time NOT NULL,
  `shift_end` time NOT NULL,
  `outlet_id` int(11) NOT NULL,
  `shift_number` int(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_shift`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `mg_shift` */

insert  into `mg_shift`(`id_shift`,`shift_start`,`shift_end`,`outlet_id`,`shift_number`) values (1,'10:00:00','17:00:00',1,1),(2,'17:00:00','23:00:00',1,2),(3,'23:00:00','23:59:00',1,3),(4,'00:00:00','03:00:00',1,4);

/*Table structure for table `mg_spe_dt` */

DROP TABLE IF EXISTS `mg_spe_dt`;

CREATE TABLE `mg_spe_dt` (
  `sp_dt_id` int(11) NOT NULL AUTO_INCREMENT,
  `sp_id` int(11) NOT NULL,
  `prod_id` int(11) DEFAULT NULL,
  `sp_dt_desc` varchar(150) DEFAULT NULL,
  `sp_dt_price` double DEFAULT NULL,
  `sp_dt_qty` double DEFAULT NULL,
  `sp_dt_total` double DEFAULT NULL,
  `sp_dt_note` text,
  `ingd_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`sp_dt_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `mg_spe_dt` */

insert  into `mg_spe_dt`(`sp_dt_id`,`sp_id`,`prod_id`,`sp_dt_desc`,`sp_dt_price`,`sp_dt_qty`,`sp_dt_total`,`sp_dt_note`,`ingd_id`) values (1,3,NULL,'Barang Bekas',10000,10,100000,NULL,NULL),(2,5,NULL,NULL,100,1000,100000,'sddasfsad',12),(4,7,0,'',100,1000,100000,'Test',12),(5,8,0,'',100,100,10000,'asdasf',12),(6,9,0,'',100,50,5000,'asfasdasf',12),(7,10,NULL,NULL,1000,20,20000,'asfasd',12);

/*Table structure for table `mg_spends` */

DROP TABLE IF EXISTS `mg_spends`;

CREATE TABLE `mg_spends` (
  `sp_id` int(11) NOT NULL AUTO_INCREMENT,
  `users_outlet_id` int(11) NOT NULL,
  `outlet_id` int(11) NOT NULL,
  `sp_type` int(1) DEFAULT NULL,
  `sp_date` datetime DEFAULT NULL,
  `sp_supplier` varchar(100) DEFAULT NULL,
  `sp_bill` double DEFAULT NULL,
  `sp_tax_percent` double DEFAULT NULL,
  `sp_tax_nominal` double DEFAULT NULL,
  `sp_disc_percent` double DEFAULT NULL,
  `sp_disc_nominal` double DEFAULT NULL,
  `sp_total` double DEFAULT NULL,
  `sp_paid` datetime DEFAULT NULL,
  `sp_status` int(1) DEFAULT NULL,
  `sp_note` text,
  PRIMARY KEY (`sp_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

/*Data for the table `mg_spends` */

insert  into `mg_spends`(`sp_id`,`users_outlet_id`,`outlet_id`,`sp_type`,`sp_date`,`sp_supplier`,`sp_bill`,`sp_tax_percent`,`sp_tax_nominal`,`sp_disc_percent`,`sp_disc_nominal`,`sp_total`,`sp_paid`,`sp_status`,`sp_note`) values (1,4,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,4,1,1,'2018-02-27 12:10:33','PT. D',100000,0,0,0,0,100000,'2018-02-27 12:10:33',NULL,NULL),(7,4,1,2,'2018-03-08 09:51:41','PT. C',100000,0,0,0,0,100000,'2018-03-08 09:51:41',NULL,'Pembelian daging'),(8,4,1,2,'2018-03-08 09:51:41','PT. C',10000,0,0,0,0,10000,'2018-03-08 09:51:41',NULL,'Pembelian daging'),(9,4,1,2,'2018-03-08 09:51:41','PT. C',5000,0,0,0,0,5000,'2018-03-08 09:51:41',NULL,'Pembelian daging'),(10,4,1,2,'2018-03-08 10:47:07','PT. G',21600,10,2000,2,400,21600,'2018-03-08 10:47:07',NULL,'dasfasdads');

/*Table structure for table `tr_payment` */

DROP TABLE IF EXISTS `tr_payment`;

CREATE TABLE `tr_payment` (
  `pay_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'payment id',
  `users_outlet_id` int(11) NOT NULL COMMENT 'user outlet id',
  `member_id` int(11) DEFAULT NULL COMMENT 'member_id',
  `tab_id` int(11) NOT NULL COMMENT 'table id',
  `bank_id` int(11) NOT NULL COMMENT 'bank id',
  `disc_id` int(11) NOT NULL COMMENT 'discount id',
  `outlet_payment_method_id` int(11) NOT NULL COMMENT 'method pembayaran',
  `outlet_id` int(11) NOT NULL COMMENT 'outlet id',
  `pay_visitor` varchar(100) DEFAULT NULL COMMENT 'nama pengunjung',
  `pay_bills` double DEFAULT NULL COMMENT 'jumlah yang harus dibayarkan oleh konsumen (Jumlah Total dari bill)',
  `pay_total` double DEFAULT NULL COMMENT 'jumlah dibayarkan total (Grand Total)',
  `pay_nom` varchar(10) DEFAULT NULL COMMENT 'jumlah yang dibayarkan oleh konsumen',
  `pay_paid_nom` double DEFAULT NULL COMMENT 'jumlah dibayarkan cash (jika pengunjung juga menggunakan bank)',
  `pay_bank_nom` varchar(100) DEFAULT NULL COMMENT 'jika dibayarkan menggunakan bank. (referred with pay_paid_nom)',
  `pay_tax_percent` double DEFAULT NULL COMMENT 'tax dalam percent',
  `pay_tax_nominal` double DEFAULT NULL COMMENT 'tax ditulis manual',
  `pay_date` datetime DEFAULT NULL COMMENT 'tanggal jam nota dibuat',
  `pay_paid` datetime DEFAULT NULL COMMENT 'tanggal jam waktu pembayaran',
  `pay_compl_status` int(1) DEFAULT NULL COMMENT 'status pembayaran complete',
  `pay_compl_note` text COMMENT 'note jika pembayaran complete',
  `pay_cancel_status` int(1) DEFAULT NULL COMMENT 'status pembayaran cancel',
  `pay_cancel_note` text COMMENT 'catatan jika pembayaran cancel.',
  `pay_rest` double DEFAULT NULL COMMENT 'sisa pembayaran',
  `pay_bank_charge_percent` int(11) DEFAULT NULL,
  `pay_bank_charge_nominal` double DEFAULT NULL,
  `pay_ref` int(11) DEFAULT NULL COMMENT 'referensi untuk split dan merge',
  PRIMARY KEY (`pay_id`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=latin1;

/*Data for the table `tr_payment` */

insert  into `tr_payment`(`pay_id`,`users_outlet_id`,`member_id`,`tab_id`,`bank_id`,`disc_id`,`outlet_payment_method_id`,`outlet_id`,`pay_visitor`,`pay_bills`,`pay_total`,`pay_nom`,`pay_paid_nom`,`pay_bank_nom`,`pay_tax_percent`,`pay_tax_nominal`,`pay_date`,`pay_paid`,`pay_compl_status`,`pay_compl_note`,`pay_cancel_status`,`pay_cancel_note`,`pay_rest`,`pay_bank_charge_percent`,`pay_bank_charge_nominal`,`pay_ref`) values (1,4,NULL,1,1,0,1,1,'Sandi',9800,10000,'100000',0,'0',0,0,'2018-02-02 15:40:40','2018-02-02 15:40:40',1,'',0,'',NULL,NULL,NULL,NULL),(2,4,NULL,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 17:24:00','2018-02-02 17:24:00',0,'',0,'',NULL,NULL,NULL,1),(3,4,NULL,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 18:19:49','2018-02-02 18:19:49',0,'',0,'',NULL,NULL,NULL,1),(4,4,NULL,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 18:21:30','2018-02-02 18:21:30',0,'',0,'',NULL,NULL,NULL,NULL),(5,4,NULL,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 18:22:26','2018-02-02 18:22:26',0,'',0,'',NULL,NULL,NULL,NULL),(6,4,NULL,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 18:26:21','2018-02-02 18:26:21',0,'',0,'',NULL,NULL,NULL,NULL),(7,4,NULL,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 18:26:59','2018-02-02 18:26:59',0,'',0,'',NULL,NULL,NULL,NULL),(8,4,NULL,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 18:27:57','2018-02-02 18:27:57',0,'',0,'',NULL,NULL,NULL,NULL),(9,4,NULL,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 22:04:18','2018-02-02 22:04:18',0,'',0,'',NULL,NULL,NULL,NULL),(10,4,NULL,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 22:05:04','2018-02-02 22:05:04',0,'',0,'',NULL,NULL,NULL,NULL),(11,4,NULL,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 22:05:16','2018-02-02 22:05:16',0,'',0,'',NULL,NULL,NULL,NULL),(12,4,NULL,1,1,0,1,1,'Bunda',10000,10000,'10000',0,'0',0,0,'2018-02-02 22:07:07','2018-02-02 22:07:07',0,'',0,'',NULL,NULL,NULL,NULL),(13,4,NULL,21,1,0,1,1,'Samawa',10000,10000,'10000',0,'0',0,0,'2018-02-02 22:09:08','2018-02-02 22:09:08',0,'',0,'',NULL,NULL,NULL,NULL),(14,4,NULL,3,1,0,1,1,'Sasa',10000,10000,'10000',0,'0',0,0,'2018-02-04 22:06:56','2018-02-04 22:06:56',0,'',0,'',NULL,NULL,NULL,NULL),(15,4,NULL,3,1,0,1,1,'Sasa',10000,10000,'10000',0,'0',0,0,'2018-02-04 22:08:29','2018-02-04 22:08:29',0,'',0,'',NULL,NULL,NULL,NULL),(16,4,NULL,3,1,0,1,1,'Sasa',10000,10000,'10000',0,'0',0,0,'2018-02-04 22:10:09','2018-02-04 22:10:09',0,'',0,'',NULL,NULL,NULL,NULL),(17,4,NULL,1,1,0,1,1,'D',0,0,'0',0,'0',0,0,'2018-02-04 22:31:27','2018-02-04 22:31:27',0,'',0,'',NULL,NULL,NULL,NULL),(18,4,NULL,3,1,0,1,1,'Dhoni',0,0,'0',0,'0',0,0,'2018-02-04 23:22:29','2018-02-04 23:22:29',0,'',0,'',NULL,NULL,NULL,NULL),(19,4,NULL,4,1,0,1,1,'Dhoni',0,0,'0',0,'0',0,0,'2018-02-04 23:23:43','2018-02-04 23:23:43',0,'',0,'',NULL,NULL,NULL,NULL),(20,4,NULL,0,1,0,1,1,'334',0,0,'0',0,'0',0,0,'2018-02-04 23:24:22','2018-02-04 23:24:22',0,'',0,'',NULL,NULL,NULL,NULL),(21,4,NULL,0,1,0,1,1,'454',0,0,'0',0,'0',0,0,'2018-02-04 23:26:53','2018-02-04 23:26:53',0,'',0,'',NULL,NULL,NULL,NULL),(22,4,NULL,0,1,0,1,1,'6756',0,0,'0',0,'0',0,0,'2018-02-04 23:27:08','2018-02-04 23:27:08',0,'',0,'',NULL,NULL,NULL,NULL),(23,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:03','2018-02-05 01:40:03',0,'',0,'',NULL,NULL,NULL,NULL),(24,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:03','2018-02-05 01:40:03',0,'',0,'',NULL,NULL,NULL,NULL),(25,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:04','2018-02-05 01:40:04',0,'',0,'',NULL,NULL,NULL,NULL),(26,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:04','2018-02-05 01:40:04',0,'',0,'',NULL,NULL,NULL,NULL),(27,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:04','2018-02-05 01:40:04',0,'',0,'',NULL,NULL,NULL,NULL),(28,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:04','2018-02-05 01:40:04',0,'',0,'',NULL,NULL,NULL,NULL),(29,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:04','2018-02-05 01:40:04',0,'',0,'',NULL,NULL,NULL,NULL),(30,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:04','2018-02-05 01:40:04',0,'',0,'',NULL,NULL,NULL,NULL),(31,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:05','2018-02-05 01:40:05',0,'',0,'',NULL,NULL,NULL,NULL),(32,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:05','2018-02-05 01:40:05',0,'',0,'',NULL,NULL,NULL,NULL),(33,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:05','2018-02-05 01:40:05',0,'',0,'',NULL,NULL,NULL,NULL),(34,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:05','2018-02-05 01:40:05',0,'',0,'',NULL,NULL,NULL,NULL),(35,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:05','2018-02-05 01:40:05',0,'',0,'',NULL,NULL,NULL,NULL),(36,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:05','2018-02-05 01:40:05',0,'',0,'',NULL,NULL,NULL,NULL),(37,4,NULL,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:06','2018-02-05 01:40:06',0,'',0,'',NULL,NULL,NULL,NULL),(38,4,NULL,1,1,0,1,1,'D',20000,20000,'0',0,'0',0,0,'2018-02-05 01:55:15','2018-02-05 01:55:15',0,'',0,'',NULL,NULL,NULL,NULL),(39,4,NULL,1,1,0,1,1,'D',20000,20000,'0',0,'0',0,0,'2018-02-05 01:57:22','2018-02-05 01:57:22',0,'',0,'',NULL,NULL,NULL,NULL),(40,4,NULL,4,1,0,1,1,'Sahara',32000,32000,'35000',0,'0',0,0,'2018-02-05 02:05:55','2018-02-05 02:05:55',0,'',0,'',NULL,NULL,NULL,NULL),(41,4,NULL,6,1,0,1,1,'Dodo',12000,12000,'15000',0,'0',0,0,'2018-02-05 02:06:35','2018-02-05 02:06:35',0,'',0,'',NULL,NULL,NULL,NULL),(42,4,NULL,5,1,0,1,1,'Sagan',20000,20000,'20000',0,'0',0,0,'2018-02-05 02:07:58','2018-02-05 02:07:58',0,'',0,'',NULL,NULL,NULL,NULL),(43,4,NULL,3,1,0,1,1,'Safara',30000,30000,'36000',0,'0',0,0,'2018-02-05 02:10:03','2018-02-05 02:10:03',1,'',0,'',NULL,NULL,NULL,NULL),(44,4,NULL,0,1,0,1,1,'SSS',50000,50000,'50000',0,'0',0,0,'2018-02-05 02:10:25','2018-02-05 02:10:25',1,'',0,'',NULL,NULL,NULL,NULL),(45,4,NULL,23,1,0,1,1,'Sandi',60000,60000,'0',0,'0',0,0,'2018-02-05 11:09:07','2018-02-05 11:09:07',0,'',0,'',NULL,NULL,NULL,NULL),(46,4,NULL,4,1,0,1,1,'Budi',57000,57000,'0',0,'0',0,0,'2018-02-06 10:48:47','2018-02-06 10:48:47',0,'',0,'',NULL,NULL,NULL,NULL),(47,4,NULL,8,1,0,1,1,'Ardi',33000,33000,'0',0,'0',0,0,'2018-02-06 11:33:34','2018-02-06 11:33:34',0,'',0,'',NULL,NULL,NULL,NULL),(48,4,NULL,3,1,0,1,1,'Taooo',327000,327000,'900000',0,'0',0,0,'2018-02-06 14:16:42','2018-02-06 14:16:42',0,'',0,'',NULL,NULL,NULL,NULL),(49,4,NULL,3,1,0,1,1,'Taooo',327000,327000,'0',0,'0',0,0,'2018-02-06 14:16:44','2018-02-06 14:16:44',0,'',0,'',NULL,NULL,NULL,NULL),(50,4,NULL,3,1,0,1,1,'Gogo',115000,115000,'0',0,'0',0,0,'2018-02-06 14:34:32','2018-02-06 14:34:32',0,'',0,'',NULL,NULL,NULL,NULL),(51,4,NULL,9,1,0,2,1,'Frendi',40000,40000,'0',0,'0',0,0,'2018-02-07 10:31:05','2018-02-07 10:31:05',0,'',0,'',NULL,NULL,NULL,NULL),(52,4,NULL,3,1,0,3,1,'Sasa',43000,45150,'0',0,'45150',5,2150,'2018-02-07 13:56:23','2018-02-07 13:56:23',1,'',0,'',NULL,NULL,NULL,NULL),(53,4,NULL,9,1,0,2,1,'Frendi',40000,40000,'0',0,'40000',0,0,'2018-02-07 14:07:00','2018-02-07 14:07:00',1,'',0,'',NULL,NULL,NULL,NULL),(54,4,NULL,4,1,0,1,1,'Babaga',93000,93000,'0',0,'0',0,0,'2018-02-07 16:04:06','2018-02-07 16:04:06',0,'',0,'',NULL,NULL,NULL,NULL),(55,4,NULL,9,1,0,1,1,'Folar',199000,199000,'0',0,'0',0,0,'2018-02-07 17:19:48','2018-02-07 17:19:48',0,'',0,'',NULL,NULL,NULL,NULL),(56,4,NULL,3,1,0,1,1,'dklflsdf',24000,24000,'50000',0,'0',0,0,'2018-02-07 21:31:58','2018-02-07 21:31:58',1,'',0,'',NULL,NULL,NULL,NULL),(57,4,NULL,0,1,0,1,1,'Test',30000,30000,'30000',0,'0',0,0,'2018-02-07 21:43:14','2018-02-07 21:43:14',1,'',0,'',NULL,NULL,NULL,NULL),(58,4,NULL,9,1,0,1,1,'Billy',23000,23000,'0',0,'0',0,0,'2018-02-09 10:32:05','2018-02-09 10:32:05',0,'',0,'',NULL,NULL,NULL,NULL),(59,4,NULL,4,1,0,1,1,'EEE',19890,20885,'0',0,'0',7,1392.3000000000002,'2018-02-12 10:27:42','0000-00-00 00:00:00',0,'',0,'',0,0,0,NULL),(60,4,NULL,3,1,0,1,1,'Hhh',70340,70340,'70340',0,'0',0,0,'2018-02-12 10:27:46','2018-02-12 10:27:46',0,'',0,'',0,0,0,NULL),(61,4,NULL,9,1,0,2,1,'999',63870,63870,'0',0,'71534',0,0,'2018-02-12 10:35:03','2018-02-12 10:35:03',0,'',0,'',0,12,7664,NULL),(62,4,NULL,7,1,0,3,1,'Xxx',77960,77960,'25000',0,'56858',0,0,'2018-02-12 10:37:39','2018-02-12 10:37:39',0,'',0,'',0,5,3898,NULL),(63,4,NULL,5,1,0,1,1,'Bang Jali',39970,39970,'39970',0,'0',0,0,'2018-02-12 10:40:15','2018-02-12 10:40:15',0,'',0,'',0,0,0,NULL),(64,4,NULL,7,1,0,1,1,'Aaa',73960,73960,'73960',0,'0',0,0,'2018-02-12 11:31:18','2018-02-12 11:31:18',0,'',0,'',0,0,0,NULL),(65,4,NULL,0,1,0,1,1,'RRR',62880,61623,'61623',0,'0',0,0,'2018-02-12 14:31:09','2018-02-12 14:31:09',0,'',0,'',0,0,0,NULL),(66,4,NULL,0,1,0,1,1,'EEE',37000,37000,'0',0,'0',0,0,'2018-02-12 15:27:39','0000-00-00 00:00:00',0,'',0,'',0,0,0,NULL),(67,4,NULL,0,1,0,1,1,'TTT',54990,54990,'0',0,'0',0,0,'2018-02-12 17:22:07','0000-00-00 00:00:00',0,'',0,'',0,0,0,NULL),(68,4,NULL,0,1,0,1,1,'TTT',54990,54990,'0',0,'0',0,0,'2018-02-12 17:23:59','0000-00-00 00:00:00',0,'',0,'',0,0,0,NULL),(69,4,NULL,0,1,0,1,1,'TTT',54990,54990,'0',0,'0',0,0,'2018-02-12 17:25:05','0000-00-00 00:00:00',0,'',0,'',0,0,0,NULL),(70,4,NULL,0,1,0,1,1,'TTT',54990,54990,'0',0,'0',0,0,'2018-02-12 17:26:42','0000-00-00 00:00:00',0,'',0,'',0,0,0,NULL),(71,4,NULL,0,1,0,1,1,'UUU',32890,32890,'0',0,'0',0,0,'2018-02-12 17:27:54','0000-00-00 00:00:00',0,'',1,'Premannya nangis',0,0,0,NULL),(72,4,NULL,0,1,1,1,1,'YYYY',81890,87623,'100000',0,'0',10,8189,'2018-02-13 13:19:25','2018-02-13 13:19:25',0,'',0,'',12377,0,0,NULL),(73,4,NULL,0,1,0,2,1,'aku',290839,290839,'290839',0,'290839',0,0,'2018-02-14 12:29:06','2018-02-14 12:29:06',0,'',0,'',0,0,0,NULL),(74,4,NULL,0,1,0,1,1,'sas',38880,38880,'38880',0,'0',0,0,'2018-02-14 12:31:57','0000-00-00 00:00:00',0,'',0,'',0,0,0,NULL),(75,4,NULL,5,1,0,1,1,'aku',45880,45880,'50000',0,'0',0,0,'2018-02-14 15:08:24','2018-02-14 15:08:24',0,'',0,'',4120,0,0,NULL),(76,4,NULL,0,1,0,1,1,'Ftff',47100,47100,'0',0,'0',0,0,'2018-02-14 21:35:58','0000-00-00 00:00:00',0,'',0,'',0,0,0,NULL),(77,4,NULL,0,1,0,1,1,'RRR',95040,95040,'95040',0,'0',0,0,'2018-02-15 16:08:58','2018-02-15 16:08:59',0,'',0,'',0,0,0,NULL),(78,4,NULL,0,1,0,1,1,'SSS',72270,72270,'72270',0,'0',0,0,'2018-02-15 17:15:14','0000-00-00 00:00:00',0,'',1,'',0,0,0,NULL),(79,4,NULL,0,1,0,1,1,'Yyyy',79200,79200,'0',0,'0',0,0,'2018-02-15 17:19:53','2018-02-15 19:19:53',0,'',1,'',0,0,0,NULL),(80,4,NULL,3,1,0,1,1,'asdlasd',64350,64350,'64350',0,'0',10,10035,'2018-02-18 10:24:24','2018-02-19 11:24:24',0,'',1,'',0,0,0,NULL),(81,4,NULL,3,1,0,1,1,'Mr. Fandhu',10000,11000,'15000',0,'0',10,1000,'2018-02-19 11:07:54','2018-02-19 13:07:54',0,'',1,'',4000,0,0,NULL),(82,4,NULL,0,1,0,1,1,'fas',42570,42570,'42570',0,'0',0,0,'2018-02-19 11:08:08','2018-02-19 12:08:08',0,'',1,'',0,0,0,NULL),(83,4,NULL,0,1,0,1,1,'opo',22770,22770,'22770',0,'0',0,0,'2018-02-19 14:50:36','2018-02-19 14:50:37',0,'',0,'',0,0,0,NULL),(84,4,NULL,3,1,0,1,1,'reno',42570,42570,'42570',0,'0',0,0,'2018-02-19 15:32:27','2018-02-19 15:32:27',0,'',1,'',0,0,0,NULL),(85,4,20,0,1,0,1,1,'qwfqw',29700,29700,'29700',0,'0',0,0,'2018-02-22 18:57:43','2018-02-22 18:57:44',0,'',0,'',0,0,0,0),(86,4,12,0,1,0,1,1,'bsdvsdfsdf',48510,48510,'48510',0,'0',0,0,'2018-02-22 19:18:48','2018-02-22 19:18:49',0,'',0,'',0,0,0,0),(87,4,4,0,1,0,1,1,'Dhoni',58410,58410,'58410',0,'0',0,0,'2018-02-23 10:21:16','2018-02-23 10:21:18',0,'',0,'',0,0,0,0),(88,4,2,0,1,0,1,1,'Dhoni',88110,88110,'88110',0,'0',0,0,'2018-02-23 10:27:44','2018-02-23 10:27:46',0,'',0,'',0,0,0,0),(89,4,4,0,1,0,1,1,'Tata sutete',63360,63360,'70000',0,'0',0,0,'2018-03-07 15:35:11','2018-03-07 15:35:11',0,'',0,'',6640,0,0,0),(90,4,0,0,1,0,1,1,'Jakdnx',34650,34650,'34650',0,'0',0,0,'2018-03-07 15:48:19','2018-03-07 15:48:20',0,'',0,'',0,0,0,0),(91,4,0,0,1,0,1,1,'Ujang',45540,45540,'50000',0,'0',0,0,'2018-03-07 15:55:16','2018-03-07 15:55:16',0,'',0,'',4460,0,0,0),(92,4,0,0,1,0,1,1,'Ujang',45540,45540,'50000',0,'0',0,0,'2018-03-07 15:57:47','2018-03-07 15:57:47',0,'',0,'',4460,0,0,0),(93,4,0,0,1,0,1,1,'Ujang',45540,45540,'50000',0,'0',0,0,'2018-03-07 15:58:21','2018-03-07 15:58:22',0,'',0,'',4460,0,0,0),(94,4,2,0,1,0,1,1,'Didi Sudada',76230,76230,'76230',0,'0',0,0,'2018-03-07 16:04:05','2018-03-07 16:04:05',0,'',0,'',0,0,0,0),(95,4,0,0,1,0,1,1,'Wakanda',35640,35997,'50000',0,'0',10,3564,'2018-03-07 16:14:47','2018-03-07 16:14:48',0,'',0,'',14360,0,0,0),(96,4,0,0,1,0,1,1,'Ruhiyah',39600,39600,'50000',0,'0',0,0,'2018-03-07 16:22:41','2018-03-07 16:22:41',0,'',0,'',10400,0,0,0),(97,4,0,0,1,0,1,1,'Aiken',24750,24750,'24750',0,'0',0,0,'2018-03-07 16:26:22','2018-03-07 16:26:23',0,'',0,'',0,0,0,0),(98,4,0,0,1,0,1,1,'Mie lovers',49500,49500,'50000',0,'0',0,0,'2018-03-07 16:41:15','2018-03-07 16:41:16',0,'',0,'',500,0,0,0),(99,4,0,0,1,0,3,1,'Juleha',79200,79200,'50000',0,'30784',0,0,'2018-03-07 16:56:50','2018-03-07 16:56:51',0,'',0,'',0,2,1584,0),(100,4,0,0,1,0,1,1,'Fandhu',64350,64350,'70000',0,'0',0,0,'2018-03-07 16:59:48','2018-03-07 16:59:48',0,'',0,'',5650,0,0,0),(101,4,0,0,1,0,1,1,'Juleha',52470,52470,'52470',0,'0',0,0,'2018-03-07 17:26:14','2018-03-07 17:26:15',0,'',0,'',0,0,0,0),(102,4,0,0,1,0,1,1,'Burhan',45540,45540,'45540',0,'0',0,0,'2018-03-07 17:34:44','2018-03-07 17:34:45',0,'',0,'',0,0,0,0),(103,4,0,0,1,0,1,1,'Richard ',43560,43560,'43560',0,'0',0,0,'2018-03-07 17:40:29','2018-03-07 17:40:30',0,'',0,'',0,0,0,0),(104,4,4,0,1,0,1,1,'Tata sutete',19800,19800,'19800',0,'0',0,0,'2018-03-07 19:26:14','2018-03-07 19:26:15',0,'',0,'',0,0,0,0),(105,4,0,0,1,0,1,1,'Aqua',90000,90000,'90000',0,'0',0,0,'2018-03-08 09:12:27','2018-03-08 09:12:29',0,'',0,'',0,0,0,0),(106,4,0,0,1,0,1,1,'Tumijo',60000,60000,'60000',0,'0',0,0,'2018-03-08 09:21:03','2018-03-08 09:21:04',0,'',0,'',0,0,0,0),(107,4,0,0,1,0,1,1,'RUminten',90000,90000,'90000',0,'0',0,0,'2018-03-08 09:30:04','2018-03-08 09:30:05',0,'',0,'',0,0,0,0),(108,4,0,0,1,0,1,1,'RUminten',90000,90000,'90000',0,'0',0,0,'2018-03-08 09:31:34','2018-03-08 09:31:35',0,'',0,'',0,0,0,0),(109,4,0,0,1,0,1,1,'RUminten',90000,90000,'90000',0,'0',0,0,'2018-03-08 09:32:04','2018-03-08 09:32:05',0,'',0,'',0,0,0,0),(110,4,0,0,1,0,1,1,'RUminten',90000,90000,'90000',0,'0',0,0,'2018-03-08 09:32:16','2018-03-08 09:32:18',0,'',0,'',0,0,0,0),(111,4,0,0,1,0,1,1,'RUminten',90000,90000,'90000',0,'0',0,0,'2018-03-08 09:34:27','2018-03-08 09:34:28',0,'',0,'',0,0,0,0),(112,4,0,0,1,0,1,1,'RUminten',90000,90000,'90000',0,'0',0,0,'2018-03-08 09:35:18','2018-03-08 09:35:19',0,'',0,'',0,0,0,0),(113,4,0,0,1,0,1,1,'RUminten',90000,90000,'90000',0,'0',0,0,'2018-03-08 09:36:25','2018-03-08 09:36:26',0,'',0,'',0,0,0,0),(114,4,0,0,1,0,1,1,'RUminten',90000,90000,'90000',0,'0',0,0,'2018-03-08 09:38:53','2018-03-08 09:38:55',0,'',0,'',0,0,0,0),(115,4,0,0,1,0,1,1,'RUminten',90000,90000,'90000',0,'0',0,0,'2018-03-08 09:39:34','2018-03-08 09:39:35',0,'',0,'',0,0,0,0),(116,4,0,0,1,0,1,1,'Juminten',60000,60000,'60000',0,'0',0,0,'2018-03-08 10:50:32','2018-03-08 10:50:34',0,'',0,'',0,0,0,0),(117,4,0,0,1,0,1,1,'Juminten',60000,60000,'60000',0,'0',0,0,'2018-03-08 10:53:02','2018-03-08 10:53:03',0,'',0,'',0,0,0,0),(118,4,0,0,1,0,1,1,'Juminten',60000,60000,'60000',0,'0',0,0,'2018-03-08 10:53:56','2018-03-08 10:53:56',0,'',0,'',0,0,0,0),(119,4,0,0,1,0,1,1,'Juminten',60000,60000,'60000',0,'0',0,0,'2018-03-08 10:58:42','2018-03-08 10:58:43',0,'',0,'',0,0,0,0),(120,4,0,0,1,0,1,1,'Sumini',30000,30000,'30000',0,'0',0,0,'2018-03-08 11:03:19','2018-03-08 11:03:20',0,'',0,'',0,0,0,0);

/*Table structure for table `tr_payment_dt` */

DROP TABLE IF EXISTS `tr_payment_dt`;

CREATE TABLE `tr_payment_dt` (
  `pay_dt_id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_id` int(11) NOT NULL,
  `pay_id` int(11) NOT NULL,
  `pay_dt_date` datetime DEFAULT NULL,
  `pay_dt_qty` double DEFAULT NULL,
  `pay_dt_price` double DEFAULT NULL,
  `pay_dt_total` double DEFAULT NULL,
  `pay_dt_note` text,
  `pay_dt_compl_status` int(1) DEFAULT NULL,
  `pay_dt_compl_note` text,
  `pay_dt_cancel_status` int(1) DEFAULT NULL,
  `pay_dt_cancel_note` text,
  `pay_dt_disc_percent` double DEFAULT NULL,
  `pay_dt_disc_nominal` double DEFAULT NULL,
  `pay_dt_order_session` int(10) DEFAULT NULL,
  PRIMARY KEY (`pay_dt_id`)
) ENGINE=InnoDB AUTO_INCREMENT=344 DEFAULT CHARSET=latin1;

/*Data for the table `tr_payment_dt` */

insert  into `tr_payment_dt`(`pay_dt_id`,`prod_id`,`pay_id`,`pay_dt_date`,`pay_dt_qty`,`pay_dt_price`,`pay_dt_total`,`pay_dt_note`,`pay_dt_compl_status`,`pay_dt_compl_note`,`pay_dt_cancel_status`,`pay_dt_cancel_note`,`pay_dt_disc_percent`,`pay_dt_disc_nominal`,`pay_dt_order_session`) values (1,1,6,'2018-02-02 18:26:21',1,10000,10000,'',1,'',0,'',1,100,NULL),(2,3,6,'2018-02-02 18:26:21',1,13000,13000,'',1,'',0,'',1,10,NULL),(3,7,6,'2018-02-02 18:26:21',1,10000,10000,'',1,'',0,'',1,10,NULL),(4,8,6,'2018-02-02 18:26:21',1,10000,10000,'',1,'',0,'',1,10,NULL),(5,4,6,'2018-02-02 18:26:21',2,1000,2000,'',1,'',0,'',1,10,NULL),(6,1,7,'2018-02-02 18:26:59',1,10000,10000,'',1,'',0,'',1,100,NULL),(7,3,7,'2018-02-02 18:26:59',1,13000,13000,'',1,'',0,'',1,10,NULL),(8,7,7,'2018-02-02 18:26:59',1,10000,10000,'',1,'',0,'',1,10,NULL),(9,8,7,'2018-02-02 18:26:59',1,10000,10000,'',1,'',0,'',1,10,NULL),(10,4,7,'2018-02-02 18:26:59',2,1000,2000,'',1,'',0,'',1,10,NULL),(11,1,8,'2018-02-02 18:27:57',1,10000,10000,'',1,'',0,'',1,100,NULL),(12,3,8,'2018-02-02 18:27:57',1,13000,13000,'',1,'',0,'',1,10,NULL),(13,7,8,'2018-02-02 18:27:57',1,10000,10000,'',1,'',0,'',1,10,NULL),(14,8,8,'2018-02-02 18:27:57',1,10000,10000,'',1,'',0,'',1,10,NULL),(15,4,8,'2018-02-02 18:27:57',2,1000,2000,'',1,'',0,'',1,10,NULL),(16,1,9,'2018-02-02 22:04:18',1,10000,10000,'',1,'',0,'',1,100,NULL),(17,3,9,'2018-02-02 22:04:18',1,13000,13000,'',1,'',0,'',1,10,NULL),(18,10,9,'2018-02-02 22:04:18',1,10000,10000,'',1,'',0,'',1,10,NULL),(19,7,9,'2018-02-02 22:04:18',1,10000,10000,'',1,'',0,'',1,10,NULL),(20,8,9,'2018-02-02 22:04:18',1,10000,10000,'',1,'',0,'',1,10,NULL),(21,1,10,'2018-02-02 22:05:04',1,10000,10000,'',1,'',0,'',1,100,NULL),(22,3,10,'2018-02-02 22:05:04',1,13000,13000,'',1,'',0,'',1,10,NULL),(23,10,10,'2018-02-02 22:05:04',1,10000,10000,'',1,'',0,'',1,10,NULL),(24,7,10,'2018-02-02 22:05:04',1,10000,10000,'',1,'',0,'',1,10,NULL),(25,8,10,'2018-02-02 22:05:04',1,10000,10000,'',1,'',0,'',1,10,NULL),(26,1,11,'2018-02-02 22:05:16',1,10000,10000,'',1,'',0,'',1,100,NULL),(27,3,11,'2018-02-02 22:05:16',1,13000,13000,'',1,'',0,'',1,10,NULL),(28,10,11,'2018-02-02 22:05:16',1,10000,10000,'',1,'',0,'',1,10,NULL),(29,7,11,'2018-02-02 22:05:16',1,10000,10000,'',1,'',0,'',1,10,NULL),(30,8,11,'2018-02-02 22:05:16',1,10000,10000,'',1,'',0,'',1,10,NULL),(31,7,12,'2018-02-02 22:07:07',1,10000,10000,'',1,'',0,'',1,10,NULL),(32,8,12,'2018-02-02 22:07:07',1,10000,10000,'',1,'',0,'',1,10,NULL),(33,9,12,'2018-02-02 22:07:07',1,10000,10000,'',1,'',0,'',1,10,NULL),(34,4,12,'2018-02-02 22:07:07',1,1000,1000,'',1,'',0,'',1,10,NULL),(35,3,12,'2018-02-02 22:07:07',1,13000,13000,'',1,'',0,'',1,10,NULL),(36,1,12,'2018-02-02 22:07:07',1,10000,10000,'',1,'',0,'',1,100,NULL),(37,3,13,'2018-02-02 22:09:08',1,13000,13000,'',1,'',0,'',1,10,NULL),(38,7,13,'2018-02-02 22:09:08',1,10000,10000,'',1,'',0,'',1,10,NULL),(39,6,13,'2018-02-02 22:09:08',1,10000,10000,'',1,'',0,'',1,10,NULL),(40,8,13,'2018-02-02 22:09:08',1,10000,10000,'',1,'',0,'',1,10,NULL),(41,12,13,'2018-02-02 22:09:08',1,10000,10000,'',1,'',0,'',1,10,NULL),(42,11,13,'2018-02-02 22:09:08',5,10000,50000,'',1,'',0,'',1,10,NULL),(43,3,14,'2018-02-04 22:06:56',1,13000,13000,'',1,'',0,'',1,10,NULL),(44,1,14,'2018-02-04 22:06:56',3,10000,30000,'',1,'',0,'',1,100,NULL),(45,3,15,'2018-02-04 22:08:29',1,13000,13000,'',1,'',0,'',1,10,NULL),(46,1,15,'2018-02-04 22:08:29',3,10000,30000,'',1,'',0,'',1,100,NULL),(47,3,16,'2018-02-04 22:10:09',1,13000,13000,'',1,'',0,'',1,10,NULL),(48,1,16,'2018-02-04 22:10:09',3,10000,30000,'',1,'',0,'',1,100,NULL),(49,1,17,'2018-02-04 22:31:27',3,10000,30000,'',1,'',0,'',1,100,NULL),(50,1,18,'2018-02-04 23:22:29',1,10000,10000,'',1,'',0,'',1,100,NULL),(51,3,18,'2018-02-04 23:22:29',1,13000,13000,'',1,'',0,'',1,10,NULL),(52,5,18,'2018-02-04 23:22:29',1,10000,10000,'',1,'',0,'',1,10,NULL),(53,1,19,'2018-02-04 23:23:43',1,10000,10000,'',1,'',0,'',1,100,NULL),(54,3,19,'2018-02-04 23:23:43',1,13000,13000,'',1,'',0,'',1,10,NULL),(55,4,19,'2018-02-04 23:23:43',1,1000,1000,'',1,'',0,'',1,10,NULL),(56,1,20,'2018-02-04 23:24:22',2,10000,20000,'',1,'',0,'',1,100,NULL),(57,3,20,'2018-02-04 23:24:22',2,13000,26000,'',1,'',0,'',1,10,NULL),(58,4,20,'2018-02-04 23:24:22',2,1000,2000,'',1,'',0,'',1,10,NULL),(59,5,20,'2018-02-04 23:24:22',1,10000,10000,'',1,'',0,'',1,10,NULL),(60,1,21,'2018-02-04 23:26:53',2,10000,20000,'',1,'',0,'',1,100,NULL),(61,3,21,'2018-02-04 23:26:53',2,13000,26000,'',1,'',0,'',1,10,NULL),(62,4,21,'2018-02-04 23:26:53',3,1000,3000,'',1,'',0,'',1,10,NULL),(63,5,21,'2018-02-04 23:26:53',1,10000,10000,'',1,'',0,'',1,10,NULL),(64,6,21,'2018-02-04 23:26:53',8,10000,80000,'',1,'',0,'',1,10,NULL),(65,1,22,'2018-02-04 23:27:08',2,10000,20000,'',1,'',0,'',1,100,NULL),(66,3,22,'2018-02-04 23:27:08',2,13000,26000,'',1,'',0,'',1,10,NULL),(67,4,22,'2018-02-04 23:27:08',3,1000,3000,'',1,'',0,'',1,10,NULL),(68,5,22,'2018-02-04 23:27:08',1,10000,10000,'',1,'',0,'',1,10,NULL),(69,6,22,'2018-02-04 23:27:08',11,10000,110000,'',1,'',0,'',1,10,NULL),(70,1,23,'2018-02-05 01:40:03',2,10000,20000,'',1,'',0,'',1,100,NULL),(71,3,23,'2018-02-05 01:40:03',1,13000,13000,'',1,'',0,'',1,10,NULL),(72,4,23,'2018-02-05 01:40:03',4,1000,4000,'',1,'',0,'',1,10,NULL),(73,11,23,'2018-02-05 01:40:03',2,10000,20000,'',1,'',0,'',1,10,NULL),(74,1,24,'2018-02-05 01:40:03',2,10000,20000,'',1,'',0,'',1,100,NULL),(75,3,24,'2018-02-05 01:40:03',1,13000,13000,'',1,'',0,'',1,10,NULL),(76,4,24,'2018-02-05 01:40:03',4,1000,4000,'',1,'',0,'',1,10,NULL),(77,11,24,'2018-02-05 01:40:03',2,10000,20000,'',1,'',0,'',1,10,NULL),(78,1,25,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,100,NULL),(79,3,25,'2018-02-05 01:40:04',1,13000,13000,'',1,'',0,'',1,10,NULL),(80,4,25,'2018-02-05 01:40:04',4,1000,4000,'',1,'',0,'',1,10,NULL),(81,11,25,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,10,NULL),(82,1,28,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,100,NULL),(83,3,28,'2018-02-05 01:40:04',1,13000,13000,'',1,'',0,'',1,10,NULL),(84,4,28,'2018-02-05 01:40:04',4,1000,4000,'',1,'',0,'',1,10,NULL),(85,11,28,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,10,NULL),(86,1,27,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,100,NULL),(87,3,27,'2018-02-05 01:40:04',1,13000,13000,'',1,'',0,'',1,10,NULL),(88,4,27,'2018-02-05 01:40:04',4,1000,4000,'',1,'',0,'',1,10,NULL),(89,11,27,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,10,NULL),(90,1,26,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,100,NULL),(91,3,26,'2018-02-05 01:40:04',1,13000,13000,'',1,'',0,'',1,10,NULL),(92,4,26,'2018-02-05 01:40:04',4,1000,4000,'',1,'',0,'',1,10,NULL),(93,11,26,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,10,NULL),(94,1,30,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,100,NULL),(95,3,30,'2018-02-05 01:40:04',1,13000,13000,'',1,'',0,'',1,10,NULL),(96,4,30,'2018-02-05 01:40:04',4,1000,4000,'',1,'',0,'',1,10,NULL),(97,11,30,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,10,NULL),(98,1,29,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,100,NULL),(99,3,29,'2018-02-05 01:40:04',1,13000,13000,'',1,'',0,'',1,10,NULL),(100,4,29,'2018-02-05 01:40:04',4,1000,4000,'',1,'',0,'',1,10,NULL),(101,11,29,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,10,NULL),(102,1,31,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,100,NULL),(103,3,31,'2018-02-05 01:40:05',1,13000,13000,'',1,'',0,'',1,10,NULL),(104,4,31,'2018-02-05 01:40:05',4,1000,4000,'',1,'',0,'',1,10,NULL),(105,11,31,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,10,NULL),(106,1,32,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,100,NULL),(107,3,32,'2018-02-05 01:40:05',1,13000,13000,'',1,'',0,'',1,10,NULL),(108,4,32,'2018-02-05 01:40:05',4,1000,4000,'',1,'',0,'',1,10,NULL),(109,11,32,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,10,NULL),(110,1,34,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,100,NULL),(111,3,34,'2018-02-05 01:40:05',1,13000,13000,'',1,'',0,'',1,10,NULL),(112,4,34,'2018-02-05 01:40:05',4,1000,4000,'',1,'',0,'',1,10,NULL),(113,11,34,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,10,NULL),(114,1,33,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,100,NULL),(115,3,33,'2018-02-05 01:40:05',1,13000,13000,'',1,'',0,'',1,10,NULL),(116,4,33,'2018-02-05 01:40:05',4,1000,4000,'',1,'',0,'',1,10,NULL),(117,11,33,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,10,NULL),(118,1,35,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,100,NULL),(119,3,35,'2018-02-05 01:40:05',1,13000,13000,'',1,'',0,'',1,10,NULL),(120,4,35,'2018-02-05 01:40:05',4,1000,4000,'',1,'',0,'',1,10,NULL),(121,11,35,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,10,NULL),(122,1,36,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,100,NULL),(123,3,36,'2018-02-05 01:40:05',1,13000,13000,'',1,'',0,'',1,10,NULL),(124,4,36,'2018-02-05 01:40:05',4,1000,4000,'',1,'',0,'',1,10,NULL),(125,11,36,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,10,NULL),(126,1,37,'2018-02-05 01:40:06',2,10000,20000,'',1,'',0,'',1,100,NULL),(127,3,37,'2018-02-05 01:40:06',1,13000,13000,'',1,'',0,'',1,10,NULL),(128,4,37,'2018-02-05 01:40:06',4,1000,4000,'',1,'',0,'',1,10,NULL),(129,11,37,'2018-02-05 01:40:06',2,10000,20000,'',1,'',0,'',1,10,NULL),(130,1,38,'2018-02-05 01:55:15',1,10000,10000,'',1,'',0,'',1,100,NULL),(131,6,38,'2018-02-05 01:55:15',1,10000,10000,'',1,'',0,'',1,10,NULL),(132,1,39,'2018-02-05 01:57:22',1,10000,10000,'',1,'',0,'',1,100,NULL),(133,6,39,'2018-02-05 01:57:22',1,10000,10000,'',1,'',0,'',1,10,NULL),(134,1,40,'2018-02-05 02:05:55',2,10000,20000,'',1,'',0,'',1,100,NULL),(135,6,40,'2018-02-05 02:05:55',1,10000,10000,'',1,'',0,'',1,10,NULL),(136,4,40,'2018-02-05 02:05:55',2,1000,2000,'',1,'',0,'',1,10,NULL),(137,4,41,'2018-02-05 02:06:35',12,1000,12000,'',1,'',0,'',1,10,NULL),(138,1,42,'2018-02-05 02:07:58',1,10000,10000,'',1,'',0,'',1,100,NULL),(139,6,42,'2018-02-05 02:07:58',1,10000,10000,'',1,'',0,'',1,10,NULL),(140,6,43,'2018-02-05 02:10:03',3,10000,30000,'',1,'',0,'',1,10,NULL),(141,6,44,'2018-02-05 02:10:25',5,10000,50000,'',1,'',0,'',1,10,NULL),(142,6,45,'2018-02-05 11:09:07',2,10000,20000,'',1,'',0,'',1,10,NULL),(143,7,45,'2018-02-05 11:09:07',1,10000,10000,'',1,'',0,'',1,10,NULL),(144,1,45,'2018-02-05 11:09:07',3,10000,30000,'',1,'',0,'',1,100,NULL),(145,1,46,'2018-02-06 10:48:47',1,NULL,10000,'',1,'',0,'',NULL,NULL,NULL),(146,3,46,'2018-02-06 10:48:47',2,NULL,26000,'',1,'',0,'',NULL,NULL,NULL),(147,4,46,'2018-02-06 10:48:47',1,NULL,1000,'',1,'',0,'',NULL,NULL,NULL),(148,5,46,'2018-02-06 10:48:47',1,NULL,10000,'',1,'',0,'',NULL,NULL,NULL),(149,6,46,'2018-02-06 10:48:47',1,NULL,10000,'',1,'',0,'',NULL,NULL,NULL),(150,1,47,'2018-02-06 11:33:34',2,NULL,20000,'',1,'',0,'',NULL,NULL,NULL),(151,3,47,'2018-02-06 11:33:34',1,NULL,13000,'',1,'',0,'',NULL,NULL,NULL),(152,3,48,'2018-02-06 14:16:42',17,NULL,221000,'',1,'',0,'',NULL,NULL,NULL),(153,1,48,'2018-02-06 14:16:42',2,NULL,20000,'',1,'',0,'',NULL,NULL,NULL),(154,7,48,'2018-02-06 14:16:42',1,NULL,10000,'',1,'',0,'',NULL,NULL,NULL),(155,6,48,'2018-02-06 14:16:42',4,NULL,40000,'',1,'',0,'',NULL,NULL,NULL),(156,4,48,'2018-02-06 14:16:42',6,NULL,6000,'',1,'',0,'',NULL,NULL,NULL),(157,5,48,'2018-02-06 14:16:42',1,NULL,10000,'',1,'',0,'',NULL,NULL,NULL),(158,11,48,'2018-02-06 14:16:42',2,NULL,20000,'',1,'',0,'',NULL,NULL,NULL),(159,3,49,'2018-02-06 14:16:44',17,NULL,221000,'',1,'',0,'',NULL,NULL,NULL),(160,1,49,'2018-02-06 14:16:44',2,NULL,20000,'',1,'',0,'',NULL,NULL,NULL),(161,7,49,'2018-02-06 14:16:44',1,NULL,10000,'',1,'',0,'',NULL,NULL,NULL),(162,6,49,'2018-02-06 14:16:44',4,NULL,40000,'',1,'',0,'',NULL,NULL,NULL),(163,4,49,'2018-02-06 14:16:44',6,NULL,6000,'',1,'',0,'',NULL,NULL,NULL),(164,5,49,'2018-02-06 14:16:44',1,NULL,10000,'',1,'',0,'',NULL,NULL,NULL),(165,11,49,'2018-02-06 14:16:44',2,NULL,20000,'',1,'',0,'',NULL,NULL,NULL),(166,1,50,'2018-02-06 14:34:32',4,NULL,40000,'',1,'',0,'',NULL,NULL,NULL),(167,3,50,'2018-02-06 14:34:32',5,NULL,65000,'',1,'',0,'',NULL,NULL,NULL),(168,14,50,'2018-02-06 14:34:32',1,NULL,10000,'',1,'',0,'',NULL,NULL,NULL),(169,1,51,'2018-02-07 10:31:05',4,NULL,40000,'',1,'',0,'',NULL,NULL,NULL),(170,3,52,'2018-02-07 13:56:23',1,NULL,13000,'',1,'',0,'',NULL,NULL,NULL),(171,1,52,'2018-02-07 13:56:23',3,NULL,30000,'',1,'',0,'',NULL,NULL,NULL),(172,1,53,'2018-02-07 14:07:00',4,NULL,40000,'',1,'',0,'',NULL,NULL,NULL),(173,1,54,'2018-02-07 16:04:06',3,NULL,30000,'',1,'',0,'',NULL,NULL,NULL),(174,3,54,'2018-02-07 16:04:06',4,NULL,52000,'',1,'',0,'',NULL,NULL,NULL),(175,4,54,'2018-02-07 16:04:06',1,NULL,1000,'',1,'',0,'',NULL,NULL,NULL),(176,5,54,'2018-02-07 16:04:06',1,NULL,10000,'',1,'',0,'',NULL,NULL,NULL),(177,1,55,'2018-02-07 17:19:48',17,NULL,170000,'',1,'',0,'',NULL,NULL,NULL),(178,4,55,'2018-02-07 17:19:48',6,NULL,6000,'',1,'',0,'',NULL,NULL,NULL),(179,5,55,'2018-02-07 17:19:48',1,NULL,10000,'',1,'',0,'',NULL,NULL,NULL),(180,3,55,'2018-02-07 17:19:48',1,NULL,13000,'',1,'',0,'',NULL,NULL,NULL),(181,1,56,'2018-02-07 21:31:58',1,NULL,10000,'sdgergergergerg',1,'',0,'',NULL,NULL,NULL),(182,3,56,'2018-02-07 21:31:58',1,NULL,13000,'',1,'',0,'',NULL,NULL,NULL),(183,4,56,'2018-02-07 21:31:58',1,NULL,1000,'',1,'',0,'',NULL,NULL,NULL),(184,5,57,'2018-02-07 21:43:14',2,NULL,20000,'',1,'',0,'',NULL,NULL,NULL),(185,9,57,'2018-02-07 21:43:14',1,NULL,10000,'',1,'',0,'',NULL,NULL,NULL),(186,1,58,'2018-02-09 10:32:05',1,NULL,10000,'',1,'',0,'',NULL,NULL,0),(187,3,58,'2018-02-09 10:32:05',1,NULL,13000,'',1,'',0,'',NULL,NULL,0),(188,1,58,'2018-02-09 14:05:29',3,NULL,30000,'',1,'',0,'',NULL,NULL,1),(189,3,58,'2018-02-09 14:05:29',2,NULL,26000,'',1,'',0,'',NULL,NULL,1),(190,1,58,'2018-02-09 14:06:08',3,NULL,30000,'',1,'',0,'',NULL,NULL,1),(191,3,58,'2018-02-09 14:06:08',2,NULL,26000,'',1,'',0,'',NULL,NULL,1),(192,1,58,'2018-02-09 14:06:47',3,NULL,30000,'',1,'',0,'',NULL,NULL,2),(193,3,58,'2018-02-09 16:16:34',1,NULL,13000,'',1,'',0,'',NULL,NULL,3),(194,7,59,'2018-02-12 10:27:42',1,10000,9900,'Ga suka yang manis',0,'',0,'',1,100,0),(195,7,59,'2018-02-12 10:27:42',1,10000,9990,'',0,'',0,'',1,10,0),(196,3,60,'2018-02-12 10:27:46',4,13000,50440,'Ga pedes',0,'',0,'',12,1560,0),(197,1,60,'2018-02-12 10:27:46',2,10000,19900,'',0,'',0,'',1,100,0),(198,5,61,'2018-02-12 10:35:03',4,10000,39990,'',0,'',0,'',1,10,0),(199,4,61,'2018-02-12 10:35:03',1,1000,990,'',0,'',0,'',1,10,0),(200,1,61,'2018-02-12 10:35:03',1,10000,9900,'',0,'',0,'',1,100,0),(201,3,61,'2018-02-12 10:35:03',1,13000,12990,'',0,'',0,'',1,10,0),(202,3,62,'2018-02-12 10:37:39',2,13000,25990,'',0,'',0,'',1,10,0),(203,4,62,'2018-02-12 10:37:39',2,1000,1990,'',0,'',0,'',1,10,0),(204,7,62,'2018-02-12 10:37:39',4,10000,39990,'',0,'',0,'',1,10,0),(205,8,62,'2018-02-12 10:37:39',1,10000,9990,'',0,'',0,'',1,10,0),(206,5,63,'2018-02-12 10:40:15',1,10000,9990,'',0,'',0,'',1,10,0),(207,9,63,'2018-02-12 10:40:15',1,10000,9990,'',0,'',0,'',1,10,0),(208,7,63,'2018-02-12 10:40:15',2,10000,19990,'',0,'',0,'',1,10,0),(209,8,63,'2018-02-12 10:40:15',3,10000,0,'',1,'Jatah preman',0,'',1,10,0),(210,9,64,'2018-02-12 11:31:18',1,10000,9990,'',0,'',0,'',1,10,0),(211,8,64,'2018-02-12 11:31:18',5,10000,49990,'',0,'',0,'',1,10,0),(212,4,64,'2018-02-12 11:31:18',1,1000,990,'',0,'',0,'',1,10,0),(213,3,64,'2018-02-12 11:31:18',1,13000,12990,'',0,'',0,'',1,10,0),(214,1,65,'2018-02-12 14:31:09',4,10000,39900,'',0,'',0,'',1,100,0),(215,6,65,'2018-02-12 14:31:09',1,10000,9990,'',0,'',0,'',1,10,0),(216,3,65,'2018-02-12 14:31:09',1,13000,12990,'',0,'',0,'',1,10,0),(217,1,66,'2018-02-12 15:27:39',4,10000,37000,'',0,'',0,'',30,3000,0),(218,1,67,'2018-02-12 17:22:07',0,10000,0,'',1,'fbndfndfn',0,'',10,1000,0),(219,1,67,'2018-02-12 17:22:07',5,10000,29000,'',1,'fbndfndfn',0,'',10,1000,0),(220,3,67,'2018-02-12 17:22:07',2,13000,25990,'',0,'',0,'',1,10,0),(221,1,68,'2018-02-12 17:23:59',5,10000,29000,'',1,'fbndfndfn',0,'',10,1000,0),(222,3,68,'2018-02-12 17:23:59',2,13000,25990,'',0,'',0,'',1,10,0),(223,1,69,'2018-02-12 17:25:05',2,10000,0,'',1,'fbndfndfn',0,'',10,1000,0),(224,1,69,'2018-02-12 17:25:05',3,10000,29000,'',1,'fbndfndfn',0,'',10,1000,0),(225,3,69,'2018-02-12 17:25:05',2,13000,25990,'',0,'',0,'',1,10,0),(226,1,70,'2018-02-12 17:26:42',2,10000,0,'',1,'fbndfndfn',0,'',10,1000,0),(227,1,70,'2018-02-12 17:26:42',3,10000,29000,'',0,'',0,'',10,1000,0),(228,3,70,'2018-02-12 17:26:42',2,13000,25990,'',0,'',0,'',1,10,0),(229,1,71,'2018-02-12 17:27:54',2,10000,0,'',1,'lalayeye',0,'',1,100,0),(230,1,71,'2018-02-12 17:27:54',2,10000,19900,'',0,'',0,'',1,100,0),(231,3,71,'2018-02-12 17:27:54',1,13000,12990,'',0,'',0,'',1,10,0),(232,1,72,'2018-02-13 13:19:25',3,10000,29900,'',0,'',0,'',1,100,0),(233,3,72,'2018-02-13 13:19:25',4,13000,51990,'',0,'',0,'',1,10,0),(234,3,73,'2018-02-14 12:29:06',2,13000,25990,'',0,'',0,'',1,10,0),(235,4,73,'2018-02-14 12:29:06',5,1000,4990,'',0,'',0,'',1,10,0),(236,1,73,'2018-02-14 12:29:06',1,10000,9900,'',0,'',0,'',1,100,0),(237,5,73,'2018-02-14 12:29:06',2,10000,19990,'',0,'',0,'',1,10,0),(238,6,73,'2018-02-14 12:29:06',2,10000,19990,'',0,'',0,'',1,10,0),(239,12,73,'2018-02-14 12:29:06',1,10000,9990,'',0,'',0,'',1,10,1),(240,11,73,'2018-02-14 12:29:06',1,10000,9990,'',0,'',0,'',1,10,1),(241,22,73,'2018-02-14 12:29:06',19,10000,189999,'',0,'',0,'',1,1,1),(242,4,74,'2018-02-14 12:31:57',3,1000,2990,'',0,'',0,'',1,10,0),(243,3,74,'2018-02-14 12:31:57',2,13000,25990,'',0,'',0,'',1,10,0),(244,1,74,'2018-02-14 12:31:57',1,10000,9900,'',0,'',0,'',1,100,0),(245,1,75,'2018-02-14 15:08:24',1,10000,9900,'',0,'',0,'',1,100,0),(246,3,75,'2018-02-14 15:08:24',2,13000,25990,'',0,'',0,'',1,10,0),(247,13,75,'2018-02-14 15:08:24',1,10000,9990,'',0,'',0,'',1,10,0),(248,7,76,'2018-02-14 21:35:58',5,10000,0,'',1,'Salahku opo',0,'',13,1300,0),(249,7,76,'2018-02-14 21:35:58',2,10000,17400,'',0,'',0,'',13,2600,0),(250,8,76,'2018-02-14 21:35:58',3,10000,29700,'',0,'',0,'',1,300,0),(251,1,77,'2018-02-15 16:08:58',3,10000,29700,'',0,'',0,'',1,300,0),(252,3,77,'2018-02-15 16:08:58',2,13000,25740,'',0,'',0,'',1,260,0),(253,7,77,'2018-02-15 16:08:58',2,10000,19800,'',0,'',0,'',1,200,0),(254,6,77,'2018-02-15 16:08:58',2,10000,19800,'',0,'',0,'',1,200,0),(255,6,78,'2018-02-15 17:15:14',2,10000,19800,'',0,'',0,'',1,200,0),(256,7,78,'2018-02-15 17:15:14',2,10000,19800,'',0,'',0,'',1,200,0),(257,3,78,'2018-02-15 17:15:14',1,13000,12870,'',0,'',0,'',1,130,0),(258,8,79,'2018-02-15 17:19:53',5,10000,49500,'',0,'',0,'',1,500,0),(259,7,79,'2018-02-15 17:19:53',3,10000,29700,'',0,'',0,'',1,300,0),(260,8,0,'2018-02-15 17:27:24',2,10000,19800,'',0,'',0,'',1,200,1),(261,1,80,'2018-02-19 10:24:24',4,10000,0,'Keterangan',1,'Dipalak',0,'',10,2000,0),(262,3,80,'2018-02-19 10:24:24',5,13000,64350,'',0,'',0,'',1,650,0),(263,1,81,'2018-02-19 11:07:54',1,10000,10000,'Tidak pedas',0,'',0,'',0,0,0),(264,3,81,'2018-02-19 11:07:54',1,13000,11700,'',0,'',0,'',10,1300,0),(265,6,81,'2018-02-19 11:07:54',1,10000,10000,'',0,'',0,'',0,0,0),(266,11,81,'2018-02-19 11:07:54',1,10000,10000,'',0,'',0,'',0,0,0),(267,1,82,'2018-02-19 11:08:08',1,10000,9900,'',0,'',0,'',1,100,0),(268,3,82,'2018-02-19 11:08:08',1,13000,12870,'',0,'',0,'',1,130,0),(269,7,82,'2018-02-19 11:08:08',1,10000,9900,'',0,'',0,'',1,100,0),(270,8,82,'2018-02-19 11:08:08',1,10000,9900,'',0,'',0,'',1,100,0),(271,13,0,'2018-02-19 14:48:18',2,10000,0,'',1,'yes',0,'',10,1000,1),(272,1,83,'2018-02-19 14:50:36',1,10000,0,'',1,'',0,'',1,100,0),(273,3,83,'2018-02-19 14:50:36',1,13000,12870,'',0,'',0,'',1,130,0),(274,1,84,'2018-02-19 15:32:27',1,10000,9900,'',0,'',0,'',1,100,0),(275,3,84,'2018-02-19 15:32:27',1,13000,12870,'',0,'',0,'',1,130,0),(276,11,84,'2018-02-19 15:32:27',1,10000,9900,'',0,'',0,'',1,100,0),(277,14,84,'2018-02-19 15:32:27',1,10000,9900,'',0,'',0,'',1,100,0),(278,7,85,'2018-02-22 18:57:43',3,10000,29700,'',0,'',0,'',1,300,0),(279,3,86,'2018-02-22 19:18:48',3,13000,38610,'',0,'',0,'',1,390,0),(280,1,86,'2018-02-22 19:18:48',1,10000,9900,'',0,'',0,'',1,100,0),(281,1,87,'2018-02-23 10:21:16',2,10000,19800,'',0,'',0,'',1,200,0),(282,3,87,'2018-02-23 10:21:16',3,13000,38610,'',0,'',0,'',1,390,0),(283,1,88,'2018-02-23 10:27:44',4,10000,39600,'',0,'',0,'',1,400,0),(284,3,88,'2018-02-23 10:27:44',3,13000,38610,'',0,'',0,'',1,390,0),(285,7,88,'2018-02-23 10:27:44',1,10000,9900,'',0,'',0,'',1,100,0),(286,3,89,'2018-03-07 15:35:11',1,13000,12870,'',0,'',0,'',1,130,0),(287,1,89,'2018-03-07 15:35:11',3,10000,29700,'',0,'',0,'',1,300,0),(288,5,89,'2018-03-07 15:35:11',1,10000,9900,'',0,'',0,'',1,100,0),(289,4,89,'2018-03-07 15:35:11',1,1000,990,'',0,'',0,'',1,10,0),(290,7,89,'2018-03-07 15:35:11',1,10000,9900,'',0,'',0,'',1,100,0),(291,3,90,'2018-03-07 15:48:19',1,13000,12870,'',0,'',0,'',1,130,0),(292,1,90,'2018-03-07 15:48:19',1,10000,9900,'',0,'',0,'',1,100,0),(293,4,90,'2018-03-07 15:48:19',2,1000,1980,'',0,'',0,'',1,20,0),(294,5,90,'2018-03-07 15:48:19',1,10000,9900,'',0,'',0,'',1,100,0),(295,3,91,'2018-03-07 15:55:16',2,13000,25740,'',0,'',0,'',1,260,0),(296,1,91,'2018-03-07 15:55:16',2,10000,19800,'',0,'',0,'',1,200,0),(297,3,92,'2018-03-07 15:57:47',2,13000,25740,'',0,'',0,'',1,260,0),(298,1,92,'2018-03-07 15:57:47',2,10000,19800,'',0,'',0,'',1,200,0),(299,3,93,'2018-03-07 15:58:21',2,13000,25740,'',0,'',0,'',1,260,0),(300,1,93,'2018-03-07 15:58:21',2,10000,19800,'',0,'',0,'',1,200,0),(301,5,94,'2018-03-07 16:04:05',2,10000,19800,'',0,'',0,'',1,200,0),(302,3,94,'2018-03-07 16:04:05',2,13000,25740,'',0,'',0,'',1,260,0),(303,1,94,'2018-03-07 16:04:05',1,10000,9900,'',0,'',0,'',1,100,0),(304,4,94,'2018-03-07 16:04:05',1,1000,990,'',0,'',0,'',1,10,0),(305,7,94,'2018-03-07 16:04:05',2,10000,19800,'',0,'',0,'',1,200,0),(306,3,95,'2018-03-07 16:14:47',2,13000,25740,'',0,'',0,'',1,260,0),(307,1,95,'2018-03-07 16:14:47',1,10000,9900,'',0,'',0,'',1,100,0),(308,1,96,'2018-03-07 16:22:41',4,10000,39600,'',0,'',0,'',1,400,0),(309,1,97,'2018-03-07 16:26:22',1,10000,9900,'',0,'',0,'',1,100,0),(310,3,97,'2018-03-07 16:26:22',1,13000,12870,'',0,'',0,'',1,130,0),(311,4,97,'2018-03-07 16:26:22',2,1000,1980,'',0,'',0,'',1,20,0),(312,1,98,'2018-03-07 16:41:15',5,10000,49500,'',0,'',0,'',1,500,0),(313,1,99,'2018-03-07 16:56:50',3,10000,29700,'',0,'',0,'',1,300,0),(314,3,99,'2018-03-07 16:56:50',3,13000,38610,'',0,'',0,'',1,390,0),(315,4,99,'2018-03-07 16:56:50',1,1000,990,'',0,'',0,'',1,10,0),(316,5,99,'2018-03-07 16:56:50',1,10000,9900,'',0,'',0,'',1,100,0),(317,3,100,'2018-03-07 16:59:48',5,13000,64350,'',0,'',0,'',1,650,0),(318,1,101,'2018-03-07 17:26:14',1,10000,9900,'',0,'',0,'',1,100,0),(319,3,101,'2018-03-07 17:26:14',1,13000,12870,'',0,'',0,'',1,130,0),(320,6,101,'2018-03-07 17:26:14',1,10000,9900,'',0,'',0,'',1,100,0),(321,5,101,'2018-03-07 17:26:14',1,10000,9900,'',0,'',0,'',1,100,0),(322,10,101,'2018-03-07 17:26:14',1,10000,9900,'',0,'',0,'',1,100,0),(323,1,102,'2018-03-07 17:34:44',2,10000,19800,'',0,'',0,'',1,200,0),(324,3,102,'2018-03-07 17:34:44',2,13000,25740,'',0,'',0,'',1,260,0),(325,3,103,'2018-03-07 17:40:29',1,13000,12870,'',0,'',0,'',1,130,0),(326,4,103,'2018-03-07 17:40:29',1,1000,990,'',0,'',0,'',1,10,0),(327,7,103,'2018-03-07 17:40:29',3,10000,29700,'',0,'',0,'',1,300,0),(328,7,104,'2018-03-07 19:26:14',1,10000,9900,'',0,'',0,'',1,100,0),(329,6,104,'2018-03-07 19:26:14',1,10000,9900,'',0,'',0,'',1,100,0),(330,29,105,'2018-03-08 09:12:27',3,30000,90000,'',0,'',0,'',0,0,0),(331,29,106,'2018-03-08 09:21:03',2,30000,60000,'',0,'',0,'',0,0,0),(332,29,107,'2018-03-08 09:30:04',3,30000,90000,'',0,'',0,'',0,0,0),(333,29,108,'2018-03-08 09:31:34',3,30000,90000,'',0,'',0,'',0,0,0),(334,29,109,'2018-03-08 09:32:04',3,30000,90000,'',0,'',0,'',0,0,0),(335,29,110,'2018-03-08 09:32:16',3,30000,90000,'',0,'',0,'',0,0,0),(336,29,111,'2018-03-08 09:34:27',3,30000,90000,'',0,'',0,'',0,0,0),(337,29,114,'2018-03-08 09:38:53',3,30000,90000,'',0,'',0,'',0,0,0),(338,29,115,'2018-03-08 09:39:34',3,30000,90000,'',0,'',0,'',0,0,0),(339,29,116,'2018-03-08 10:50:32',2,30000,60000,'',0,'',0,'',0,0,0),(340,29,117,'2018-03-08 10:53:02',2,30000,60000,'',0,'',0,'',0,0,0),(341,29,118,'2018-03-08 10:53:56',2,30000,60000,'',0,'',0,'',0,0,0),(342,29,119,'2018-03-08 10:58:42',2,30000,60000,'',0,'',0,'',0,0,0),(343,29,120,'2018-03-08 11:03:19',1,30000,30000,'',0,'',0,'',0,0,0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
