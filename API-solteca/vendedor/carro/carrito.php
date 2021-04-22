<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require "../../config/conexion.php";

mysqli_query($conexion,"INSERT INTO `carrito` (`Id_carrito`, `Nombre_cliente`, `Origen`, `Destino`, `Tipo`, `Escala`, `Precio`, `Fecha_salida`, `Hora_salida`, `Telefono`, `Asiento`, `Id_venta`,`Estado`,`Id_autobus`, `Id_sucursal`, `Referencia`) VALUES
(NULL,'".$params->Nombre_cliente."','".$params->Origen."','".$params->Destino."','".$params->Tipo."', '".$params->Escala."', '".$params->Precio."','".$params->Fecha_salida."', '".$params->Hora_salida."','".$params->Telefono."','".$params->Asiento."','".$params->Id_venta."',
'".$params->Estado."','".$params->Id_autobus."','".$params->Id_sucursal."','".$params->Referencia."');");

class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos grabados';

    header('Content-Type: text/html');
echo json_encode($response);
?>
