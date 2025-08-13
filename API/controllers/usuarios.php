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

if ($method === 'POST') {
    if (!isset($_POST['nombre'], $_POST['correo'], $_POST['rol'], $_POST['contraseña'])) {
        echo json_encode(["message" => "Faltan campos obligatorios"]);
        exit;
    }

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $rol = $_POST['rol'];
    $contrasena = password_hash($_POST['contraseña'], PASSWORD_DEFAULT); // Sin ñ en la variable

    $stmt = $conn->prepare("
        INSERT INTO usuarios (Nombre, Correo, Rol, Contraseña) 
        VALUES (:nombre, :correo, :rol, :contrasena)
    ");

    $stmt->bindParam(":nombre", $nombre);
    $stmt->bindParam(":correo", $correo);
    $stmt->bindParam(":rol", $rol);
    $stmt->bindParam(":contrasena", $contrasena);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro creado!" : "Error al crear registro!"
    ]);
} else {
    echo json_encode(["message" => "Método HTTP no soportado"]);
}
