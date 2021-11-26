<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");

$json = file_get_contents('php://input');
$params = json_decode($json);

require "../../config/conexion.php";

$response = new Result();
class Result {}

  $res = mysqli_query($conexion, "SELECT * FROM `empleados` WHERE `Usuario`='".$params->Usuario."'");
  if($res->num_rows > 0) {
    $response->resultado = 'FAIL';
    $response->mensaje = 'Usuario existente';
  }else{

$Pass_Encrytp = password_hash($params->Pass, PASSWORD_DEFAULT);

$resultado = mysqli_query($conexion,"INSERT INTO `empleados` (`Id_usuario`, `Nombre`, `Apellido_paterno`, `Apellido_materno`, `Sexo`,
  `Usuario`, `Pass`, `Cargo`, `Id_sucursal`, `Telefono`, `access_token`) VALUES
  (NULL, '".$params->Nombre."', '".$params->Apellido_paterno."', '".$params->Apellido_materno."', '".$params->Sexo."', '".$params->Usuario."',
  '".$Pass_Encrytp."', '".$params->Cargo."', '".$params->Id_sucursal."', '".$params->Telefono."', 'actualizar');");

  if($resultado){
    $response->resultado = 'OK';
    $response->mensaje = 'datos grabados';
  } else {
    $response->resultado = 'FAIL';
    $response->mensaje = 'No se pudo registrar';
  }

}
header('Content-Type: text/html');
echo json_encode($response);
?>
