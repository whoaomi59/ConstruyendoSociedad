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
    if (!isset($_POST['ID'], $_POST['Nombre'], $_POST['Descripcion'])) {
        echo json_encode(["message" => "Faltan campos obligatorios"]);
        exit;
    }

    $id = $_POST['ID'];
    $nombre = $_POST['Nombre'];
    $descripcion = $_POST['Descripcion'];
    $email = $_POST['Email'] ?? null;
    $telefono = $_POST['Telefono'] ?? null;
    $ubicacion = $_POST['Ubicacion'] ?? null;

    // Si se envía un archivo nuevo para el logo
    if (isset($_FILES['Logo']) && $_FILES['Logo']['error'] === UPLOAD_ERR_OK) {
        $logo = file_get_contents($_FILES['Logo']['tmp_name']);

        $stmt = $conn->prepare("UPDATE empresa 
            SET Nombre = :nombre, 
                Descripcion = :descripcion,
                Email = :email,
                Telefono = :telefono,
                Ubicacion = :ubicacion,
                Logo = :logo
            WHERE ID = :id");

        $stmt->bindParam(":logo", $logo, PDO::PARAM_LOB);
    } else {
        // Si no hay logo nuevo, no actualizamos ese campo
        $stmt = $conn->prepare("UPDATE empresa 
            SET Nombre = :nombre, 
                Descripcion = :descripcion,
                Email = :email,
                Telefono = :telefono,
                Ubicacion = :ubicacion
            WHERE ID = :id");
    }

    $stmt->bindParam(":id", $id, PDO::PARAM_INT);
    $stmt->bindParam(":nombre", $nombre);
    $stmt->bindParam(":descripcion", $descripcion);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":telefono", $telefono);
    $stmt->bindParam(":ubicacion", $ubicacion);

    echo json_encode([
        "message" => $stmt->execute() ? "Empresa actualizada" : "Error al actualizar"
    ]);
}


else {
    echo json_encode(["message" => "Método HTTP no soportado"]);
}
