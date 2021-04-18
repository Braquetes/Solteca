<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Credentials: true');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input');

  $params = json_decode($json);

    require "../config/conexion.php";

    $registros = mysqli_query($conexion,"SELECT * FROM `ventaPendiente` WHERE `Id_pendiente` = '".$params->Id_pendiente."'");

    if ($reg=mysqli_fetch_array($registros)){
      mysqli_query($conexion,"UPDATE `ventaPendiente` SET `Estado` = '".$params->Estado."' WHERE `ventaPendiente`.`Id_pendiente` = '".$params->Id_pendiente."'");
    }else {
      mysqli_query($conexion,"INSERT INTO `ventaPendiente` (`Id_pendiente`, `Corrida`, `Asiento`, `Estado`) VALUES
                    (NULL,'".$params->Corrida."','".$params->Asiento."','".$params->Estado."')");
          }

  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';

  header('Content-Type: text/html');
  echo json_encode($response);
?>
