<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

  require "./config/conexion.php";  // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  // REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($conexion, "SELECT * FROM `usuarios` WHERE `user`='".$params->user."' AND `pass`='".$params->pass."'");
  $access_token = "asd";
  while($row = mysqli_fetch_array($resultado)){
            $access_token = $row['access_token'];
            $tipo = $row['tipo'];
        }


    class Result {}

    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();

    if($resultado->num_rows > 0) {
        $response->resultado = 'OK';
        $response->mensaje = 'Bienvenido';
        $response->access_token = $access_token;
        $response->client = $tipo;
    } else {
        $response->resultado = 'FAIL';
        $response->mensaje = 'Usuario o Contraseña incorrecta';
    }

    header('Content-Type: text/html');

    echo json_encode($response); // MUESTRA EL JSON GENERADO
