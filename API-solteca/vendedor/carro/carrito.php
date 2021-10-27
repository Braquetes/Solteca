<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);
$response = new Result();
class Result {}

require "../../config/conexion.php";

$resultado = mysqli_query($conexion, "SELECT * FROM `carrito` WHERE `Origen`= '".$params->Origen."' AND `Destino` = '".$params->Destino."' AND `Fecha_salida` = '".$params->Fecha_salida."' AND `Hora_salida` = '".$params->Hora_salida."' AND `Asiento` = '".$params->Asiento."' ");
if($resultado->num_rows > 0) {
  while($row = mysqli_fetch_array($resultado)){
            $estado = $row['Estado'];
        }
  if($estado == 1){
    $response->resultado = 'FAIL';
    $response->mensaje = 'Pendiente';
  } else {
    $response->resultado = 'FAIL';
    $response->mensaje = 'Vendido';
  }
} else {
mysqli_query($conexion,"INSERT INTO `carrito` (`Id_carrito`, `Nombre_cliente`, `Origen`, `Destino`, `Tipo`, `Escala`, `Precio`, `Fecha_salida`, `Hora_salida`, `Telefono`, `Asiento`, `Id_venta`,`Estado`,`Id_autobus`, `Id_sucursal`, `Referencia`) VALUES
(NULL,'".$params->Nombre_cliente."','".$params->Origen."','".$params->Destino."','".$params->Tipo."', '".$params->Escala."', '".$params->Precio."','".$params->Fecha_salida."', '".$params->Hora_salida."','".$params->Telefono."','".$params->Asiento."','".$params->Id_venta."',
'".$params->Estado."','".$params->Id_autobus."','".$params->Id_sucursal."','".$params->Referencia."');");
$response->resultado = 'OK';
$response->mensaje = 'datos grabados';
}

header('Content-Type: text/html');
echo json_encode($response);
?>
