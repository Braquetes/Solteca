<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require "../../config/conexion.php";

$json = file_get_contents('php://input');
$params = json_decode($json);
$vec=[];

$distinto = mysqli_query($conexion, "SELECT DISTINCT Numero_Autobus FROM `carrito` WHERE `Fecha_salida` = '".$params->fecha."' AND `Destino` = '".$params->destino."' AND `Id_sucursal` = '".$params->sucursal."' ");
if($distinto->num_rows > 0) {
  while($row = mysqli_fetch_array($distinto)){
            $numeroAutobus = $row['Numero_Autobus'];
            $count = mysqli_query($conexion,"SELECT * from carrito where Numero_Autobus = '".$numeroAutobus."' LIMIT 1");
            while($rows = mysqli_fetch_array($count)){
              $suma = mysqli_query($conexion,"SELECT SUM(Precio) as P from carrito where Numero_Autobus = '".$numeroAutobus."'");
              while($rosu = mysqli_fetch_array($suma)){
                $rows['Suma'][] = $rosu['P'];
                $cantidad = mysqli_query($conexion,"SELECT COUNT(*) as cantidad from carrito where Numero_Autobus = '".$numeroAutobus."'");
                while($total = mysqli_fetch_array($cantidad)){
                  $rows['Count'][] = $total['cantidad'];
                }
              }
              $vec[]=$rows;
            }
        }
    }

$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>
