<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Credentials: true');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input');

  $params = json_decode($json);

  require "./config/conexion.php";

  mysqli_query($conexion,"UPDATE `tm_categoria` SET
  `cat_nom` = '".$params->cat_nom."',
  `cat_obs` = '".$params->cat_obs."',
  `est` = '".$params->est."' WHERE `tm_categoria`.`cat_id` =".$params->cat_id);

class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: text/html');
echo json_encode($response);
?>
