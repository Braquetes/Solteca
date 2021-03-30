<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Credentials: true');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input');

  $params = json_decode($json);

require "./config/conexion.php";

    mysqli_query($conexion,"INSERT INTO `tm_categoria` (`cat_id`,`cat_nom`, `cat_obs`, `est`) VALUES
                    (NULL,'".$params->cat_nom."','".$params->cat_obs."','".$params->est."')");


  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';

  header('Content-Type: text/html');
  echo json_encode($response);
?>
