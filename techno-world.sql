-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 17, 2022 at 02:16 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techno-world`
--

-- --------------------------------------------------------

--
-- Table structure for table `employers`
--

CREATE TABLE `employers` (
  `abn_acn` int(100) NOT NULL,
  `employer_name` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_phone` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address_line_1` varchar(255) NOT NULL,
  `address_line_2` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `date_joined` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employers`
--

INSERT INTO `employers` (`abn_acn`, `employer_name`, `contact_name`, `contact_email`, `contact_phone`, `password`, `address_line_1`, `address_line_2`, `city`, `state`, `date_joined`) VALUES
(298198462, 'Immersive', 'Nabeel Bullock', 'nabeel@immersive.com', '0478909099', '$2b$06$9t1KQtSxqSQWVY9sSVLFfuVTo4JNnMGyq7Q/dwFFnq0P8B1I22fmW', 'Shop 103/40 Kessels Road', '', 'Brisbane', 'QLD', 1273845600),
(301075282, 'Digion Corporation', 'Jozef Whitmore', 'j.whitmore@digion.com', '0733455213', '$2b$06$SJckn2lvj7LJQdlb0zu5EuJ8aJj4Ix.TKJ7TixLby.EdKQ9Rg.vHC', 'Suite 502/232 Albert Street', '', 'Brisbane', 'QLD', 1602165600),
(324395358, 'Webio', 'Chaya Hurley', 'ch@webio.com', '0321787454', '$2b$06$3oAR0FsfFDfGYRbQ63kQx.zTJGoj9Y5yb23cF7MU.hRygSax3vLpu', '103/60 Queen Street', '', 'Brisbane', 'QLD', 1435586400),
(346337584, 'Innova', 'Luther Dunn', 'lexluther@innova.com', '0436589583', '$2b$06$8KtpoqSjVH7tTxBb1rNsr.w8Kg9Xn/N80RgNdEFXzVTtRCM0XqgUu', '66 Stanley Street', '', 'Brisbane', 'QLD', 1647524620),
(390030347, 'Architech', 'Kamila Thomas', 'kthomas@architech.com', '0473898212', '$2b$06$N.mWiftUDfgSU3vMp0DhgeO88.VUAvXoi2qLiCPeq3X5oqtHpAin6', 'Shop 2 1293 Milton Rd', '', 'Brisbane', 'QLD', 1642600800),
(424453191, 'Transio', 'Donnie Colley', 'd.colley@transio.com', '0324758983', '$2b$06$B2lbdqIkxkyYeGrD4DQOheUAtP8RJaaVRyj.Colti9HN/gX61IzQO', '402 Lutwych Road', '', 'Brisbane', 'QLD', 1554300000),
(463589029, 'Dev AI', 'Elin Mccabe', 'elin.m@devai.com', '0467898341', '$2b$06$CwRzdcdbVlg6Gcx89S/FMu/zD9JTQ6KPZOqw58LMRQjCXUtkjDVBW', '300 Margaret Street', '', 'Brisbane', 'QLD', 1305813600),
(567011307, 'Minify', 'Kerys Holding', 'k.holding@minify.net', '0798333870', '$2b$06$DyDlZI/jsFEXHUp0gNKtCeN488zpzxuMUNyiuRjmjBQVC5IR6KDgu', '300 Albert Street', '', 'Brisbane', 'QLD', 1534514400),
(624834254, 'Systemic', 'Ayyan Velesquez', 'ayyan@systemic.com', '0465748291', '$2b$06$GwH8G3MKzi0tNg.uIuqgDeyrmvQgEQg7BDzGMtxjfDweM5Feq8ykW', '1343 Logan Road', '', 'Brisbane', 'QLD', 1265637600),
(958089535, 'Agile', 'Cohan Thatcher', 'cthatcher@agile.com', '0743261783', '$2b$06$6x3rxA7t42IjYLyUdK8/fubdI7kLmDEQjrLdFeZR6gySWnfny2vO2', '1333 Moggil Road', '', 'Brisbane', 'QLD', 1410184800);

-- --------------------------------------------------------

--
-- Table structure for table `employment_history`
--

CREATE TABLE `employment_history` (
  `id` int(11) NOT NULL,
  `jobseeker_id` varchar(255) NOT NULL,
  `start_date` int(11) NOT NULL,
  `end_date` int(11) DEFAULT NULL,
  `role_id` int(11) NOT NULL,
  `details` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employment_history`
--

INSERT INTO `employment_history` (`id`, `jobseeker_id`, `start_date`, `end_date`, `role_id`, `details`) VALUES
(946, 'v.b@gmail.com', 1641909600, NULL, 3, 'Glitch Web Dev'),
(947, 'k.bon@gmail.com', 1519826400, 1584540000, 5, 'Jinx Data Solutions'),
(948, 'k.bon@gmail.com', 1585317600, NULL, 5, 'Data Be Good'),
(949, 'ryanFlamingo@gmail.com', 1286028000, 1584453600, 4, 'Graphiicz'),
(950, 'ryanFlamingo@gmail.com', 1585663200, NULL, 4, 'Good Dezignz'),
(951, 'aw202020@outlook.com', 1485525600, 1614780000, 2, 'Yup Finance'),
(952, 'aw202020@outlook.com', 1628690400, 1643464800, 2, 'LockDown Network Security'),
(953, 'aMorgan@hotmail.com', 1589378400, 1644847200, 3, 'Slick Designs'),
(954, 'FatmaCullen@cheerio.com', 1452520800, 1643637600, 1, 'SaaSy'),
(955, 'r.sparrow@gmail.com', 1375365600, 1449583200, 5, 'DebianTimeShare'),
(956, 'r.sparrow@gmail.com', 1299420000, 1374069600, 2, 'Phalanx Limites'),
(957, 'r.sparrow@gmail.com', 1451743200, 1559138400, 4, 'CoolPix Web Design'),
(958, 'r.sparrow@gmail.com', 1560088800, 1643205600, 3, 'Wordpress Masters'),
(959, 'amk@outlook.com', 1300716000, 1447164000, 3, 'FullyIntegrated'),
(960, 'amk@outlook.com', 1452693600, 1575727200, 3, 'Statement Websites'),
(961, 'amk@outlook.com', 1546300800, NULL, 3, 'Devtopia'),
(962, 't.christian@grandios.com', 951141600, 1412604000, 2, 'Webmaster'),
(963, 't.christian@grandios.com', 1417356000, NULL, 2, 'Total Solutions'),
(964, 'ANorton8976@qld.gov.au', 1327327200, 1483228800, 5, 'Queensland Governement'),
(965, 'ANorton8976@qld.gov.au', 1485180000, NULL, 5, 'Queensland Governement'),
(966, 'omendoza@gmail.com', 1293840000, NULL, 4, 'High Impact Designs'),
(967, 'LD94@gmail.com', 1432303200, NULL, 5, 'Big Data AI'),
(968, 'rbenton@gmail.com', 1141394400, NULL, 5, 'QPS'),
(969, 'm.abbott@gmail.com', 1361282400, NULL, 5, 'AFP'),
(970, 'm.abbott@gmail.com', 1272722400, 1361196000, 5, 'Queensland Libraries'),
(971, 'h.leal@outlook.com', 946735200, NULL, 5, 'KPMG'),
(972, 'zealy@gmail.com', 1452780000, 1485698400, 1, 'AppMan'),
(973, 'zealy@gmail.com', 1486648800, 1533045600, 2, 'AppleTron'),
(974, 'zealy@gmail.com', 1535724000, 1608213600, 5, 'Statson & Databa'),
(975, 'zealy@gmail.com', 1610460000, 1645279200, 1, 'AppMan Incorporated');

-- --------------------------------------------------------

--
-- Table structure for table `jobseekers`
--

CREATE TABLE `jobseekers` (
  `email` varchar(255) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `date_joined` int(100) NOT NULL,
  `cv_path` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobseekers`
--

INSERT INTO `jobseekers` (`email`, `first_name`, `last_name`, `password`, `phone`, `date_joined`, `cv_path`) VALUES
('amk@outlook.com', 'Ava-Mae', 'Klein', '$2b$06$1xeTcUdo0QGjirIkI4bZreVijuTr8dHj.uSRkASHhktM4.Hnv/1v.', '0346574891', 1637071200, NULL),
('aMorgan@hotmail.com', 'Anish', 'Morgan', '$2b$06$85dXE1jd3R5rirql.8OGJu.G1LDWMxXSXwVbxegF2vxsLnDO2nfsS', '0833345100', 1647524620, NULL),
('ANorton8976@qld.gov.au', 'Anja', 'Norton', '$2b$06$H6C4YM4P.FeM6/wrNu/NY.sECr0HSwzZzjhA2wdpHXwbGCbr.BPRO', '0877433678', 1343829600, NULL),
('aw202020@outlook.com', 'Ansh', 'Woodcock', '$2b$06$pK.LTAVQQhnc//9XarET1uKnlvJJVlFHP.6dk5tIauV0U.n.4ZkFW', '0700234334', 1647524620, NULL),
('FatmaCullen@cheerio.com', 'Fatma', 'Cullen', '$2b$06$7YIkKwwVFYBYLA1iJVlmqeATrh.uSl2pOoijCLCSqtrszj9oE3LYO', '0799445675', 1474207200, NULL),
('h.leal@outlook.com', 'Hendrix', 'Leal', '$2b$06$ZS8PC8iwASnHWqHDHawljOc8HHeW6eGS26C9MhHnbCbBuBf1eWjae', '0204389098', 946648800, NULL),
('k.bon@gmail.com', 'Kaydon', 'Bonner', '$2b$06$.ji2HT.amXHQ8d7cqh1bvuOsDeDOGxmeR7AjkOaKFovJvFCX2XDrS', '0453786762', 1587477600, NULL),
('LD94@gmail.com', 'Luna', 'Duffy', '$2b$06$oNm5VHCm9esPFs7hBNwNZOoRyjgRU4eu1UpU/QhGmjQ64QpGv1rfm', '0789090232', 1533650400, NULL),
('m.abbott@gmail.com', 'Mert', 'Abbott', '$2b$06$R/SbXq1kbwNpm2s/RIzT..fv/bjL4G9TOfebsLDMqmeFfrFzNjjGu', '0467899982', 1289224800, NULL),
('m.glimour@gmail.com', 'Marsha', 'Glimour', '$2b$06$Gn9gEXdZYeWAGhKbi0rC7OaEMh7g87/U7xOLOaFsUeGB9sgyOFtTC', '0478987676', 1640995200, NULL),
('M.Leech002@gmail.com', 'Marissa', 'Leech', '$2b$06$tLMIbgph7Q02AhHPcKgaTO3oW77N5.aN91mi0uChSkwEDqCxfQvPK', '0322898436', 1647524620, NULL),
('omendoza@gmail.com', 'Orion', 'Mendoza', '$2b$06$Yi8ypZxlmicUxZRpBTM.p.EqflWngwftsjTQHc403Wjy8fO8fv3cO', '0812333098', 1647524620, NULL),
('r.sparrow@gmail.com', 'Reiss', 'Sparrow', '$2b$06$KLkx2DF2FXaU4X8fIgPgk.SVrL3kd1y0AUHVYjrj.JJkIeyCSx85O', '0364543111', 1647524620, NULL),
('rbenton@gmail.com', 'Rhiannan', 'Benton', '$2b$06$CWx4jHemJ25vL6k1jtxCS.vcB7qchmKzhaXGkVRrALwShARSV3MEC', '0222334979', 1158501600, NULL),
('ryanFlamingo@gmail.com', 'Ryan', 'Fleming', '$2b$06$3UoiuAYJNpTwXp.KXrfUnuHMrSNsjwlwMa98H8IDc.U/SX6T/QZDi', '0374261723', 1647524620, NULL),
('t.christian@grandios.com', 'Traci', 'Christian', '$2b$06$R9Eme.zMP5bksxZdNM3gA.e4brSnEyocK.D61AZqZ0HeMsY2aZJZC', '0332178098', 1647524620, NULL),
('v.b@gmail.com', 'Valentina', 'Bush', '$2b$06$pNWoW/Jxq3xM68dWuiddP.gKd9hcbX2tSSt6I6T40hV0ZYpcWEc4C', '0475909888', 1647524620, NULL),
('zealy@gmail.com', 'Zi', 'Healy', '$2b$06$b.BJV72admVcn1qI7RKCFOV.LEJLZGzD0MGWeK6Yb5tHVJMj2XnoK', '0787998442', 1443535200, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `jobseeker_qualifications`
--

CREATE TABLE `jobseeker_qualifications` (
  `jobseeker_id` varchar(255) NOT NULL,
  `qualification_id` int(11) NOT NULL,
  `grad_year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobseeker_qualifications`
--

INSERT INTO `jobseeker_qualifications` (`jobseeker_id`, `qualification_id`, `grad_year`) VALUES
('amk@outlook.com', 2, 2010),
('aMorgan@hotmail.com', 25, 2020),
('ANorton8976@qld.gov.au', 4, 2010),
('ANorton8976@qld.gov.au', 15, 2011),
('aw202020@outlook.com', 6, 2016),
('FatmaCullen@cheerio.com', 2, 2012),
('FatmaCullen@cheerio.com', 10, 2015),
('h.leal@outlook.com', 4, 1998),
('k.bon@gmail.com', 4, 2017),
('LD94@gmail.com', 4, 2010),
('LD94@gmail.com', 15, 2013),
('LD94@gmail.com', 32, 2015),
('m.abbott@gmail.com', 4, 2009),
('m.glimour@gmail.com', 2, 2019),
('m.glimour@gmail.com', 17, 2021),
('M.Leech002@gmail.com', 21, 2021),
('omendoza@gmail.com', 31, 2010),
('r.sparrow@gmail.com', 4, 2010),
('rbenton@gmail.com', 4, 2003),
('ryanFlamingo@gmail.com', 25, 2009),
('t.christian@grandios.com', 3, 1999),
('v.b@gmail.com', 23, 2021),
('zealy@gmail.com', 4, 2011),
('zealy@gmail.com', 8, 2013),
('zealy@gmail.com', 26, 2016);

-- --------------------------------------------------------

--
-- Table structure for table `jobseeker_skills`
--

CREATE TABLE `jobseeker_skills` (
  `jobseeker_id` varchar(255) NOT NULL,
  `skill_id` int(11) NOT NULL,
  `skill_level` enum('0','1','2','3','4','5','6','7','8','9','10') NOT NULL,
  `details` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobseeker_skills`
--

INSERT INTO `jobseeker_skills` (`jobseeker_id`, `skill_id`, `skill_level`, `details`) VALUES
('amk@outlook.com', 1, '9', NULL),
('amk@outlook.com', 2, '7', NULL),
('amk@outlook.com', 6, '9', NULL),
('amk@outlook.com', 7, '8', NULL),
('amk@outlook.com', 9, '8', NULL),
('amk@outlook.com', 10, '9', NULL),
('amk@outlook.com', 11, '9', NULL),
('amk@outlook.com', 12, '9', NULL),
('amk@outlook.com', 13, '9', NULL),
('amk@outlook.com', 14, '9', NULL),
('amk@outlook.com', 15, '9', NULL),
('amk@outlook.com', 18, '8', NULL),
('amk@outlook.com', 19, '8', NULL),
('amk@outlook.com', 20, '7', NULL),
('amk@outlook.com', 22, '7', NULL),
('aMorgan@hotmail.com', 1, '4', NULL),
('aMorgan@hotmail.com', 2, '7', NULL),
('aMorgan@hotmail.com', 7, '5', NULL),
('aMorgan@hotmail.com', 8, '6', NULL),
('aMorgan@hotmail.com', 13, '4', NULL),
('aMorgan@hotmail.com', 14, '5', NULL),
('ANorton8976@qld.gov.au', 2, '8', NULL),
('ANorton8976@qld.gov.au', 9, '8', NULL),
('ANorton8976@qld.gov.au', 24, '9', NULL),
('ANorton8976@qld.gov.au', 25, '9', NULL),
('ANorton8976@qld.gov.au', 26, '9', NULL),
('aw202020@outlook.com', 2, '7', NULL),
('aw202020@outlook.com', 4, '7', NULL),
('aw202020@outlook.com', 9, '7', NULL),
('aw202020@outlook.com', 20, '7', NULL),
('aw202020@outlook.com', 21, '7', NULL),
('aw202020@outlook.com', 22, '7', NULL),
('FatmaCullen@cheerio.com', 4, '7', NULL),
('FatmaCullen@cheerio.com', 6, '8', NULL),
('FatmaCullen@cheerio.com', 21, '7', NULL),
('h.leal@outlook.com', 2, '10', NULL),
('h.leal@outlook.com', 9, '10', NULL),
('h.leal@outlook.com', 24, '10', NULL),
('h.leal@outlook.com', 25, '10', NULL),
('h.leal@outlook.com', 26, '10', NULL),
('k.bon@gmail.com', 1, '7', NULL),
('k.bon@gmail.com', 2, '9', NULL),
('k.bon@gmail.com', 9, '9', NULL),
('k.bon@gmail.com', 10, '9', NULL),
('k.bon@gmail.com', 11, '7', NULL),
('LD94@gmail.com', 2, '7', NULL),
('LD94@gmail.com', 9, '7', NULL),
('LD94@gmail.com', 10, '8', NULL),
('LD94@gmail.com', 25, '8', NULL),
('LD94@gmail.com', 26, '7', NULL),
('m.abbott@gmail.com', 2, '9', NULL),
('m.abbott@gmail.com', 9, '10', NULL),
('m.abbott@gmail.com', 24, '7', NULL),
('m.glimour@gmail.com', 3, '6', NULL),
('m.glimour@gmail.com', 4, '7', NULL),
('m.glimour@gmail.com', 21, '6', NULL),
('m.glimour@gmail.com', 22, '7', NULL),
('M.Leech002@gmail.com', 1, '3', NULL),
('M.Leech002@gmail.com', 2, '3', NULL),
('M.Leech002@gmail.com', 8, '3', NULL),
('M.Leech002@gmail.com', 12, '3', NULL),
('M.Leech002@gmail.com', 28, '3', NULL),
('omendoza@gmail.com', 8, '10', NULL),
('omendoza@gmail.com', 27, '10', NULL),
('omendoza@gmail.com', 28, '10', NULL),
('omendoza@gmail.com', 29, '10', NULL),
('r.sparrow@gmail.com', 1, '7', NULL),
('r.sparrow@gmail.com', 2, '8', NULL),
('r.sparrow@gmail.com', 3, '6', NULL),
('r.sparrow@gmail.com', 9, '6', NULL),
('r.sparrow@gmail.com', 16, '6', NULL),
('r.sparrow@gmail.com', 17, '7', NULL),
('r.sparrow@gmail.com', 21, '8', NULL),
('r.sparrow@gmail.com', 22, '7', NULL),
('r.sparrow@gmail.com', 26, '7', NULL),
('r.sparrow@gmail.com', 27, '5', NULL),
('r.sparrow@gmail.com', 28, '7', NULL),
('r.sparrow@gmail.com', 29, '7', NULL),
('rbenton@gmail.com', 2, '10', NULL),
('rbenton@gmail.com', 9, '10', NULL),
('rbenton@gmail.com', 24, '8', NULL),
('rbenton@gmail.com', 25, '9', NULL),
('ryanFlamingo@gmail.com', 1, '6', NULL),
('ryanFlamingo@gmail.com', 8, '10', NULL),
('ryanFlamingo@gmail.com', 27, '9', NULL),
('t.christian@grandios.com', 3, '7', NULL),
('t.christian@grandios.com', 4, '8', NULL),
('t.christian@grandios.com', 21, '9', NULL),
('t.christian@grandios.com', 22, '9', NULL),
('v.b@gmail.com', 1, '5', NULL),
('v.b@gmail.com', 2, '4', NULL),
('v.b@gmail.com', 12, '2', NULL),
('zealy@gmail.com', 1, '5', NULL),
('zealy@gmail.com', 2, '5', NULL),
('zealy@gmail.com', 3, '5', NULL),
('zealy@gmail.com', 4, '5', NULL),
('zealy@gmail.com', 7, '9', NULL),
('zealy@gmail.com', 8, '5', NULL),
('zealy@gmail.com', 21, '5', NULL),
('zealy@gmail.com', 22, '5', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

CREATE TABLE `positions` (
  `id` int(11) NOT NULL,
  `employer_id` int(11) NOT NULL,
  `position_title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `responsibilities` text NOT NULL,
  `min_salary` int(11) NOT NULL,
  `max_salary` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `contract_type` enum('casual','part-time','contract','permanent','permanent part-time','temporary') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `positions`
--

INSERT INTO `positions` (`id`, `employer_id`, `position_title`, `description`, `responsibilities`, `min_salary`, `max_salary`, `city`, `state`, `contract_type`) VALUES
(380, 301075282, 'Software Tester', 'Testing for JavaScript frontend and backend. Integration testing, unit testing, everything testing.', 'Building robust tests to thoroughly stress test our systems.', 80000, 100000, 'Brisbane', 'QLD', 'permanent'),
(381, 301075282, 'QA Lead', 'Lead a strong team of software testers to build robust testing solutions for our clients', 'Unit testing, integration testing, testing lead', 120000, 140000, 'Brisbane', 'QLD', 'permanent'),
(382, 301075282, 'Testing Intermediate', 'Testing in JavaScript', 'Lots of testing', 100000, 120000, 'Brisbane', 'QLD', 'permanent part-time'),
(383, 301075282, 'Data Analyst', 'Prepare robust testing suites and triggers to meet our client\'s data needs', 'Analyse data needs, build appropriate testing suites and triggers to ensure data integrity', 150000, 170000, 'Brisbane', 'QLD', 'permanent'),
(384, 324395358, 'Website developer', 'develop websites', 'Frontend Next.js development', 80000, 100000, 'Brisbane', 'QLD', 'permanent'),
(385, 324395358, 'Website developer', 'develop websites', 'Backend Node.js development', 80000, 100000, 'Brisbane', 'QLD', 'permanent'),
(386, 324395358, 'Web Designer', 'Design and graphic work for websites', 'Image manipulation, CSS, Theme development', 80000, 100000, 'Brisbane', 'QLD', 'permanent'),
(387, 463589029, 'Software Developer', 'Build AI accounting and law software', 'Create dummy data...', 160000, 180000, 'Brisbane', 'QLD', 'permanent'),
(388, 463589029, 'Software Developer', 'Build AI accounting and law software', 'Create dummy data...', 80000, 90000, 'Brisbane', 'QLD', 'permanent'),
(389, 624834254, 'Software Development', 'Build IOS apps with an awesome company!', 'Build backend APIs for a world class travel app.', 90000, 100000, 'Brisbane', 'QLD', 'permanent'),
(390, 624834254, 'Software Development', 'Build IOS apps with an awesome company!', 'Build backend APIs for a world class travel app.', 90000, 100000, 'Brisbane', 'QLD', 'permanent'),
(391, 624834254, 'Software Development', 'Build IOS apps with an awesome company!', 'Build backend APIs for a world class travel app.', 90000, 100000, 'Brisbane', 'QLD', 'permanent'),
(392, 346337584, 'Software Development Lead', 'Build IOS apps with an awesome company!', 'Lead a backend team for a world class travel app.', 150000, 160000, 'Brisbane', 'QLD', 'permanent'),
(393, 958089535, 'Web designer', 'Design modern bold style websites', 'Work directly with clients to design awesome modern styles', 90000, 110000, 'Brisbane', 'QLD', 'permanent part-time'),
(394, 424453191, 'Elite Database Analyst', 'Build scalable client solutions', 'Integrate with out application development team, you will be respobsible for building out the database and queries in our elite dev team', 155000, 175000, 'Brisbane', 'QLD', 'permanent'),
(395, 298198462, 'Junior Web Developer', 'Web dev junior', 'Initally you will be responsible for writing integration tests and populating databases with dummy data.', 55000, 65000, 'Brisbane', 'QLD', 'permanent'),
(396, 390030347, 'Lead Software Developer', 'Lead a team of 5 in a fresh SaaS company', 'Lead projects from start to finish', 160000, 180000, 'Brisbane', 'QLD', 'permanent'),
(397, 390030347, 'Software Developer', 'Join a small cutting edge SaaS team', 'IOS application development, test driven development', 120000, 140000, 'Brisbane', 'QLD', 'permanent'),
(398, 390030347, 'Software Developer', 'Join a small cutting edge SaaS team', 'IOS application development, test driven development', 120000, 140000, 'Brisbane', 'QLD', 'permanent'),
(399, 390030347, 'Software Developer', 'Join a small cutting edge SaaS team', 'IOS application development, test driven development', 120000, 140000, 'Brisbane', 'QLD', 'permanent'),
(400, 567011307, 'Junior Software Developer', 'Join an agile team of developers working in the shipping industry', 'Support the existing team as necessary', 45000, 55000, 'Brisbane', 'QLD', 'part-time');

-- --------------------------------------------------------

--
-- Table structure for table `qualifications`
--

CREATE TABLE `qualifications` (
  `id` int(11) NOT NULL,
  `qualification` varchar(400) NOT NULL,
  `level` enum('Certificate III','Certificate IV','Diploma','Bachelors','Graduate Diploma','Masters','Doctorate') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `qualifications`
--

INSERT INTO `qualifications` (`id`, `qualification`, `level`) VALUES
(1, 'Bachelor of Information Technology', 'Bachelors'),
(2, 'Bachelor of Computer Science', 'Bachelors'),
(3, 'Diploma in Information Technology', 'Diploma'),
(4, 'Bachelor of Data Analytics', 'Bachelors'),
(5, 'Bachelor of Arts (Animation and Game Design)', 'Bachelors'),
(6, 'Associate Degree in Applied Technologies (Cyber Security)', 'Bachelors'),
(7, 'Graduate Certificate in Data Analytics and Cyber Security', 'Graduate Diploma'),
(8, 'Master of Information Technology', 'Masters'),
(9, 'Diploma in Applied Information Technology', 'Diploma'),
(10, 'Master of Cyber Security', 'Masters'),
(11, 'Graduate Certificate in Digital and Social Media', 'Graduate Diploma'),
(12, 'Master of Digital and Social Media', 'Masters'),
(13, 'Undergraduate Certificate in Applied Technologies', 'Bachelors'),
(14, 'Graduate Certificate in Emerging Technologies and Law', 'Graduate Diploma'),
(15, 'Master of Management Information Systems', 'Masters'),
(16, 'Graduate Certificate in Data Science', 'Graduate Diploma'),
(17, 'Master of Comuputer Science', 'Masters'),
(18, 'Graduate Certificate in Digital Communication Strategy', 'Graduate Diploma'),
(19, 'Graduate Certificate in Blockchain Enables Business', 'Graduate Diploma'),
(20, 'Diploma of Applied Information Technology', 'Diploma'),
(21, 'Certificate III in Information Technology', 'Certificate III'),
(22, 'Bachelor of Digital Design (Visual Communication Design)', 'Bachelors'),
(23, 'Certificate IV in Information Technology', 'Certificate IV'),
(24, 'Certificate IV in Cyber Security', 'Certificate IV'),
(25, 'Certificate III in Information, Digital Media and Technology', 'Certificate III'),
(26, 'PhD Software Engineering', 'Doctorate'),
(27, 'PhD Computer Science', 'Doctorate'),
(28, 'PhD Networks and Infrastructure', 'Doctorate'),
(29, 'PhD Information Technology', 'Doctorate'),
(30, 'PhD Web Technologies', 'Doctorate'),
(31, 'Bachelor of Arts (Digital Media and Design Concepts)', 'Bachelors'),
(32, 'PhD Data Analytics', 'Doctorate');

-- --------------------------------------------------------

--
-- Table structure for table `qualification_requirements`
--

CREATE TABLE `qualification_requirements` (
  `position_id` int(11) NOT NULL,
  `qualification_id` int(11) NOT NULL,
  `details` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `qualification_requirements`
--

INSERT INTO `qualification_requirements` (`position_id`, `qualification_id`, `details`) VALUES
(380, 23, NULL),
(381, 2, NULL),
(382, 4, NULL),
(383, 4, NULL),
(384, 3, NULL),
(385, 3, NULL),
(386, 31, NULL),
(387, 2, NULL),
(388, 2, NULL),
(389, 2, NULL),
(390, 2, NULL),
(391, 2, NULL),
(392, 2, NULL),
(393, 31, NULL),
(394, 4, NULL),
(394, 15, NULL),
(395, 21, NULL),
(396, 17, NULL),
(397, 2, NULL),
(398, 2, NULL),
(399, 2, NULL),
(400, 21, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role`, `description`) VALUES
(1, 'software developer', ''),
(2, 'software tester', ''),
(3, 'web developer', ''),
(4, 'designer', ''),
(5, 'database analyst', '');

-- --------------------------------------------------------

--
-- Table structure for table `role_requirements`
--

CREATE TABLE `role_requirements` (
  `position_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `required_exp_yrs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role_requirements`
--

INSERT INTO `role_requirements` (`position_id`, `role_id`, `required_exp_yrs`) VALUES
(380, 2, 2),
(381, 2, 5),
(382, 2, 3),
(383, 5, 5),
(384, 3, 2),
(385, 3, 2),
(386, 4, 2),
(387, 1, 3),
(388, 1, 3),
(389, 1, 3),
(390, 1, 3),
(391, 1, 3),
(392, 1, 5),
(393, 4, 3),
(394, 5, 7),
(395, 3, 0),
(396, 1, 6),
(397, 1, 4),
(398, 1, 4),
(399, 1, 4),
(400, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `skill` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `skill`, `description`) VALUES
(1, 'javascript', ''),
(2, 'mysql', ''),
(3, 'c', ''),
(4, 'c++', ''),
(5, 'swift', ''),
(6, 'vs code', ''),
(7, 'git', ''),
(8, 'css', ''),
(9, 'mongodb', ''),
(10, 'mongoose', ''),
(11, 'mern', ''),
(12, 'react', ''),
(13, 'next.js', ''),
(14, 'express.js', ''),
(15, 'node.js', ''),
(16, 'java', ''),
(17, 'python', ''),
(18, 'service workers', ''),
(19, 'async', ''),
(20, 'jest', ''),
(21, 'unit testing', ''),
(22, 'integration testing', ''),
(23, 'negotiation', ''),
(24, 'rapport', ''),
(25, 'soft skills', ''),
(26, 'business analysis', ''),
(27, 'photo manipulation', ''),
(28, 'web design', ''),
(29, 'design concepts', '');

-- --------------------------------------------------------

--
-- Table structure for table `skill_requirements`
--

CREATE TABLE `skill_requirements` (
  `position_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL,
  `required_skill_level` enum('0','1','2','3','4','5','6','7','8','9','10') NOT NULL,
  `details` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `skill_requirements`
--

INSERT INTO `skill_requirements` (`position_id`, `skill_id`, `required_skill_level`, `details`) VALUES
(380, 1, '7', NULL),
(380, 2, '7', NULL),
(380, 20, '7', NULL),
(380, 21, '7', NULL),
(380, 22, '7', NULL),
(381, 1, '9', NULL),
(381, 2, '9', NULL),
(381, 20, '9', NULL),
(381, 21, '9', NULL),
(381, 22, '9', NULL),
(382, 1, '7', NULL),
(382, 2, '7', NULL),
(382, 20, '7', NULL),
(382, 21, '7', NULL),
(382, 22, '7', NULL),
(383, 2, '5', NULL),
(383, 9, '5', NULL),
(383, 21, '6', NULL),
(383, 22, '6', NULL),
(384, 1, '3', NULL),
(384, 2, '3', NULL),
(384, 13, '3', NULL),
(385, 1, '3', NULL),
(385, 2, '3', NULL),
(385, 14, '3', NULL),
(386, 8, '3', NULL),
(386, 27, '3', NULL),
(386, 28, '3', NULL),
(387, 2, '4', NULL),
(387, 3, '4', NULL),
(387, 4, '4', NULL),
(388, 2, '4', NULL),
(388, 3, '4', NULL),
(388, 4, '4', NULL),
(389, 2, '5', NULL),
(389, 5, '4', NULL),
(389, 19, '4', NULL),
(390, 2, '5', NULL),
(390, 5, '4', NULL),
(390, 19, '4', NULL),
(391, 2, '5', NULL),
(391, 5, '4', NULL),
(391, 19, '4', NULL),
(392, 2, '7', NULL),
(392, 5, '6', NULL),
(392, 19, '8', NULL),
(393, 8, '8', NULL),
(393, 27, '8', NULL),
(393, 28, '7', NULL),
(393, 29, '7', NULL),
(394, 2, '8', NULL),
(394, 9, '8', NULL),
(394, 24, '9', NULL),
(394, 25, '9', NULL),
(394, 26, '9', NULL),
(395, 1, '3', NULL),
(395, 2, '3', NULL),
(395, 8, '3', NULL),
(395, 12, '3', NULL),
(395, 28, '3', NULL),
(396, 3, '8', NULL),
(396, 4, '8', NULL),
(396, 5, '8', NULL),
(397, 3, '6', NULL),
(397, 5, '6', NULL),
(398, 3, '6', NULL),
(398, 5, '6', NULL),
(399, 3, '6', NULL),
(399, 5, '6', NULL),
(400, 1, '1', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `visa`
--

CREATE TABLE `visa` (
  `id` int(11) NOT NULL,
  `jobseeker_id` varchar(255) NOT NULL,
  `passport` varchar(20) DEFAULT NULL,
  `visa_number` varchar(50) DEFAULT NULL,
  `visa_type` varchar(50) DEFAULT NULL,
  `visa_status` varchar(50) DEFAULT NULL,
  `working_rights` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `visa`
--

INSERT INTO `visa` (`id`, `jobseeker_id`, `passport`, `visa_number`, `visa_type`, `visa_status`, `working_rights`) VALUES
(426, 'v.b@gmail.com', 'K8463720', NULL, NULL, NULL, 'citizen'),
(427, 'k.bon@gmail.com', NULL, NULL, NULL, NULL, 'citizen'),
(428, 'm.glimour@gmail.com', NULL, NULL, NULL, NULL, 'citizen'),
(429, 'ryanFlamingo@gmail.com', 'P8475032', '0098342228563', 'Employer Nomination Scheme (subclass 186)', 'Temporarily ceased', 'Expired'),
(430, 'aw202020@outlook.com', NULL, NULL, NULL, NULL, 'citizen'),
(431, 'aMorgan@hotmail.com', 'U3472948', '9803457292237', 'Global Special Humanitarian (subclass 202)', 'In effect', 'Permanent Resident'),
(432, 'FatmaCullen@cheerio.com', NULL, NULL, NULL, NULL, 'citizen'),
(433, 'r.sparrow@gmail.com', 'G4837585', '8493098247853', 'Global Special Humanitarian (subclass 202)', 'In effect', 'Permanent Resident'),
(434, 'amk@outlook.com', 'J3349321', '0023887346599', 'Partner(Subclass 801)', 'In effect', 'Permanent Resident'),
(435, 't.christian@grandios.com', 'M9846753', '1217489326584', 'PR (Skilled Regional) visa (subclass 191)', 'In effect', 'Permanent Resident'),
(436, 'ANorton8976@qld.gov.au', NULL, NULL, NULL, NULL, 'citizen'),
(437, 'omendoza@gmail.com', NULL, NULL, NULL, NULL, 'citizen'),
(438, 'M.Leech002@gmail.com', NULL, NULL, NULL, NULL, 'citizen'),
(439, 'LD94@gmail.com', NULL, NULL, NULL, NULL, 'citizen'),
(440, 'rbenton@gmail.com', NULL, NULL, NULL, NULL, 'citizen'),
(441, 'm.abbott@gmail.com', NULL, NULL, NULL, NULL, 'citizen'),
(442, 'h.leal@outlook.com', NULL, NULL, NULL, NULL, 'citizen'),
(443, 'zealy@gmail.com', 'A2834454', NULL, NULL, NULL, 'citizen');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employers`
--
ALTER TABLE `employers`
  ADD PRIMARY KEY (`abn_acn`),
  ADD UNIQUE KEY `abn_acn` (`abn_acn`);

--
-- Indexes for table `employment_history`
--
ALTER TABLE `employment_history`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `jobseeker_id` (`jobseeker_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `jobseekers`
--
ALTER TABLE `jobseekers`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `jobseeker_qualifications`
--
ALTER TABLE `jobseeker_qualifications`
  ADD PRIMARY KEY (`jobseeker_id`,`qualification_id`),
  ADD KEY `qualification_id` (`qualification_id`);

--
-- Indexes for table `jobseeker_skills`
--
ALTER TABLE `jobseeker_skills`
  ADD PRIMARY KEY (`jobseeker_id`,`skill_id`),
  ADD KEY `skill_id` (`skill_id`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `employer_id` (`employer_id`);

--
-- Indexes for table `qualifications`
--
ALTER TABLE `qualifications`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `qualification_requirements`
--
ALTER TABLE `qualification_requirements`
  ADD PRIMARY KEY (`position_id`,`qualification_id`),
  ADD KEY `qualification_id` (`qualification_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `role_requirements`
--
ALTER TABLE `role_requirements`
  ADD PRIMARY KEY (`position_id`,`role_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `skill_requirements`
--
ALTER TABLE `skill_requirements`
  ADD PRIMARY KEY (`position_id`,`skill_id`),
  ADD KEY `skill_id` (`skill_id`);

--
-- Indexes for table `visa`
--
ALTER TABLE `visa`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `jobseeker_id` (`jobseeker_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employment_history`
--
ALTER TABLE `employment_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=976;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=401;

--
-- AUTO_INCREMENT for table `qualifications`
--
ALTER TABLE `qualifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `visa`
--
ALTER TABLE `visa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=444;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employment_history`
--
ALTER TABLE `employment_history`
  ADD CONSTRAINT `employment_history_ibfk_1` FOREIGN KEY (`jobseeker_id`) REFERENCES `jobseekers` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `employment_history_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `jobseeker_qualifications`
--
ALTER TABLE `jobseeker_qualifications`
  ADD CONSTRAINT `jobseeker_qualifications_ibfk_1` FOREIGN KEY (`jobseeker_id`) REFERENCES `jobseekers` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jobseeker_qualifications_ibfk_2` FOREIGN KEY (`qualification_id`) REFERENCES `qualifications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `jobseeker_skills`
--
ALTER TABLE `jobseeker_skills`
  ADD CONSTRAINT `jobseeker_skills_ibfk_1` FOREIGN KEY (`jobseeker_id`) REFERENCES `jobseekers` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jobseeker_skills_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `positions`
--
ALTER TABLE `positions`
  ADD CONSTRAINT `positions_ibfk_1` FOREIGN KEY (`employer_id`) REFERENCES `employers` (`abn_acn`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `qualification_requirements`
--
ALTER TABLE `qualification_requirements`
  ADD CONSTRAINT `qualification_requirements_ibfk_1` FOREIGN KEY (`position_id`) REFERENCES `positions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `qualification_requirements_ibfk_2` FOREIGN KEY (`qualification_id`) REFERENCES `qualifications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `role_requirements`
--
ALTER TABLE `role_requirements`
  ADD CONSTRAINT `role_requirements_ibfk_1` FOREIGN KEY (`position_id`) REFERENCES `positions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `role_requirements_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `skill_requirements`
--
ALTER TABLE `skill_requirements`
  ADD CONSTRAINT `skill_requirements_ibfk_1` FOREIGN KEY (`position_id`) REFERENCES `positions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `skill_requirements_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `visa`
--
ALTER TABLE `visa`
  ADD CONSTRAINT `visa_ibfk_1` FOREIGN KEY (`jobseeker_id`) REFERENCES `jobseekers` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
