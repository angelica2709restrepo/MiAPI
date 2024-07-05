-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-06-2024 a las 17:59:13
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `miapi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pou`
--

CREATE TABLE `pou` (
  `id` int(2) NOT NULL,
  `tiulo` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `img` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pou`
--

INSERT INTO `pou` (`id`, `tiulo`, `descripcion`, `img`) VALUES
(1, 'Titulo mamalon 1', 'Me invento una descripcion larga mamalona para oucpar espacio en la tarjeta. Michi:', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPOuhJ9LmmlYKHgwkQPvHDw_8T9MDD6GyTw&s');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pou`
--
ALTER TABLE `pou`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pou`
--
ALTER TABLE `pou`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
