-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 26-11-2021 a las 03:15:07
-- Versión del servidor: 5.7.33-0ubuntu0.16.04.1
-- Versión de PHP: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ProSol_solteca`
--

DELIMITER $$
--
-- Procedimientos
--
$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditoria`
--

CREATE TABLE `auditoria` (
  `Id_auditoria` int(11) NOT NULL,
  `Accion` varchar(50) NOT NULL,
  `Empleado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autobus`
--

CREATE TABLE `autobus` (
  `Id_autobus` int(11) NOT NULL,
  `Tipo` varchar(50) NOT NULL,
  `Tamaño` int(5) NOT NULL,
  `Ruta` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `autobus`
--

INSERT INTO `autobus` (`Id_autobus`, `Tipo`, `Tamaño`, `Ruta`) VALUES
(1, 'Suburban de 19 pasajeros', 19, ''),
(2, 'Suburban de 16 pasajeros', 16, ''),
(3, 'Toyota de 13 pasajeros', 13, ''),
(4, 'Toyota de 12 pasajeros', 12, ''),
(5, 'Autobús de 42', 42, 'Línea Dorada'),
(6, 'Autobús de 40', 40, 'Línea Dorada'),
(7, 'Autobús de 38', 38, 'Línea Dorada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `boletos`
--

CREATE TABLE `boletos` (
  `Id_boletos` int(11) NOT NULL,
  `Tipo` varchar(25) NOT NULL,
  `Precio` int(11) NOT NULL,
  `Ruta` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `boletos`
--

INSERT INTO `boletos` (`Id_boletos`, `Tipo`, `Precio`, `Ruta`) VALUES
(1, 'Normal', 85, 'Sola de Vega'),
(2, 'Discapacitados', 85, 'Sola de Vega'),
(3, 'Niños', 85, 'Sola de Vega'),
(4, 'Maestros', 85, 'Sola de Vega'),
(9, 'Estudiantes', 85, 'Sola de Vega'),
(10, 'INSEN', 85, 'Sola de Vega'),
(11, 'Normal', 245, 'Puerto escondido'),
(12, 'Discapacitados', 245, 'Puerto escondido'),
(13, 'Niños', 245, 'Puerto escondido'),
(14, 'Maestros', 245, 'Puerto escondido'),
(15, 'Estudiantes', 245, 'Puerto escondido'),
(16, 'INSEN', 245, 'Puerto escondido'),
(17, 'Normal', 265, 'Río grande'),
(18, 'Discapacitados', 265, 'Río grande'),
(19, 'Niños', 265, 'Río grande'),
(20, 'Maestros', 265, 'Río grande'),
(21, 'Estudiantes', 265, 'Río grande'),
(22, 'INSEN', 265, 'Río grande'),
(23, 'Normal', 300, 'Pinotepa'),
(24, 'Discapacitados', 300, 'Pinotepa'),
(25, 'Niños', 300, 'Pinotepa'),
(26, 'Maestros', 300, 'Pinotepa'),
(27, 'Estudiantes', 300, 'Pinotepa'),
(28, 'INSEN', 300, 'Pinotepa'),
(29, 'Normal', 245, 'Oaxaca - Centro'),
(30, 'Discapacitados', 245, 'Oaxaca - Centro'),
(31, 'Niños', 245, 'Oaxaca - Centro'),
(32, 'Maestros', 245, 'Oaxaca - Centro'),
(33, 'Estudiantes', 245, 'Oaxaca - Centro'),
(34, 'INSEN', 245, 'Oaxaca - Centro'),
(35, 'Normal', 245, 'Oaxaca - Central de autobuses'),
(36, 'Discapacitados', 245, 'Oaxaca - Central de autobuses'),
(37, 'Niños', 245, 'Oaxaca - Central de autobuses'),
(38, 'Maestros    ', 245, 'Oaxaca - Central de autobuses'),
(39, 'Estudiantes', 245, 'Oaxaca - Central de autobuses'),
(40, 'INSEN', 245, 'Oaxaca - Central de autobuses');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `Id_carrito` int(11) NOT NULL,
  `Nombre_cliente` varchar(100) NOT NULL,
  `Origen` varchar(50) NOT NULL,
  `Destino` varchar(50) NOT NULL,
  `Tipo` varchar(25) NOT NULL,
  `Escala` varchar(50) NOT NULL,
  `Precio` int(11) NOT NULL,
  `Fecha_salida` date DEFAULT NULL,
  `Hora_salida` time DEFAULT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Asiento` int(11) NOT NULL,
  `Id_venta` int(11) NOT NULL,
  `Estado` int(11) NOT NULL,
  `Id_autobus` int(11) NOT NULL,
  `Id_sucursal` int(11) NOT NULL,
  `Referencia` text NOT NULL,
  `Numero_Autobus` int(11) DEFAULT NULL,
  `Trabajador` varchar(100) NOT NULL,
  `Id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`Id_carrito`, `Nombre_cliente`, `Origen`, `Destino`, `Tipo`, `Escala`, `Precio`, `Fecha_salida`, `Hora_salida`, `Telefono`, `Asiento`, `Id_venta`, `Estado`, `Id_autobus`, `Id_sucursal`, `Referencia`, `Numero_Autobus`, `Trabajador`, `Id_usuario`) VALUES
(1, '0', '0', '0', '0', '0', 0, NULL, NULL, '0', 0, 10, 0, 0, 1, '0', 8, '0', 0),
(56, 'Francisco', 'Oaxaca - Centro', 'Pinotepa', 'Discapacitados', 'Ojo de Agua', 245, '2021-11-26', '12:10:00', '9513915906', 2, 1, 2, 4, 1, 'N/A', 12, 'Edgar Rodolfo', 14),
(57, 'Francisco', 'Oaxaca - Centro', 'Sola de Vega', 'Discapacitados', 'Ojo de Agua', 245, '2021-11-25', '02:10:00', '9513915906', 1, 2, 2, 4, 1, 'N/A', 2, 'Edgar Rodolfo', 14),
(58, 'Francisco', 'Oaxaca - Centro', 'Pinotepa', 'Normal', 'Ojo de Agua', 245, '2021-11-23', '23:00:00', '9516147039', 1, 4, 2, 5, 1, 'N/A', 3, 'Edgar Rodolfo', 14),
(63, 'Drea', 'Oaxaca - Centro', 'Sola de Vega', 'Normal', 'Ojo de Agua', 245, '2021-11-25', '02:10:00', '9516147039', 12, 6, 2, 4, 1, 'N/A', 2, 'Edgar Rodolfo', 14),
(64, 'Drea', 'Oaxaca - Centro', 'Sola de Vega', 'Normal', 'Ojo de Agua', 245, '2021-11-25', '02:10:00', '9516147039', 11, 6, 2, 4, 1, 'N/A', 2, 'Edgar Rodolfo', 14),
(65, 'Daniel', 'Oaxaca - Centro', 'Puerto escondido', 'Normal', 'San pedro Mixtepec', 245, '2021-11-25', '16:00:00', '9516147039', 1, 8, 2, 1, 1, 'N/A', 4, 'Edgar Rodolfo', 14),
(66, 'Daniel', 'Oaxaca - Centro', 'Sola de Vega', 'Normal', 'San pedro Mixtepec', 245, '2021-11-25', '16:00:00', '9516147039', 2, 8, 2, 1, 1, 'N/A', 4, 'Edgar Rodolfo', 14),
(67, 'Luis', 'Oaxaca - Centro', 'Sola de Vega', 'Normal', 'Ojo de Agua', 245, '2021-11-29', '13:00:00', '9516147039', 1, 9, 2, 3, 1, 'N/A', 7, 'Edgar Rodolfo', 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `choferes`
--

CREATE TABLE `choferes` (
  `Id_chofer` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellido_materno` varchar(25) NOT NULL,
  `Apellido_paterno` varchar(25) NOT NULL,
  `Sucursal` varchar(30) NOT NULL,
  `Autobus` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descuentos`
--

CREATE TABLE `descuentos` (
  `Id_descuento` int(11) NOT NULL,
  `Tipo` varchar(25) NOT NULL,
  `Descuento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `descuentos`
--

INSERT INTO `descuentos` (`Id_descuento`, `Tipo`, `Descuento`) VALUES
(1, 'Normal', NULL),
(2, 'Discapacitados', NULL),
(3, 'Niños', 25),
(4, 'Maestros', NULL),
(5, 'Estudiantes', 25),
(6, 'INSEN', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `Id_usuario` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellido_paterno` varchar(25) NOT NULL,
  `Apellido_materno` varchar(25) NOT NULL,
  `Sexo` varchar(15) NOT NULL,
  `Usuario` varchar(25) NOT NULL,
  `Pass` varchar(250) NOT NULL,
  `Cargo` varchar(50) NOT NULL,
  `Id_sucursal` int(11) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `access_token` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`Id_usuario`, `Nombre`, `Apellido_paterno`, `Apellido_materno`, `Sexo`, `Usuario`, `Pass`, `Cargo`, `Id_sucursal`, `Telefono`, `access_token`) VALUES
(14, 'Edgar Rodolfo', 'Braquetes', 'López', 'Hombre', 'Bracuacks', '$2y$10$zpsorO.M0FaPxDCnEIW2cOvGkUwgEF0ZCJUZdTaKc9lGXNvFeG3o.', 'Administradors', 1, '9516147039', 'asdfghjklñasdfghjgkhll'),
(15, 'Jose Alfredo', 'Martínez ', 'Castro', 'Hombre', 'JoseA', '$2y$10$eFAq8MlnhE4QIoSgyOUPZuOdPCGThTvYZXCcnVNiHAtLzE88sjaoy', 'Vendedor', 1, '9512847408', 'asdfghjklñasdfghjgkhll'),
(16, 'Roman Gilberto', 'Mancera', 'Pacheco', 'Hombre', 'RomanCera', '$2y$10$pMFq12g3LxLSE47LLK3xGuYhw/ZaAXqsnvX7Kr0B9xqFG1VZItsbW', 'Vendedor', 1, '9512389292', 'asdfghjklñasdfghjgkhll'),
(17, 'Francisco Victorico', 'Aguirre', 'Jimenez', 'Hombre', 'VicWithGG', '$2y$10$KKo1CpwkGJU5hxMCLmdVreAx0XoWk.ppqTqHeN8lKstGCbd2J6ONO', 'Vendedor', 1, '9513915906', 'asdfghjklñasdfghjgkhll');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escala`
--

CREATE TABLE `escala` (
  `Id_escala` int(11) NOT NULL,
  `Escala` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `escala`
--

INSERT INTO `escala` (`Id_escala`, `Escala`) VALUES
(1, 'Ojo de Agua'),
(2, 'Juchatengo'),
(3, 'El vidrio'),
(4, 'San Gabriel'),
(5, 'San pedro Mixtepec'),
(6, 'bajos de chila');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadisticas`
--

CREATE TABLE `estadisticas` (
  `Id_estadistica` int(11) NOT NULL,
  `Sucursal` int(11) NOT NULL,
  `Fecha` date DEFAULT NULL,
  `Ruta` varchar(35) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Vendedor` varchar(30) NOT NULL,
  `Total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugares`
--

CREATE TABLE `lugares` (
  `Id_lugar` int(11) NOT NULL,
  `Lugar` varchar(50) NOT NULL,
  `Linea` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `lugares`
--

INSERT INTO `lugares` (`Id_lugar`, `Lugar`, `Linea`) VALUES
(1, 'Oaxaca - Centro', ''),
(2, 'Sola de Vega', ''),
(3, 'Puerto escondido', ''),
(4, 'Oaxaca - Central de autobuses', ''),
(5, 'Pinotepa', 'Línea Dorada'),
(6, 'Río grande', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutas`
--

CREATE TABLE `rutas` (
  `Id_rutas` int(11) NOT NULL,
  `Lugar_salida` varchar(50) NOT NULL,
  `Lugar_destino` varchar(50) NOT NULL,
  `Precio` int(11) DEFAULT NULL,
  `Linea` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rutas`
--

INSERT INTO `rutas` (`Id_rutas`, `Lugar_salida`, `Lugar_destino`, `Precio`, `Linea`) VALUES
(1, 'Oaxaca - Centro', 'Sola de Vega', 85, ''),
(2, 'Oaxaca - Centro', 'Puerto escondido', 245, ''),
(3, 'Oaxaca - Centro', 'Río grande', 265, ''),
(4, 'Oaxaca - Centro', 'Pinotepa', 300, 'Línea Dorada'),
(5, 'Oaxaca - Central de autobuses', 'Sola de Vega', 85, ''),
(6, 'Oaxaca - Central de autobuses', 'Puerto escondido\n', 245, ''),
(7, 'Oaxaca - Central de autobuses', 'Río grande', 265, ''),
(8, 'Oaxaca - Central de autobuses', 'Pinotepa\n', 300, ''),
(9, 'Sola de Vega', 'Oaxaca - Centro', 85, ''),
(10, 'Puerto escondido', 'Oaxaca - Centro', 245, ''),
(11, 'Río grande', 'Oaxaca - Centro', 265, ''),
(12, 'Pinotepa', 'Oaxaca - Centro', 300, 'Línea Dorada'),
(13, 'Sola de Vega', 'Oaxaca - Central de autobuses', 85, ''),
(14, 'Puerto escondido', 'Oaxaca - Central de autobuses', 245, ''),
(15, 'Río grande', 'Oaxaca - Central de autobuses', 265, ''),
(16, 'Pinotepa', 'Oaxaca - Central de autobuses', 300, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

CREATE TABLE `sucursal` (
  `Id_sucursal` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Direccion` varchar(50) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Director` varchar(150) NOT NULL,
  `Unidades` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sucursal`
--

INSERT INTO `sucursal` (`Id_sucursal`, `Nombre`, `Direccion`, `Telefono`, `Director`, `Unidades`) VALUES
(1, 'Solteca-Oaxaca-Centro', 'Oaxaca de Juárez ', '9515181445', 'https://avatars.githubusercontent.com/u/67239474?s=400&u=37d07093d009a8ee9c33fb8a0cbe8f44c8df0f26&v=4', '25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ticket`
--

CREATE TABLE `ticket` (
  `Id_ticket` int(11) NOT NULL,
  `Id_sucursal` int(11) NOT NULL,
  `Ubicación` varchar(250) NOT NULL,
  `Mensaje` varchar(250) NOT NULL,
  `Despedida` varchar(250) NOT NULL,
  `RFC` varchar(25) NOT NULL,
  `Empresa` varchar(50) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Pagina` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ticket`
--

INSERT INTO `ticket` (`Id_ticket`, `Id_sucursal`, `Ubicación`, `Mensaje`, `Despedida`, `RFC`, `Empresa`, `Telefono`, `Pagina`) VALUES
(1, 1, 'Arista N° 116, Colonia Centro, Oaxaca de Juárez, Oaxaca México', 'Cancelaciones y cambios de horariosólo hasta 2 horas antes de la salida y unicamente en la taquilla donde compró su boleto. Una vez cerrada la corrida NO se hacen cambios ni devoluciones. Por favor sea puntual.', 'Se les recuerda tamien que el plazo mázimo para facturar en linea es de 72 horas posteriores a su salida.', 'SCP6904113R7', 'La Solteca', '9515161059', 'http://www.lasolteca.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `user` varchar(50) NOT NULL,
  `pass` varchar(25) NOT NULL,
  `access_token` varchar(50) NOT NULL,
  `tipo` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `pass`, `access_token`, `tipo`) VALUES
(1, 'Rodo', '137946', 'asdfghjklñzxcvbnmqwertyuiop', 'administrador'),
(2, 'JoseA', '137946', '1234567890asdfghjklñ1234567890', 'Vendedor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendidos`
--

CREATE TABLE `vendidos` (
  `Id_carrito` int(11) NOT NULL,
  `Nombre_cliente` varchar(100) NOT NULL,
  `Origen` varchar(50) NOT NULL,
  `Destino` varchar(50) NOT NULL,
  `Tipo` varchar(25) NOT NULL,
  `Escala` varchar(50) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Precio` int(11) NOT NULL,
  `Fecha_salida` date DEFAULT NULL,
  `Hora_salida` time DEFAULT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Asiento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventaPendiente`
--

CREATE TABLE `ventaPendiente` (
  `Id_pendiente` int(11) NOT NULL,
  `Corrida` int(11) NOT NULL,
  `Asiento` int(11) NOT NULL,
  `Estado` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auditoria`
--
ALTER TABLE `auditoria`
  ADD PRIMARY KEY (`Id_auditoria`);

--
-- Indices de la tabla `autobus`
--
ALTER TABLE `autobus`
  ADD PRIMARY KEY (`Id_autobus`);

--
-- Indices de la tabla `boletos`
--
ALTER TABLE `boletos`
  ADD PRIMARY KEY (`Id_boletos`);

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`Id_carrito`),
  ADD KEY `Id_sucursal` (`Id_sucursal`),
  ADD KEY `Id_usuario` (`Id_usuario`);

--
-- Indices de la tabla `choferes`
--
ALTER TABLE `choferes`
  ADD PRIMARY KEY (`Id_chofer`);

--
-- Indices de la tabla `descuentos`
--
ALTER TABLE `descuentos`
  ADD PRIMARY KEY (`Id_descuento`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`Id_usuario`),
  ADD KEY `Sucursal` (`Id_sucursal`);

--
-- Indices de la tabla `escala`
--
ALTER TABLE `escala`
  ADD PRIMARY KEY (`Id_escala`);

--
-- Indices de la tabla `estadisticas`
--
ALTER TABLE `estadisticas`
  ADD PRIMARY KEY (`Id_estadistica`);

--
-- Indices de la tabla `lugares`
--
ALTER TABLE `lugares`
  ADD PRIMARY KEY (`Id_lugar`);

--
-- Indices de la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD PRIMARY KEY (`Id_rutas`);

--
-- Indices de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD PRIMARY KEY (`Id_sucursal`);

--
-- Indices de la tabla `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`Id_ticket`),
  ADD KEY `Id_sucursal` (`Id_sucursal`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vendidos`
--
ALTER TABLE `vendidos`
  ADD PRIMARY KEY (`Id_carrito`);

--
-- Indices de la tabla `ventaPendiente`
--
ALTER TABLE `ventaPendiente`
  ADD PRIMARY KEY (`Id_pendiente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auditoria`
--
ALTER TABLE `auditoria`
  MODIFY `Id_auditoria` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `autobus`
--
ALTER TABLE `autobus`
  MODIFY `Id_autobus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `boletos`
--
ALTER TABLE `boletos`
  MODIFY `Id_boletos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `Id_carrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
--
-- AUTO_INCREMENT de la tabla `choferes`
--
ALTER TABLE `choferes`
  MODIFY `Id_chofer` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `descuentos`
--
ALTER TABLE `descuentos`
  MODIFY `Id_descuento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `Id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de la tabla `escala`
--
ALTER TABLE `escala`
  MODIFY `Id_escala` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `estadisticas`
--
ALTER TABLE `estadisticas`
  MODIFY `Id_estadistica` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `lugares`
--
ALTER TABLE `lugares`
  MODIFY `Id_lugar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `rutas`
--
ALTER TABLE `rutas`
  MODIFY `Id_rutas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  MODIFY `Id_sucursal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `ticket`
--
ALTER TABLE `ticket`
  MODIFY `Id_ticket` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `vendidos`
--
ALTER TABLE `vendidos`
  MODIFY `Id_carrito` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `ventaPendiente`
--
ALTER TABLE `ventaPendiente`
  MODIFY `Id_pendiente` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`Id_sucursal`) REFERENCES `sucursal` (`Id_sucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`Id_sucursal`) REFERENCES `sucursal` (`Id_sucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`Id_sucursal`) REFERENCES `sucursal` (`Id_sucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
