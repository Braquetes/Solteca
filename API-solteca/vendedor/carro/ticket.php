<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require "../../config/conexion.php";

$registros=mysqli_query($conexion,"SELECT * FROM `ticket` WHERE `Id_sucursal`= '".$_GET[Id_sucursal]."'");

$vec=[];
while ($reg=mysqli_fetch_array($registros))
{
$vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>
