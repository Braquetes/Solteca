<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

  require "./config/conexion.php";  // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  // REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($conexion, "SELECT * FROM `empleados` WHERE `usuario`='".$params->user."'");
  while($row = mysqli_fetch_array($resultado)){
            $cargo = $row['Cargo'];
            $nombre = $row['Nombre'];
            $sucursal = $row['Id_sucursal'];
            $pass = $row['Pass'];
            $id = $row['Id_usuario'];
        }


    class Result {}

    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();

    if(($resultado->num_rows > 0) && (password_verify($params->pass,$pass))) {
      $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyz';
      $random = substr(str_shuffle($permitted_chars), 0, 15);
      $Pass_Encrytp = password_hash($params->passNew, PASSWORD_DEFAULT);
      $resultado = mysqli_query($conexion, "UPDATE `empleados` SET `access_token` = '".$random."',`Pass` = '".$Pass_Encrytp."' WHERE `Id_usuario`='".$id."'");
        $response->resultado = 'OK';
        $response->mensaje = 'Bienvenido';
        $response->access_token = $random;
        $response->client = $cargo;
        $response->cargo = $cargo;
        $response->sucursal = $sucursal;
        $response->nombre = $nombre;
        $response->id = $id;
    } else {
        $response->resultado = 'FAIL';
        $response->mensaje = 'Datos incorrectos';
    }

    header('Content-Type: text/html');

    echo json_encode($response); // MUESTRA EL JSON GENERADO
?>
