<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require "../config/conexion.php";

$registros=mysqli_query($conexion,"SELECT DISTINCT Numero_Autobus, Fecha_salida,
  Hora_salida, Origen, Destino, if(Hora_salida > DATE_SUB(NOW(),INTERVAL 6 hour), '1', '1') as Status FROM carrito WHERE Numero_Autobus > 0 AND Fecha_salida
  BETWEEN DATE_ADD(curdate(), INTERVAL -1 minute) AND DATE_ADD(curdate(), INTERVAL 7 day) ORDER BY Fecha_salida");

$vec=[];
while ($reg=mysqli_fetch_array($registros))
{
$vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>
