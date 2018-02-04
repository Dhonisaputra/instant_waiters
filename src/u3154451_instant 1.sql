/*
SQLyog Professional v12.4.1 (64 bit)
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

insert  into `apps`(`apps_id`,`apps_name`,`apps_address`,`apps_phone`,`apps_logo`,`apps_mail`,`apps_meta_keyword`,`apps_meta_desc`,`apps_site`,`apps_fav`,`apps_bg`) values 
(1,'Folarpos Instant','Jl. Kapten Haryadi No 117, Sleman, Yogyakarta','0274883681','system/logo.png','instant@folarpos.co.id','Cashier Instant, Cashier Modern, Cashier Jogja, Instant, Software Jogja','Folarpos Instant merupakan layanan Point of Sale untuk kebutuhan UKM pemula atau sudah berkembang. Didukung dengan fitur-fitur unggulan menjadikan Folarpos Instant menjadi mitra bisnis anda yang tepat','www.folarpos.co.id','system/favicon.png','system/bg.png');

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

insert  into `apps_outlet_roles`(`outlet_roles_id`,`apps_id`,`outlet_roles_name`,`outlet_roles_direct`,`outlet_roles_header`,`outlet_roles_nav`,`outlet_roles_status`) values 
(1,1,'Owner','dashboard-outlet','header_outlet','nav_outlet',1),
(2,1,'Cashier','pos','header_cashier',NULL,2);

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `apps_roles` */

insert  into `apps_roles`(`roles_id`,`apps_id`,`roles_name`,`roles_header`,`roles_nav`,`roles_direct`,`roles_status`) values 
(1,1,'Admin','header_admin','nav_admin','admin/dashboard',1),
(2,1,'Finance','header_finance','nav_finance','fin/dashboard',1),
(3,1,'Marketing','header_marketing','nav_marketing','mark/dashboard',2),
(4,1,'Owner','header_owner',NULL,'owner/dashboard',1),
(5,1,'Customers','header_customers','nav_customers','cust/customers',1);

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*Data for the table `apps_services` */

insert  into `apps_services`(`serv_id`,`apps_id`,`serv_name`,`serv_price`,`serv_image`,`serv_status`) values 
(1,1,'Resto - Cashier Pro',250000,NULL,0),
(2,1,'Resto - Cashier Premium',450000,NULL,0),
(3,1,'Clinic - Cashier Pro',350000,NULL,0),
(4,1,'Clinic - Cashier Premium',550000,'assets/services-pict/folar-maint-5a68a7dd2aaad.jpg',0),
(8,1,'Services 1s',4500000,'assets/services-pict/folar-maint-5a68a2b49364a.jpg',2),
(10,1,'R',3454656,'assets/services-pict/folar-serv-5a728b62320df.jpg',2),
(11,1,'R76879',2000000,'assets/services-pict/folar-serv-5a728b981890f.jpg',2);

/*Table structure for table `log_login` */

DROP TABLE IF EXISTS `log_login`;

CREATE TABLE `log_login` (
  `log_fail_id` int(11) NOT NULL AUTO_INCREMENT,
  `log_fail_date` datetime NOT NULL,
  `log_fail_email` varchar(100) NOT NULL,
  `log_fail_ip` varchar(50) NOT NULL,
  `log_fail_device` varchar(20) NOT NULL,
  PRIMARY KEY (`log_fail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `log_login` */

insert  into `log_login`(`log_fail_id`,`log_fail_date`,`log_fail_email`,`log_fail_ip`,`log_fail_device`) values 
(1,'2018-01-31 15:00:34','folarium@gmail.com','192.168.1.13','desktop'),
(2,'2018-01-31 15:00:41','folarium@gmail.com','192.168.1.13','desktop'),
(3,'2018-02-01 10:45:46','anarifa48@gmail.com','192.168.1.9','desktop'),
(4,'2018-02-01 10:46:03','anarifa48@gmail.com','192.168.1.9','desktop'),
(5,'2018-02-01 10:46:49','anarifa48@gmail.com','192.168.1.9','desktop');

/*Table structure for table `log_outlet_stock` */

DROP TABLE IF EXISTS `log_outlet_stock`;

CREATE TABLE `log_outlet_stock` (
  `stock_id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_id` int(11) NOT NULL,
  `stock_date` datetime DEFAULT NULL,
  `stock_in` double DEFAULT NULL,
  `stock_out` double DEFAULT NULL,
  `stock_rest` double DEFAULT NULL,
  `stock_note` varchar(100) DEFAULT NULL,
  `stock_ref_modul` varchar(10) DEFAULT NULL,
  `stock_ref_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`stock_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `log_outlet_stock` */

insert  into `log_outlet_stock`(`stock_id`,`prod_id`,`stock_date`,`stock_in`,`stock_out`,`stock_rest`,`stock_note`,`stock_ref_modul`,`stock_ref_id`) values 
(1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(2,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `md_bank` */

DROP TABLE IF EXISTS `md_bank`;

CREATE TABLE `md_bank` (
  `bank_id` int(11) NOT NULL AUTO_INCREMENT,
  `bank_code` varchar(5) DEFAULT NULL,
  `bank_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`bank_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `md_bank` */

insert  into `md_bank`(`bank_id`,`bank_code`,`bank_name`) values 
(3,'sdfsa','Dsfdfd'),
(4,'34543','erfgfhgfh');

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `md_discount` */

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `md_outlet` */

insert  into `md_outlet`(`outlet_id`,`serv_id`,`outlet_name`,`outlet_address`,`outlet_phone`,`outlet_mail`,`outlet_site`,`outlet_logo`,`outlet_status`,`outlet_printer_cashier_name`,`outlet_printer_cashier_port`,`outlet_printer_bars_name`,`outlet_printer_bars_port`,`outlet_printer_kitchen_name`,`outlet_printer_kitchen_port`) values 
(1,1,'Outlet Biru','Jl. Mantingan Pandean, Km.01, Dsn. Ngelo, Ds.jatimulyo, Kec. Mantingan',4294967295,'dhoni.p.saputra@gmail.com','email.com','assets/outlet-pict/outlet-5a712cf8d6c37.jpg',2,NULL,NULL,NULL,NULL,NULL,NULL),
(2,1,'Gdfgf','Awdsfdf',3453544,'ana@ldmfd','dsfdf.com','assets/outlet-pict/outlet-5a72910fd9f95.jpg',1,'dswdsf','1','erer','2','erer','1'),
(3,2,'Grt','Yfhgfhgj',567678,'asdf@fg','fgh.com','assets/outlet-pict/outlet-5a72913a208ff.jpg',1,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `md_outlet_payment_method` */

DROP TABLE IF EXISTS `md_outlet_payment_method`;

CREATE TABLE `md_outlet_payment_method` (
  `outlet_payment_method_id` int(11) NOT NULL AUTO_INCREMENT,
  `outlet_id` int(11) NOT NULL,
  `method_id` int(3) NOT NULL,
  PRIMARY KEY (`outlet_payment_method_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `md_outlet_payment_method` */

insert  into `md_outlet_payment_method`(`outlet_payment_method_id`,`outlet_id`,`method_id`) values 
(1,1,1),
(3,1,4),
(4,1,5);

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

insert  into `md_payment_method`(`method_id`,`method_name`,`method_type`,`method_status`) values 
(1,'Bitcoin',2,2),
(2,'Credit Card',2,2),
(3,'Paypal',2,1),
(4,'Debit card',1,2),
(5,'Cash',1,2);

/*Table structure for table `md_prod_type` */

DROP TABLE IF EXISTS `md_prod_type`;

CREATE TABLE `md_prod_type` (
  `type_id` int(3) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `md_prod_type` */

insert  into `md_prod_type`(`type_id`,`type_name`) values 
(1,'Makanan'),
(2,'Minuman');

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
  PRIMARY KEY (`prod_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

/*Data for the table `md_products` */

insert  into `md_products`(`prod_id`,`outlet_id`,`type_id`,`prod_name`,`prod_price`,`prod_unit`,`prod_stock`,`prod_image`,`prod_charge_percent`,`prod_charge_nominal`,`prod_status`,`prod_disc_percent`,`prod_disc_nominal`) values 
(1,1,1,'Mie Ayam Telor',10000,'Mangkok',946,'assets/product-pict/1/bad4370a405e34344b9232d48a7dfa55.jpg',1,500,1,1,100),
(3,1,1,'Nasi goreng Spesial',13000,'Mangkok',976,'assets/product-pict/3/99bd3ff1a1f3092f1fe1632445c38d17.jpg',1,500,1,1,10),
(4,1,1,'Molen Bakar',1000,'Gelintir',917,'assets/product-pict/4/9f07b70aacc4d9e3a042e4abe913ed83.jpg',1,0,1,1,10),
(5,1,1,'Garang Asem',10000,'Mangkok',996,'assets/product-pict/5/41fcc1032b1fb7930dc9b718e20fd756.jpg',1,500,1,1,10),
(6,1,1,'Penyetan Jamur',10000,'Mangkok',969,'assets/product-pict/6/c561230aaa776d418a5cefd995a31941.jpg',1,500,1,1,10),
(7,1,1,'Salad with peanut topping',10000,'Mangkok',1000,'assets/product-pict/7/605dc6d492060378a4d58ce0dfe78221.jpg',1,500,1,1,10),
(8,1,1,'Tempeh roaster',10000,'Mangkok',1000,'assets/product-pict/8/136cdc5c72f27bec0cc000d3deb0e9b1.jpg',1,500,1,1,10),
(9,1,1,'Touge with sauce barbeque',10000,'Mangkok',1000,'assets/product-pict/9/a561f97b11a75845ebff4c7802ea0414.jpg',1,500,1,1,10),
(10,1,1,'Tempeh steak with barbeque sauce',10000,'Mangkok',1000,'assets/product-pict/10/a921f71bbfd74ee14b9d869dd89f79ba.jpg',1,500,1,1,10),
(11,1,2,'Marimas with orange squash',10000,'Mangkok',970,'assets/product-pict/11/a14af5b9f1d99bb03186112b6c8c2d83.jpg',1,500,1,1,10),
(12,1,2,'Nasgitel',10000,'Liter',1000,'assets/product-pict/12/9aad22b6ca024cb0b237de0a1eb2b3c6.jpg',1,500,1,1,10),
(13,1,2,'Banana Squash',10000,'Liter',1000,'assets/product-pict/13/c70bb0a3877357179c2c74af50760a9b.jpg',1,500,1,1,10),
(14,1,1,'Oyster Sauce',10000,'Buah',10,'assets/product-pict/14/abba64a47a3fabc95ad83aa7e3a362f4.jpg',1,1,1,1,1),
(15,1,1,'Garlic Sauce',10000,'piring',100,'assets/product-pict/15/a611fecfc488c2ca995c6543e90dba01.jpg',1,1,1,1,1),
(16,1,1,'Sweet and Sour Sauce',10000,'piring',100,'assets/product-pict/16/b228f2ee92af30a8ca88dc8d1fbe8971.jpg',1,1,1,1,1),
(17,1,1,'Chilli Sauce',10000,'piring',100,NULL,1,1,1,1,1),
(18,1,1,'Peking Sauce',10000,'piring',100,NULL,1,1,1,1,1),
(19,1,1,'Mini Prawn Omelletes',10000,'piring',100,NULL,1,1,1,1,1),
(20,1,1,'King Prawn Omelletes',10000,'piring',100,NULL,1,1,1,1,1),
(21,1,1,'Steamed Duck With Crab Meat Sauce and Vegetables',10000,'piring',100,'assets/product-pict/21/590a32aea18a30b82e56c44c4ec25b5b.jpg',1,1,1,1,1),
(22,1,2,'Cocktail',10000,'Gelas',100,NULL,1,1,1,1,1),
(23,1,2,'Champagne',10000,'Gelas',100,NULL,1,1,1,1,1),
(24,1,2,'Carmeleon Butterfly blue Origin',10000,'Gelas',100,NULL,1,1,1,1,1),
(25,1,2,'Hocus Pocus Tralala',10000,'Gelas',100,NULL,1,1,1,1,1),
(26,1,2,'Smithy Jegger webbermen jhonson',10000,'Gelas',100,NULL,1,1,1,1,1),
(27,1,1,'Mie Ayam',10000,'Mangkok',1000,'assets/product-pict/27/39b946dfca7c4d9b00ae969465037114.jpg',1,500,1,1,100),
(28,1,1,'Lemper Guling',100000,'Gelundung',100,'assets/product-pict/28/2547fcb769ea20b72be7d3436fbb177d.jpg',1,1,1,1,1);

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

insert  into `md_tables`(`tab_id`,`outlet_id`,`tab_name`,`tab_status`) values 
(3,1,'Meja 2',1),
(4,1,'Meja 3',1),
(5,1,'Meja 4',1),
(6,1,'Meja 5',0),
(7,1,'Meja 6',1),
(8,1,'Meja 7',1),
(9,1,'Meja 8',1),
(17,1,'Meja 12',0),
(18,2,'Meja 1',1);

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `md_users` */

insert  into `md_users`(`users_id`,`roles_id`,`users_fullname`,`users_mail`,`users_phone`,`users_address`,`users_born`,`users_photo`,`users_password`,`users_registered`,`users_status`) values 
(1,1,'Admin','folarium@gmail.com','0812345566','Jl. Kapten Haryadi No 117','1992-02-23','assets/photo-pict/admin-5a6982d7b91f3.jpg','2aefc34200a294a3cc7db81b43a81873','2018-01-18 08:00:00',2),
(3,4,'Admin','dhoni.p.saputra@gmail.com','085736911759','jogja','1993-10-10','assets/emp-pict/folar-emp-5a712c660c440.jpg',NULL,'2018-02-01 10:42:24',NULL),
(5,5,'Customer','nanikanarifah48@gmail.com','90723403264','jogja','1970-01-01','assets/emp-pict/folar-emp-5a72940ebc1d8.jpg',NULL,'0000-00-00 00:00:00',NULL),
(6,2,'Finance','anarifa48@gmail.com','09273624','ljksahs','1970-01-01','assets/emp-pict/folar-emp-5a72949eaab71.jpg',NULL,'0000-00-00 00:00:00',NULL);

/*Table structure for table `md_users_outlet` */

DROP TABLE IF EXISTS `md_users_outlet`;

CREATE TABLE `md_users_outlet` (
  `users_outlet_id` int(11) NOT NULL AUTO_INCREMENT,
  `outlet_roles_id` int(11) NOT NULL,
  `outlet_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `users_outlet_registered` datetime DEFAULT NULL,
  PRIMARY KEY (`users_outlet_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `md_users_outlet` */

insert  into `md_users_outlet`(`users_outlet_id`,`outlet_roles_id`,`outlet_id`,`users_id`,`users_outlet_registered`) values 
(1,1,1,3,'2018-01-31 09:42:01'),
(2,1,2,3,'2018-02-01 11:01:20'),
(3,1,3,3,'2018-02-01 11:02:02');

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

/*Table structure for table `tr_payment` */

DROP TABLE IF EXISTS `tr_payment`;

CREATE TABLE `tr_payment` (
  `pay_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'payment id',
  `users_outlet_id` int(11) NOT NULL COMMENT 'user outlet id',
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
  PRIMARY KEY (`pay_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;

/*Data for the table `tr_payment` */

insert  into `tr_payment`(`pay_id`,`users_outlet_id`,`tab_id`,`bank_id`,`disc_id`,`outlet_payment_method_id`,`outlet_id`,`pay_visitor`,`pay_bills`,`pay_total`,`pay_nom`,`pay_paid_nom`,`pay_bank_nom`,`pay_tax_percent`,`pay_tax_nominal`,`pay_date`,`pay_paid`,`pay_compl_status`,`pay_compl_note`,`pay_cancel_status`,`pay_cancel_note`) values 
(1,1,1,1,0,1,1,'Sandi',9800,10000,'100000',0,'0',0,0,'2018-02-02 15:40:40','2018-02-02 15:40:40',1,'',0,''),
(2,1,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 17:24:00','2018-02-02 17:24:00',0,'',0,''),
(3,1,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 18:19:49','2018-02-02 18:19:49',0,'',0,''),
(4,1,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 18:21:30','2018-02-02 18:21:30',0,'',0,''),
(5,1,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 18:22:26','2018-02-02 18:22:26',0,'',0,''),
(6,1,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 18:26:21','2018-02-02 18:26:21',0,'',0,''),
(7,1,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 18:26:59','2018-02-02 18:26:59',0,'',0,''),
(8,1,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 18:27:57','2018-02-02 18:27:57',0,'',0,''),
(9,1,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 22:04:18','2018-02-02 22:04:18',0,'',0,''),
(10,1,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 22:05:04','2018-02-02 22:05:04',0,'',0,''),
(11,1,1,1,0,1,1,'Dhoni',10000,10000,'10000',0,'0',0,0,'2018-02-02 22:05:16','2018-02-02 22:05:16',0,'',0,''),
(12,1,1,1,0,1,1,'Bunda',10000,10000,'10000',0,'0',0,0,'2018-02-02 22:07:07','2018-02-02 22:07:07',0,'',0,''),
(13,1,21,1,0,1,1,'Samawa',10000,10000,'10000',0,'0',0,0,'2018-02-02 22:09:08','2018-02-02 22:09:08',0,'',0,''),
(14,1,3,1,0,1,1,'Sasa',10000,10000,'10000',0,'0',0,0,'2018-02-04 22:06:56','2018-02-04 22:06:56',0,'',0,''),
(15,1,3,1,0,1,1,'Sasa',10000,10000,'10000',0,'0',0,0,'2018-02-04 22:08:29','2018-02-04 22:08:29',0,'',0,''),
(16,1,3,1,0,1,1,'Sasa',10000,10000,'10000',0,'0',0,0,'2018-02-04 22:10:09','2018-02-04 22:10:09',0,'',0,''),
(17,1,1,1,0,1,1,'D',0,0,'0',0,'0',0,0,'2018-02-04 22:31:27','2018-02-04 22:31:27',0,'',0,''),
(18,1,3,1,0,1,1,'Dhoni',0,0,'0',0,'0',0,0,'2018-02-04 23:22:29','2018-02-04 23:22:29',0,'',0,''),
(19,1,4,1,0,1,1,'Dhoni',0,0,'0',0,'0',0,0,'2018-02-04 23:23:43','2018-02-04 23:23:43',0,'',0,''),
(20,1,0,1,0,1,1,'334',0,0,'0',0,'0',0,0,'2018-02-04 23:24:22','2018-02-04 23:24:22',0,'',0,''),
(21,1,0,1,0,1,1,'454',0,0,'0',0,'0',0,0,'2018-02-04 23:26:53','2018-02-04 23:26:53',0,'',0,''),
(22,1,0,1,0,1,1,'6756',0,0,'0',0,'0',0,0,'2018-02-04 23:27:08','2018-02-04 23:27:08',0,'',0,''),
(23,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:03','2018-02-05 01:40:03',0,'',0,''),
(24,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:03','2018-02-05 01:40:03',0,'',0,''),
(25,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:04','2018-02-05 01:40:04',0,'',0,''),
(26,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:04','2018-02-05 01:40:04',0,'',0,''),
(27,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:04','2018-02-05 01:40:04',0,'',0,''),
(28,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:04','2018-02-05 01:40:04',0,'',0,''),
(29,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:04','2018-02-05 01:40:04',0,'',0,''),
(30,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:04','2018-02-05 01:40:04',0,'',0,''),
(31,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:05','2018-02-05 01:40:05',0,'',0,''),
(32,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:05','2018-02-05 01:40:05',0,'',0,''),
(33,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:05','2018-02-05 01:40:05',0,'',0,''),
(34,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:05','2018-02-05 01:40:05',0,'',0,''),
(35,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:05','2018-02-05 01:40:05',0,'',0,''),
(36,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:05','2018-02-05 01:40:05',0,'',0,''),
(37,1,10,1,0,1,1,'Dhoni',57000,57000,'0',0,'0',0,0,'2018-02-05 01:40:06','2018-02-05 01:40:06',0,'',0,''),
(38,1,1,1,0,1,1,'D',20000,20000,'0',0,'0',0,0,'2018-02-05 01:55:15','2018-02-05 01:55:15',0,'',0,''),
(39,1,1,1,0,1,1,'D',20000,20000,'0',0,'0',0,0,'2018-02-05 01:57:22','2018-02-05 01:57:22',0,'',0,''),
(40,1,4,1,0,1,1,'Sahara',32000,32000,'35000',0,'0',0,0,'2018-02-05 02:05:55','2018-02-05 02:05:55',0,'',0,''),
(41,1,6,1,0,1,1,'Dodo',12000,12000,'15000',0,'0',0,0,'2018-02-05 02:06:35','2018-02-05 02:06:35',0,'',0,''),
(42,1,5,1,0,1,1,'Sagan',20000,20000,'20000',0,'0',0,0,'2018-02-05 02:07:58','2018-02-05 02:07:58',0,'',0,''),
(43,1,3,1,0,1,1,'Safara',30000,30000,'36000',0,'0',0,0,'2018-02-05 02:10:03','2018-02-05 02:10:03',1,'',0,''),
(44,1,0,1,0,1,1,'SSS',50000,50000,'50000',0,'0',0,0,'2018-02-05 02:10:25','2018-02-05 02:10:25',1,'',0,'');

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
  PRIMARY KEY (`pay_dt_id`)
) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=latin1;

/*Data for the table `tr_payment_dt` */

insert  into `tr_payment_dt`(`pay_dt_id`,`prod_id`,`pay_id`,`pay_dt_date`,`pay_dt_qty`,`pay_dt_price`,`pay_dt_total`,`pay_dt_note`,`pay_dt_compl_status`,`pay_dt_compl_note`,`pay_dt_cancel_status`,`pay_dt_cancel_note`,`pay_dt_disc_percent`,`pay_dt_disc_nominal`) values 
(1,1,6,'2018-02-02 18:26:21',1,10000,10000,'',1,'',0,'',1,100),
(2,3,6,'2018-02-02 18:26:21',1,13000,13000,'',1,'',0,'',1,10),
(3,7,6,'2018-02-02 18:26:21',1,10000,10000,'',1,'',0,'',1,10),
(4,8,6,'2018-02-02 18:26:21',1,10000,10000,'',1,'',0,'',1,10),
(5,4,6,'2018-02-02 18:26:21',2,1000,2000,'',1,'',0,'',1,10),
(6,1,7,'2018-02-02 18:26:59',1,10000,10000,'',1,'',0,'',1,100),
(7,3,7,'2018-02-02 18:26:59',1,13000,13000,'',1,'',0,'',1,10),
(8,7,7,'2018-02-02 18:26:59',1,10000,10000,'',1,'',0,'',1,10),
(9,8,7,'2018-02-02 18:26:59',1,10000,10000,'',1,'',0,'',1,10),
(10,4,7,'2018-02-02 18:26:59',2,1000,2000,'',1,'',0,'',1,10),
(11,1,8,'2018-02-02 18:27:57',1,10000,10000,'',1,'',0,'',1,100),
(12,3,8,'2018-02-02 18:27:57',1,13000,13000,'',1,'',0,'',1,10),
(13,7,8,'2018-02-02 18:27:57',1,10000,10000,'',1,'',0,'',1,10),
(14,8,8,'2018-02-02 18:27:57',1,10000,10000,'',1,'',0,'',1,10),
(15,4,8,'2018-02-02 18:27:57',2,1000,2000,'',1,'',0,'',1,10),
(16,1,9,'2018-02-02 22:04:18',1,10000,10000,'',1,'',0,'',1,100),
(17,3,9,'2018-02-02 22:04:18',1,13000,13000,'',1,'',0,'',1,10),
(18,10,9,'2018-02-02 22:04:18',1,10000,10000,'',1,'',0,'',1,10),
(19,7,9,'2018-02-02 22:04:18',1,10000,10000,'',1,'',0,'',1,10),
(20,8,9,'2018-02-02 22:04:18',1,10000,10000,'',1,'',0,'',1,10),
(21,1,10,'2018-02-02 22:05:04',1,10000,10000,'',1,'',0,'',1,100),
(22,3,10,'2018-02-02 22:05:04',1,13000,13000,'',1,'',0,'',1,10),
(23,10,10,'2018-02-02 22:05:04',1,10000,10000,'',1,'',0,'',1,10),
(24,7,10,'2018-02-02 22:05:04',1,10000,10000,'',1,'',0,'',1,10),
(25,8,10,'2018-02-02 22:05:04',1,10000,10000,'',1,'',0,'',1,10),
(26,1,11,'2018-02-02 22:05:16',1,10000,10000,'',1,'',0,'',1,100),
(27,3,11,'2018-02-02 22:05:16',1,13000,13000,'',1,'',0,'',1,10),
(28,10,11,'2018-02-02 22:05:16',1,10000,10000,'',1,'',0,'',1,10),
(29,7,11,'2018-02-02 22:05:16',1,10000,10000,'',1,'',0,'',1,10),
(30,8,11,'2018-02-02 22:05:16',1,10000,10000,'',1,'',0,'',1,10),
(31,7,12,'2018-02-02 22:07:07',1,10000,10000,'',1,'',0,'',1,10),
(32,8,12,'2018-02-02 22:07:07',1,10000,10000,'',1,'',0,'',1,10),
(33,9,12,'2018-02-02 22:07:07',1,10000,10000,'',1,'',0,'',1,10),
(34,4,12,'2018-02-02 22:07:07',1,1000,1000,'',1,'',0,'',1,10),
(35,3,12,'2018-02-02 22:07:07',1,13000,13000,'',1,'',0,'',1,10),
(36,1,12,'2018-02-02 22:07:07',1,10000,10000,'',1,'',0,'',1,100),
(37,3,13,'2018-02-02 22:09:08',1,13000,13000,'',1,'',0,'',1,10),
(38,7,13,'2018-02-02 22:09:08',1,10000,10000,'',1,'',0,'',1,10),
(39,6,13,'2018-02-02 22:09:08',1,10000,10000,'',1,'',0,'',1,10),
(40,8,13,'2018-02-02 22:09:08',1,10000,10000,'',1,'',0,'',1,10),
(41,12,13,'2018-02-02 22:09:08',1,10000,10000,'',1,'',0,'',1,10),
(42,11,13,'2018-02-02 22:09:08',5,10000,50000,'',1,'',0,'',1,10),
(43,3,14,'2018-02-04 22:06:56',1,13000,13000,'',1,'',0,'',1,10),
(44,1,14,'2018-02-04 22:06:56',3,10000,30000,'',1,'',0,'',1,100),
(45,3,15,'2018-02-04 22:08:29',1,13000,13000,'',1,'',0,'',1,10),
(46,1,15,'2018-02-04 22:08:29',3,10000,30000,'',1,'',0,'',1,100),
(47,3,16,'2018-02-04 22:10:09',1,13000,13000,'',1,'',0,'',1,10),
(48,1,16,'2018-02-04 22:10:09',3,10000,30000,'',1,'',0,'',1,100),
(49,1,17,'2018-02-04 22:31:27',3,10000,30000,'',1,'',0,'',1,100),
(50,1,18,'2018-02-04 23:22:29',1,10000,10000,'',1,'',0,'',1,100),
(51,3,18,'2018-02-04 23:22:29',1,13000,13000,'',1,'',0,'',1,10),
(52,5,18,'2018-02-04 23:22:29',1,10000,10000,'',1,'',0,'',1,10),
(53,1,19,'2018-02-04 23:23:43',1,10000,10000,'',1,'',0,'',1,100),
(54,3,19,'2018-02-04 23:23:43',1,13000,13000,'',1,'',0,'',1,10),
(55,4,19,'2018-02-04 23:23:43',1,1000,1000,'',1,'',0,'',1,10),
(56,1,20,'2018-02-04 23:24:22',2,10000,20000,'',1,'',0,'',1,100),
(57,3,20,'2018-02-04 23:24:22',2,13000,26000,'',1,'',0,'',1,10),
(58,4,20,'2018-02-04 23:24:22',2,1000,2000,'',1,'',0,'',1,10),
(59,5,20,'2018-02-04 23:24:22',1,10000,10000,'',1,'',0,'',1,10),
(60,1,21,'2018-02-04 23:26:53',2,10000,20000,'',1,'',0,'',1,100),
(61,3,21,'2018-02-04 23:26:53',2,13000,26000,'',1,'',0,'',1,10),
(62,4,21,'2018-02-04 23:26:53',3,1000,3000,'',1,'',0,'',1,10),
(63,5,21,'2018-02-04 23:26:53',1,10000,10000,'',1,'',0,'',1,10),
(64,6,21,'2018-02-04 23:26:53',8,10000,80000,'',1,'',0,'',1,10),
(65,1,22,'2018-02-04 23:27:08',2,10000,20000,'',1,'',0,'',1,100),
(66,3,22,'2018-02-04 23:27:08',2,13000,26000,'',1,'',0,'',1,10),
(67,4,22,'2018-02-04 23:27:08',3,1000,3000,'',1,'',0,'',1,10),
(68,5,22,'2018-02-04 23:27:08',1,10000,10000,'',1,'',0,'',1,10),
(69,6,22,'2018-02-04 23:27:08',11,10000,110000,'',1,'',0,'',1,10),
(70,1,23,'2018-02-05 01:40:03',2,10000,20000,'',1,'',0,'',1,100),
(71,3,23,'2018-02-05 01:40:03',1,13000,13000,'',1,'',0,'',1,10),
(72,4,23,'2018-02-05 01:40:03',4,1000,4000,'',1,'',0,'',1,10),
(73,11,23,'2018-02-05 01:40:03',2,10000,20000,'',1,'',0,'',1,10),
(74,1,24,'2018-02-05 01:40:03',2,10000,20000,'',1,'',0,'',1,100),
(75,3,24,'2018-02-05 01:40:03',1,13000,13000,'',1,'',0,'',1,10),
(76,4,24,'2018-02-05 01:40:03',4,1000,4000,'',1,'',0,'',1,10),
(77,11,24,'2018-02-05 01:40:03',2,10000,20000,'',1,'',0,'',1,10),
(78,1,25,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,100),
(79,3,25,'2018-02-05 01:40:04',1,13000,13000,'',1,'',0,'',1,10),
(80,4,25,'2018-02-05 01:40:04',4,1000,4000,'',1,'',0,'',1,10),
(81,11,25,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,10),
(82,1,28,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,100),
(83,3,28,'2018-02-05 01:40:04',1,13000,13000,'',1,'',0,'',1,10),
(84,4,28,'2018-02-05 01:40:04',4,1000,4000,'',1,'',0,'',1,10),
(85,11,28,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,10),
(86,1,27,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,100),
(87,3,27,'2018-02-05 01:40:04',1,13000,13000,'',1,'',0,'',1,10),
(88,4,27,'2018-02-05 01:40:04',4,1000,4000,'',1,'',0,'',1,10),
(89,11,27,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,10),
(90,1,26,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,100),
(91,3,26,'2018-02-05 01:40:04',1,13000,13000,'',1,'',0,'',1,10),
(92,4,26,'2018-02-05 01:40:04',4,1000,4000,'',1,'',0,'',1,10),
(93,11,26,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,10),
(94,1,30,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,100),
(95,3,30,'2018-02-05 01:40:04',1,13000,13000,'',1,'',0,'',1,10),
(96,4,30,'2018-02-05 01:40:04',4,1000,4000,'',1,'',0,'',1,10),
(97,11,30,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,10),
(98,1,29,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,100),
(99,3,29,'2018-02-05 01:40:04',1,13000,13000,'',1,'',0,'',1,10),
(100,4,29,'2018-02-05 01:40:04',4,1000,4000,'',1,'',0,'',1,10),
(101,11,29,'2018-02-05 01:40:04',2,10000,20000,'',1,'',0,'',1,10),
(102,1,31,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,100),
(103,3,31,'2018-02-05 01:40:05',1,13000,13000,'',1,'',0,'',1,10),
(104,4,31,'2018-02-05 01:40:05',4,1000,4000,'',1,'',0,'',1,10),
(105,11,31,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,10),
(106,1,32,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,100),
(107,3,32,'2018-02-05 01:40:05',1,13000,13000,'',1,'',0,'',1,10),
(108,4,32,'2018-02-05 01:40:05',4,1000,4000,'',1,'',0,'',1,10),
(109,11,32,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,10),
(110,1,34,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,100),
(111,3,34,'2018-02-05 01:40:05',1,13000,13000,'',1,'',0,'',1,10),
(112,4,34,'2018-02-05 01:40:05',4,1000,4000,'',1,'',0,'',1,10),
(113,11,34,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,10),
(114,1,33,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,100),
(115,3,33,'2018-02-05 01:40:05',1,13000,13000,'',1,'',0,'',1,10),
(116,4,33,'2018-02-05 01:40:05',4,1000,4000,'',1,'',0,'',1,10),
(117,11,33,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,10),
(118,1,35,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,100),
(119,3,35,'2018-02-05 01:40:05',1,13000,13000,'',1,'',0,'',1,10),
(120,4,35,'2018-02-05 01:40:05',4,1000,4000,'',1,'',0,'',1,10),
(121,11,35,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,10),
(122,1,36,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,100),
(123,3,36,'2018-02-05 01:40:05',1,13000,13000,'',1,'',0,'',1,10),
(124,4,36,'2018-02-05 01:40:05',4,1000,4000,'',1,'',0,'',1,10),
(125,11,36,'2018-02-05 01:40:05',2,10000,20000,'',1,'',0,'',1,10),
(126,1,37,'2018-02-05 01:40:06',2,10000,20000,'',1,'',0,'',1,100),
(127,3,37,'2018-02-05 01:40:06',1,13000,13000,'',1,'',0,'',1,10),
(128,4,37,'2018-02-05 01:40:06',4,1000,4000,'',1,'',0,'',1,10),
(129,11,37,'2018-02-05 01:40:06',2,10000,20000,'',1,'',0,'',1,10),
(130,1,38,'2018-02-05 01:55:15',1,10000,10000,'',1,'',0,'',1,100),
(131,6,38,'2018-02-05 01:55:15',1,10000,10000,'',1,'',0,'',1,10),
(132,1,39,'2018-02-05 01:57:22',1,10000,10000,'',1,'',0,'',1,100),
(133,6,39,'2018-02-05 01:57:22',1,10000,10000,'',1,'',0,'',1,10),
(134,1,40,'2018-02-05 02:05:55',2,10000,20000,'',1,'',0,'',1,100),
(135,6,40,'2018-02-05 02:05:55',1,10000,10000,'',1,'',0,'',1,10),
(136,4,40,'2018-02-05 02:05:55',2,1000,2000,'',1,'',0,'',1,10),
(137,4,41,'2018-02-05 02:06:35',12,1000,12000,'',1,'',0,'',1,10),
(138,1,42,'2018-02-05 02:07:58',1,10000,10000,'',1,'',0,'',1,100),
(139,6,42,'2018-02-05 02:07:58',1,10000,10000,'',1,'',0,'',1,10),
(140,6,43,'2018-02-05 02:10:03',3,10000,30000,'',1,'',0,'',1,10),
(141,6,44,'2018-02-05 02:10:25',5,10000,50000,'',1,'',0,'',1,10);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
