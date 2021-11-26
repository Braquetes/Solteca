<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require "../../config/conexion.php";
$vec=[];

$registro=mysqli_query($conexion,"SELECT DISTINCT `Numero_Autobus` FROM `carrito` WHERE `Id_carrito` = $_GET[Id_carrito]");

  while ($reg=mysqli_fetch_array($registro)){
    $numeroAutobus = $reg['Numero_Autobus'];
    $registros=mysqli_query($conexion,"SELECT * FROM `carrito` WHERE `Numero_Autobus` = '".$numeroAutobus."' ORDER BY Asiento");
    while ($row=mysqli_fetch_array($registros)){
      $cantidad = mysqli_query($conexion,"SELECT COUNT(*) as cantidad from carrito where Numero_Autobus = '".$numeroAutobus."'");
      while($total = mysqli_fetch_array($cantidad)){
        $row['Count'][] = $total['cantidad'];
      }
        $vec[]=$row;
    }
  }

$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>
