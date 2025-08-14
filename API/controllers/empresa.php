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



if ($method === 'GET') {
    global $conn;

    $result = $conn->query("SELECT ID, Nombre, Descripcion, Logo,Telefono,Email,Ubicacion FROM empresa");

    $empresas = [];

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        if (!empty($row['Logo'])) {
            $row['Logo'] = "data:image/png;base64," . base64_encode($row['Logo']);
        } else {
            $row['Logo'] = null;
        }
        $empresas[] = $row;
    }

    echo json_encode($empresas);
}


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
