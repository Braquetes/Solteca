<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require "../../config/conexion.php";

  mysqli_query($conexion,"UPDATE `carrito` SET `Estado` = '2' WHERE `carrito`.`Id_venta` = $_GET[Id_venta]");

  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'articulo borrado';

  header('Content-Type: application/json');
  echo json_encode($response);
?>
