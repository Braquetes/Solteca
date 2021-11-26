<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require "../../config/conexion.php";

$json = file_get_contents('php://input');
$params = json_decode($json);
$vec=[];

$row = mysqli_query($conexion, "SELECT * FROM `carrito` WHERE `Fecha_salida` BETWEEN '".$params->fechaInicio."' AND
'".$params->fechaFinal."' AND `Id_sucursal` = '".$params->sucursal."' AND `Id_usuario` = '".$params->idEmpleado."'");
if($row->num_rows > 0) {
  while($rows = mysqli_fetch_array($row)){
    $suma = mysqli_query($conexion,"SELECT SUM(Precio) as P from carrito where `Fecha_salida` BETWEEN '".$params->fechaInicio."' AND
    '".$params->fechaFinal."' AND `Id_sucursal` = '".$params->sucursal."' AND `Id_usuario` = '".$params->idEmpleado."'");
    while($rosu = mysqli_fetch_array($suma)){
          $rows['Suma'][] = $rosu['P'];
          $cantidad = mysqli_query($conexion,"SELECT COUNT(*) as cantidad from carrito where `Fecha_salida` BETWEEN '".$params->fechaInicio."' AND
          '".$params->fechaFinal."' AND `Id_sucursal` = '".$params->sucursal."' AND `Id_usuario` = '".$params->idEmpleado."'");
          while($total = mysqli_fetch_array($cantidad)){
                $rows['Count'][] = $total['cantidad'];
                $vec[]=$rows;
              }
          }
      }
  }

$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>
