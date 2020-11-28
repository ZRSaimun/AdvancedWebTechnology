-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2020 at 12:00 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlinecomputershop`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `A_ID` varchar(20) NOT NULL,
  `A_NAME` varchar(50) NOT NULL,
  `A_ADDRESS` varchar(50) NOT NULL,
  `A_EMAIL` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`A_ID`, `A_NAME`, `A_ADDRESS`, `A_EMAIL`) VALUES
('', '', '', ''),
('bulbul', 'bulbul', 'bul', 'bul@gmail.com'),
('cds', 'cdsssssss', 'gfsssss', 'cds@gmial.com'),
('gfs', 'gfsssssss', 'gfsssssss', 'gfs@gmaill.com'),
('ggggggg', 'gggg', 'ggggggg', 's@gm.jh'),
('sdf', 'fdg', 'gfh', 'abir@gmail.com'),
('zr', 'zr ssss', 'Basundhara', 'zr@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `M_ID` varchar(20) NOT NULL,
  `M_NAME` varchar(50) NOT NULL,
  `M_ADDRESS` varchar(50) NOT NULL,
  `M_EMAIL` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`M_ID`, `M_NAME`, `M_ADDRESS`, `M_EMAIL`) VALUES
('abir', 'abirrrr', 'uttora', 'abir@gmail.com'),
('c', 'customr', 'Basundhara', 'customer@yahoo.com');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(50) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `price` int(10) NOT NULL,
  `catagoryID` int(10) NOT NULL,
  `average_rating` double(5,5) DEFAULT NULL,
  `description` varchar(500) NOT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `exclusive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `user_id`, `product_name`, `quantity`, `price`, `catagoryID`, `average_rating`, `description`, `published`, `exclusive`) VALUES
(1, 's1', 'aassa', '23', 300, 4, NULL, 'dfghfgfdgfdgfdgsfdgfd rgfdgfd  ggfdgfd', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `F_ID` int(11) NOT NULL,
  `F_TITLE` varchar(100) NOT NULL,
  `F_DESCRIPTION` text DEFAULT NULL,
  `R_ID` int(11) NOT NULL,
  `F_IMAGE` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`F_ID`, `F_TITLE`, `F_DESCRIPTION`, `R_ID`, `F_IMAGE`) VALUES
(1, 'product1', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 1, '/pictures/sandisk_ssd_plus_120gb_sata3_02.jpg'),
(2, 'product2', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 1, '/pictures/sandisk_ssd_plus_120gb_sata3_02.jpg'),
(3, 'product3', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 1, '/pictures/sandisk_ssd_plus_120gb_sata3_02.jpg'),
(4, 'product4', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 1, '/pictures/sandisk_ssd_plus_120gb_sata3_02.jpg'),
(8, 'product5', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 3, '/pictures/sandisk_ssd_plus_120gb_sata3_02.jpg'),
(9, 'product6', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 3, '/pictures/sandisk_ssd_plus_120gb_sata3_02.jpg'),
(10, 'product7', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 3, '/pictures/sandisk_ssd_plus_120gb_sata3_02.jpg'),
(11, 'product8', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 3, '/pictures/sandisk_ssd_plus_120gb_sata3_02.jpg'),
(12, 'product9', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 4, '/pictures/sandisk_ssd_plus_120gb_sata3_02.jpg'),
(13, 'product10', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 4, '/pictures/sandisk_ssd_plus_120gb_sata3_02.jpg'),
(14, 'product11', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 4, '/pictures/sandisk_ssd_plus_120gb_sata3_02.jpg'),
(15, 'product12', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 4, '/pictures/sandisk_ssd_plus_120gb_sata3_02.jpg'),
(18, 'product13', 'A solid-state drive (SSD) is a new generation of storage device used in computers. SSDs replace traditional mechanical hard disks by using flash-based memory, which is significantly faster.', 1, '/pictures/2019-11-25-12-58-18.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product_review`
--

CREATE TABLE `product_review` (
  `FR_ID` int(11) NOT NULL,
  `FR_TEXT` text NOT NULL,
  `FR_TIME` date NOT NULL,
  `F_ID` int(11) NOT NULL,
  `M_ID` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

CREATE TABLE `seller` (
  `seller_id` int(11) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `dob` varchar(50) NOT NULL,
  `phone_no` varchar(50) NOT NULL,
  `payment_type` varchar(50) NOT NULL,
  `social_media` varchar(50) NOT NULL,
  `level` int(20) NOT NULL,
  `selling_point` int(10) NOT NULL,
  `block_status` tinyint(1) NOT NULL,
  `verified` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`seller_id`, `user_id`, `name`, `email`, `address`, `dob`, `phone_no`, `payment_type`, `social_media`, `level`, `selling_point`, `block_status`, `verified`) VALUES
(1, 's', 'sad', 'sadsad', 'asdsa', 'sadsad', 'asdsad', 'asdsa', 'asdasd', 1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE `shops` (
  `R_ID` int(11) NOT NULL,
  `R_NAME` varchar(50) NOT NULL,
  `R_DESCRIPTION` text NOT NULL,
  `R_TYPE` varchar(15) NOT NULL,
  `R_LOCATION` varchar(50) NOT NULL,
  `R_STATUS` varchar(10) NOT NULL,
  `R_IMAGE` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`R_ID`, `R_NAME`, `R_DESCRIPTION`, `R_TYPE`, `R_LOCATION`, `R_STATUS`, `R_IMAGE`) VALUES
(1, 'startech', 'We provide the one stop solution for IT products; your happiness is just a click away. Star Tech believes in quality customer care service that ease your purchase procedure and after sale facilities. A lifelong relationship with customers is our main moto to make you feel precious in every experience.', 'Vegan', 'mirpur', 'VALID', '/pictures/start.jpg.jpg'),
(3, 'startech', 'We provide the one stop solution for IT products; your happiness is just a click away. Star Tech believes in quality customer care service that ease your purchase procedure and after sale facilities. A lifelong relationship with customers is our main moto to make you feel precious in every experience.', 'Fast Food', 'Basundhara', 'VALID', '/pictures/start.jpg.jpg'),
(4, 'startech', 'We provide the one stop solution for IT products; your happiness is just a click away. Star Tech believes in quality customer care service that ease your purchase procedure and after sale facilities. A lifelong relationship with customers is our main moto to make you feel precious in every experience.', 'Pizza', 'Dhanmondi', 'VALID', '/pictures/start.jpg.jpg'),
(5, 'gjgh', 'We provide the one stop solution for IT products; your happiness is just a click away. Star Tech believes in quality customer care service that ease your purchase procedure and after sale facilities. A lifelong relationship with customers is our main moto to make you feel precious in every experience.', 'Pizza', 'jfghj', 'VALID', '/pictures/start.jpg.jpg'),
(6, 'fgf', 'fgfdg', 'sfdg', 'sfdgsfdg', 'VALID', '/pictures/start.jpg.jpg'),
(7, 'sdf', 'dfgh', 'fgdhfgdh', 'fgdh', 'VALID', ''),
(8, 'rassssssss', 'We provide the one stop solution for IT products; your happiness is just a click away. Star Tech believes in quality customer care service that ease your purchase procedure and after sale facilities. A lifelong relationship with customers is our main moto to make you feel precious in every experience.', 'sssssss', 'sssssssss', 'VALID', '/pictures/start.jpg.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `shop_review`
--

CREATE TABLE `shop_review` (
  `RR_ID` int(11) NOT NULL,
  `RR_TEXT` text NOT NULL,
  `RR_TIME` date NOT NULL,
  `R_ID` int(11) NOT NULL,
  `U_ID` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `U_ID` varchar(20) NOT NULL,
  `U_PASSWORD` varchar(25) NOT NULL,
  `U_TYPE` varchar(10) NOT NULL,
  `U_STATUS` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`U_ID`, `U_PASSWORD`, `U_TYPE`, `U_STATUS`) VALUES
('', '', 'ADMIN', 'VALID'),
('a3', '123', 'ADMIN', 'VALID'),
('abir', '123', 'CUSTOMER', 'VALID'),
('c', '7', 'CUSTOMER', 'VALID'),
('s', '1', 'SELLER', 'VALID'),
('sdf', '7', 'SELLER', 'VALID'),
('u1', '1', 'ADMIN', 'VALID'),
('u2', '2', 'ADMIN', 'VALID'),
('zr', '1', 'ADMIN', 'VALID');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`A_ID`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`M_ID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`F_ID`);

--
-- Indexes for table `product_review`
--
ALTER TABLE `product_review`
  ADD PRIMARY KEY (`FR_ID`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`seller_id`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`R_ID`);

--
-- Indexes for table `shop_review`
--
ALTER TABLE `shop_review`
  ADD PRIMARY KEY (`RR_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`U_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `F_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `product_review`
--
ALTER TABLE `product_review`
  MODIFY `FR_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seller`
--
ALTER TABLE `seller`
  MODIFY `seller_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `R_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `shop_review`
--
ALTER TABLE `shop_review`
  MODIFY `RR_ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
