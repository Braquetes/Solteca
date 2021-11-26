<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

  require "./config/conexion.php";  // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  // REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($conexion, "SELECT * FROM `empleados` WHERE `usuario`='".$params->user."' AND `Id_sucursal`='".$params->option."'");
  $access_token = "asd";
  while($row = mysqli_fetch_array($resultado)){
            $access_token = $row['access_token'];
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
        $response->resultado = 'OK';
        $response->mensaje = 'Bienvenido';
        $response->access_token = $access_token;
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
