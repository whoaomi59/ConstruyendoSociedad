<?php
header("Content-Type: application/json");
require_once("../config/db.php");

$method = $_SERVER['REQUEST_METHOD'];
$db = new Database();
$conn = $db->connect();


if (!isset($conn)) {
    echo json_encode(["error" => "Conexión no definida"]);
    exit;
}

// GET: Obtener todas las empresas
if ($method === 'GET') {
    $stmt = $conn->prepare("SELECT ID, Nombre, Descripcion, TO_BASE64(Logo) AS Logo FROM empresa");
    $stmt->execute();
    $empresas = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($empresas);
}

// POST: Crear nueva empresa
elseif ($method === 'POST') {
    if (!isset($_POST['Nombre'], $_POST['Descripcion']) || !isset($_FILES['Logo'])) {
        echo json_encode(["message" => "Faltan campos obligatorios"]);
        exit;
    }

    $nombre = $_POST['Nombre'];
    $descripcion = $_POST['Descripcion'];
    $logo = file_get_contents($_FILES['Logo']['tmp_name']);

    $stmt = $conn->prepare("INSERT INTO empresa (Nombre, Descripcion, Logo) VALUES (:nombre, :descripcion, :logo)");
    $stmt->bindParam(":nombre", $nombre);
    $stmt->bindParam(":descripcion", $descripcion);
    $stmt->bindParam(":logo", $logo, PDO::PARAM_LOB);

    echo json_encode([
        "message" => $stmt->execute() ? "Empresa creada" : "Error al crear"
    ]);
}

// PUT: Actualizar empresa
elseif ($method === 'PUT') {
    parse_str(file_get_contents("php://input"), $put);

    if (!isset($put['ID'], $put['Nombre'], $put['Descripcion'])) {
        echo json_encode(["message" => "Datos incompletos para actualizar"]);
        exit;
    }

    $stmt = $conn->prepare("UPDATE empresa SET Nombre = :nombre, Descripcion = :descripcion WHERE ID = :id");
    $stmt->bindParam(":nombre", $put['Nombre']);
    $stmt->bindParam(":descripcion", $put['Descripcion']);
    $stmt->bindParam(":id", $put['ID']);

    echo json_encode([
        "message" => $stmt->execute() ? "Empresa actualizada" : "Error al actualizar"
    ]);
}

// DELETE: Eliminar empresa
elseif ($method === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"));

    if (!isset($data->ID)) {
        echo json_encode(["message" => "ID requerido"]);
        exit;
    }

    $stmt = $conn->prepare("DELETE FROM empresa WHERE ID = :id");
    $stmt->bindParam(":id", $data->ID);

    echo json_encode([
        "message" => $stmt->execute() ? "Empresa eliminada" : "Error al eliminar"
    ]);
}

// Otro método no soportado
else {
    echo json_encode(["message" => "Método HTTP no soportado"]);
}
