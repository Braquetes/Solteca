<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require "../../config/conexion.php";

  $delete = mysqli_query($conexion,"DELETE FROM `empleados` WHERE `empleados`.`Id_usuario`= '".$_GET['Id_usuario']."'");

  class Result {}
  $response = new Result();

if ($delete){
  $response->resultado = 'OK';
  $response->mensaje = 'Empleado eliminado';
}else{
  $response->resultado = 'FAIL';
  $response->mensaje = 'No se pudo eliminar';
}
  header('Content-Type: application/json');
  echo json_encode($response);
?>
