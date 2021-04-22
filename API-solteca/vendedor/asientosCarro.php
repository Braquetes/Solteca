<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require "../config/conexion.php";

$registros=mysqli_query($conexion,"SELECT * FROM `carrito` WHERE `Origen`= '".$_GET[origen]."' AND `Destino` = '".$_GET[destino]."' AND `Fecha_salida` = '".$_GET[fechaSalida]."'AND `Hora_salida` = '".$_GET[horaSalida]."' AND `Id_venta` = '".$_GET[Id_venta]."'");

$vec=[];
while ($reg=mysqli_fetch_array($registros))
{
$vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>
