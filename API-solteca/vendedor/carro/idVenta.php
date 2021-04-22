<?php

require "../../config/conexion.php";

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$registros=mysqli_query($conexion,"SELECT `Id_venta` FROM `carrito` WHERE `Id_carrito` = 1");

while($row = mysqli_fetch_array($registros)){
          $Id_venta = $row['Id_venta'];
      }

class Result {}

          // GENERA LOS DATOS DE RESPUESTA
$response = new Result();

if($registros->num_rows > 0) {
    $response->resultado = 'OK';
    $response->mensaje = 'Bienvenido';
    $response->Id_venta = $Id_venta;
    mysqli_query($conexion,"UPDATE `carrito` SET `Id_venta` = `Id_venta` + 1 WHERE `carrito`.`Id_carrito` = 1");
} else {
    $response->resultado = 'FAIL';
    $response->mensaje = 'Error';
    $response->Id_venta = 0;
}

header('Content-Type: text/html');

echo json_encode($response); // MUESTRA EL JSON GENERADO
?>
