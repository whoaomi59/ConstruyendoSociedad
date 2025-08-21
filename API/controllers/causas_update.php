<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Max-Age: 3600");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header("Content-Type: application/json");
require_once("../config/db.php");



$method = $_SERVER['REQUEST_METHOD'];
$db = new Database();
$conn = $db->connect();


if (!isset($conn)) {
    echo json_encode(["error" => "Conexión no definida"]);
    exit;
}


elseif ($method === 'POST') {
    if (!isset($_POST['ID'], $_POST['Nombre'])) {
        echo json_encode(["message" => "Faltan campos obligatorios"]);
        exit;
    }

    $id = $_POST['ID'];
    $nombre = $_POST['Nombre'];
    $descripcion = $_POST['Descripcion'];

    if (isset($_FILES['Img']) && $_FILES['Img']['error'] === UPLOAD_ERR_OK) {
        $logo = file_get_contents($_FILES['Img']['tmp_name']);

        $stmt = $conn->prepare("UPDATE causas 
            SET Nombre = :nombre, 
                Descripcion = :descripcion,
                Img = :Img
            WHERE ID = :id");

        $stmt->bindParam(":Img", $logo, PDO::PARAM_LOB);
    } else {
        $stmt = $conn->prepare("UPDATE causas 
            SET Nombre = :nombre, 
                Descripcion = :descripcion
            WHERE ID = :id");
    }

    $stmt->bindParam(":id", $id, PDO::PARAM_INT);
    $stmt->bindParam(":nombre", $nombre);
    $stmt->bindParam(":descripcion", $descripcion);

    echo json_encode([
        "message" => $stmt->execute() ? "Causa actualizada" : "Error al actualizar"
    ]);
}


else {
    echo json_encode(["message" => "Método HTTP no soportado"]);
}
