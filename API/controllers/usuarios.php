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

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    global $conn;

    $stmt = $conn->query("SELECT * FROM usuarios");

    if ($stmt) {
        $data = [];

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }
        echo json_encode($data);
    } else {
        echo json_encode([
            'error' => true,
            'message' => 'Error en la consulta.'
        ]);
    }
}


if ($method === 'POST') {
    if (!isset($_POST['Nombre'], $_POST['Correo'], $_POST['Rol'])) {
        echo json_encode(["message" => "Faltan campos obligatorios"]);
        exit;
    }

    $nombre = $_POST['Nombre'];
    $correo = $_POST['Correo'];
    $rol = $_POST['Rol'];
   /*  $contrasena = password_hash($_POST['contraseña'], PASSWORD_DEFAULT); */

    $stmt = $conn->prepare("
        INSERT INTO usuarios (Nombre, Correo, Rol) 
        VALUES (:Nombre, :Correo, :Rol)
    ");

    $stmt->bindParam(":Nombre", $nombre);
    $stmt->bindParam(":Correo", $correo);
    $stmt->bindParam(":Rol", $rol);
  /*   $stmt->bindParam(":contrasena", $contrasena); */

    echo json_encode([
        "message" => $stmt->execute() ? "Registro creado!" : "Error al crear registro!"
    ]);
}


if ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['Nombre'], $data['Correo'], $data['Rol'], $data['ID'])) {
        echo json_encode(["message" => "Faltan campos obligatorios"]);
        exit;
    }

    $nombre = $data['Nombre'];
    $correo = $data['Correo'];
    $id = $data['ID'];
    $rol = $data['Rol'];

    $stmt = $conn->prepare("
        UPDATE usuarios 
        SET Nombre = :Nombre, Correo = :Correo, Rol = :Rol 
        WHERE ID = :ID
    ");

    $stmt->bindParam(":Nombre", $nombre);
    $stmt->bindParam(":Correo", $correo);
    $stmt->bindParam(":Rol", $rol);
    $stmt->bindParam(":ID", $id, PDO::PARAM_INT);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro actualizado!" : "Error al actualizar registro!"
    ]);
}
