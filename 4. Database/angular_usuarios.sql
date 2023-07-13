-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: angular
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido1` varchar(45) DEFAULT NULL,
  `apellido2` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Jose','Herrera','Sanz'),(2,'Maria','Gonzalez','Perez'),(3,'Julian','Diaz','Diaz'),(4,'Rosa','Gonzalez','Gomez'),(5,'Jacinta','Gonzalez','Diaz'),(6,'Pepe','Gonzalez','Tierra'),(7,'Ana','Lopez','Lopez'),(8,'Ángel','Santo','Santo'),(9,'Manuela','Gonzalez','Gonzalez'),(10,'Isabel','Garrido','Diaz'),(11,'daniel','vera','montelongo'),(12,'carlos','gomez','alvarez'),(13,'Paco','Gomez','Alvarez'),(14,'pepe','pepe','pepe'),(15,'Manuela','Garcia','Garcia'),(16,'Jesus','Mesa','Silla'),(17,'Pepe','Garcia','Garcia'),(18,'Pepe','Garcia','Garcia'),(19,'Javier','Heredia','Heredia'),(20,'Isabel','Dulce','An'),(21,'Jacinto','Diaz','Diaz'),(22,'Juanito ','Garcia','Mendez'),(23,'Raul','Jimenez','Sanchez'),(24,'Pep','Garcia','Garcia'),(25,'daniel','Vera','Montelongpo'),(26,'Luisa','Martinez','Algarra'),(27,'Juana','Montana','Persiana'),(28,'Pepe','Villuela','Cuñao'),(29,'Julieta','Benegas','Limonysal'),(30,'Sara','Sanchez','Parra');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-13 16:55:11
