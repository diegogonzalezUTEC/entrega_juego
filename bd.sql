CREATE DATABASE  IF NOT EXISTS `juego` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `juego`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win32 (x86)
--
-- Host: localhost    Database: juego
-- ------------------------------------------------------
-- Server version	5.6.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carros`
--

DROP TABLE IF EXISTS `carros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carros` (
  `idCarros` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCarros`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carros`
--

LOCK TABLES `carros` WRITE;
/*!40000 ALTER TABLE `carros` DISABLE KEYS */;
INSERT INTO `carros` VALUES (1,'Ferrari rojo',NULL),(2,'undefined',NULL),(3,'undefined',NULL),(4,'undefined',NULL),(5,'pp',NULL),(6,'pp',NULL),(7,'otro',NULL),(8,'bmw',NULL),(9,'ford',NULL),(10,'aaa',NULL),(11,'vw2',NULL);
/*!40000 ALTER TABLE `carros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `competencias`
--

DROP TABLE IF EXISTS `competencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `competencias` (
  `idcompetencias` int(11) NOT NULL AUTO_INCREMENT,
  `jugador` varchar(45) DEFAULT NULL,
  `carro` varchar(45) DEFAULT NULL,
  `puntaje` int(11) DEFAULT NULL,
  `nombrecompetencia` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idcompetencias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `competencias`
--

LOCK TABLES `competencias` WRITE;
/*!40000 ALTER TABLE `competencias` DISABLE KEYS */;
/*!40000 ALTER TABLE `competencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jugadores`
--

DROP TABLE IF EXISTS `jugadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jugadores` (
  `idjugadores` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idjugadores`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jugadores`
--

LOCK TABLES `jugadores` WRITE;
/*!40000 ALTER TABLE `jugadores` DISABLE KEYS */;
/*!40000 ALTER TABLE `jugadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partida`
--

DROP TABLE IF EXISTS `partida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partida` (
  `idPartida` int(11) NOT NULL AUTO_INCREMENT,
  `NombrePartida` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPartida`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partida`
--

LOCK TABLES `partida` WRITE;
/*!40000 ALTER TABLE `partida` DISABLE KEYS */;
/*!40000 ALTER TABLE `partida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pistas`
--

DROP TABLE IF EXISTS `pistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pistas` (
  `idPistas` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Carriles` int(11) NOT NULL,
  `Distancia` int(11) NOT NULL,
  `Activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPistas`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pistas`
--

LOCK TABLES `pistas` WRITE;
/*!40000 ALTER TABLE `pistas` DISABLE KEYS */;
INSERT INTO `pistas` VALUES (1,'San Marin',10,2500,NULL),(2,'Diego',10,3570,NULL),(3,'monaco',5,4000,NULL),(4,'monaco',5,4000,NULL),(5,'pp',2,123,NULL),(6,'caco',6,3596,NULL),(7,'otro',6,3596,NULL),(8,'nro8',6,12345,NULL),(9,'italia',3,3214,NULL),(10,'italia',3,3214,NULL),(11,'italia',3,3214,NULL),(12,'italia',3,3214,NULL),(13,'italia',3,3214,NULL),(14,'italia',3,3214,NULL);
/*!40000 ALTER TABLE `pistas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-12 10:07:33
