<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Max-Age: 3600");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once("../config/db.php");

$method = $_SERVER['REQUEST_METHOD'];
$db = new Database();
$conn = $db->connect();

if (!$conn) {
    echo json_encode(["error" => "Conexión no definida"]);
    exit;
}

if ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['contraseña'],$data['ID'])) {
        echo json_encode(["message" => "Faltan campos obligatorios"]);
        exit;
    }


    $id = $data['ID'];
    $contrasena = password_hash($data['contraseña'], PASSWORD_DEFAULT); 

    $stmt = $conn->prepare("
        UPDATE usuarios 
        SET Contraseña = :contrasena 
        WHERE ID = :ID
    ");

    $stmt->bindParam(":contrasena", $contrasena);
    $stmt->bindParam(":ID", $id, PDO::PARAM_INT);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro actualizado!" : "Error al actualizar registro!"
    ]);
}
