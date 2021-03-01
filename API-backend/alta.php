<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Credentials: true');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input');

  $params = json_decode($json);

  $usr = "ngProof_root"; //Usuario de la base de datos
  $pw = "RB137946"; // Contraseña de la base de datos
  $db = "ngProof_ng_server"; //Nombre de la base de datos
  $host = "54.233.121.104"; //Ip del servidor


  //Modelo Try - catch para la conexión

  try {
    $conexion = new mysqli($host, $usr, $pw, $db); //Las variables conexión sera la utilizada para llamar a la base de datos
    $conexion->set_charset("utf8"); //Debemos poner los caracteres UTF-8 para que reconozca los acentos y otros caracteres
    if ($conexion->connect_errno) { //Si los parametros que recibió no fueron correctos enviará el mensaje de error
        die("La conexión ha fallado" . $conexion->connect_errno);
    }
  } catch (mysqli_sql_exception $e) {
    throw $e; // Al no poder conectar con la base de datos, no dira cual es el error y en donde se encuentra
  }


    mysqli_query($conexion,"INSERT INTO `tm_categoria` (`cat_id`,`cat_nom`, `cat_obs`, `est`) VALUES
                    (NULL,'".$params->cat_nom."','".$params->cat_obs."','".$params->est."')");


  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';

  header('Content-Type: text/html');
  echo json_encode($response);
?>
