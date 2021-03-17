create database solteca_proof;

use solteca_proof;

create table empleados (
    Id_usuario int (11) PRIMARY KEY AUTO_INCREMENT,
    Nombre varchar (50) NOT NULL,
    Apellido_paterno varchar (25) NOT NULL,
    Apellido_materno varchar (25) NOT NULL,
    Sexo varchar (15) NOT NULL,
    Usuario varchar (25) NOT NULL,
    Contraseña varchar (20) NOT NULL,
    Cargo varchar (50) NOT NULL,
    Sucursal varchar (50) NOT NULL,
    Telefono varchar (10)  NOT NULL
);

create table sucursal (
    Id_sucursal int (11) PRIMARY KEY AUTO_INCREMENT,
    Lugar varchar (50) NOT NULL
);

create table boletos (
    Id_boletos int (11) PRIMARY KEY AUTO_INCREMENT,
    Tipo varchar (25) NOT NULL,
    Precio int (11) not null
);

create table descuentos (
    Id_descuento int (11) PRIMARY KEY AUTO_INCREMENT,
    Tipo varchar (25) NOT NULL,
    Descuento int (11) NOT NULL,
);

create table rutas (
    Id_rutas int (11) NOT NULL,
    Lugar_salida varchar (25) NOT NULL,
    Lugar__destino varchar (25) NOT NULL,
);

create table carrito (
    Id_carrito int (11) PRIMARY KEY AUTO_INCREMENT,
    Nombre_cliente varchar (100) NOT NULL,
    Origen varchar (50) NOT NULL,
    Destino varchar (50) NOT NULL,
    Tipo varchar (25) NOT NULL,
    Escala? varchar (50) NOT NULL,
    Cantidad int (11) NOT NULL,
    Precio int (11) NOT NULL,
    Fecha_salida date,
    Hora_salida time,
    Telefono varchar (10) NOT NULL,
    Asiento int (11) NOT NULL
);

create table ventaPendiente(
    Id_pendiente int (11) PRIMARY KEY AUTO_INCREMENT,
    Corrida int (11) NOT NULL,
    Asiento int (11) NOT NULL,
    Estado int (5) NOT NULL
); 

create table vendidos(
    Id_carrito int (11) PRIMARY KEY AUTO_INCREMENT,
    Nombre_cliente varchar (100) NOT NULL,
    Origen varchar (50) NOT NULL,
    Destino varchar (50) NOT NULL,
    Tipo varchar (25) NOT NULL,
    Escala? varchar (50) NOT NULL,
    Cantidad int (11) NOT NULL,
    Precio int (11) NOT NULL,
    Fecha_salida date,
    Hora_salida time,
    Telefono varchar (10) NOT NULL,
    Asiento int (11) NOT NULL
);

create table estadisticas(
    Id_estadistica int (11) PRIMARY KEY AUTO_INCREMENT,
    Sucursal int (11) NOT NULL,
    Fecha_incio date,
    Fecha_fin date,
    Ruta varchar (35) NOT NULL,
    Cantidad int (11) NOT NULL,
    Vendedor varchar (30) NOT NULL,
    Total int (11) NOT NULL
);

create table ticket(
    Id_ticket int (11) PRIMARY KEY AUTO_INCREMENT,
    Sucursal varchar (30) NOT NULL,
    Horario time,
    Ubicación varchar (250) NOT NULL,
    Mensaje varchar (250) NOT NULL,
    Despedida varchar (250) NOT NULL 
);

create table factura(

);

create table choferes(
    Id_chofer int (11) PRIMARY KEY AUTO_INCREMENT,
    Nombre varchar (50) NOT NULL,
    Apellido_paterno varchar (25) NOT NULL,
    Apellido_paterno varchar (25) NOT NULL,
    Sucursal varchar (30) NOT NULL,
    Autobus varchar (25) NOT NULL
);

create table lugares(
    Id_lugar int (11) PRIMARY KEY AUTO_INCREMENT,
    Lugar varchar (50) NOT NULL,
);

create table auditoria(
    Id_auditoria int (11) PRIMARY KEY AUTO_INCREMENT,
    Accion varchar (50) NOT NULL,
    Empleado varchar (50) NOT NULL,
    
);

Nombre del cliente (Variable: Nombre), Apellido p. (Variable: Apellido_paterno), Apellido m. (Variable: Apellido_materno), sexo (Variable: Sexo), Usuario