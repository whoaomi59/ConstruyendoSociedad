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

    $result = $conn->query("SELECT ID, Nombre, Descripcion, Img FROM causas");

    $empresas = [];

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        if (!empty($row['Img'])) {
            $row['Img'] = "data:image/png;base64," . base64_encode($row['Img']);
        } else {
            $row['Img'] = null;
        }
        $empresas[] = $row;
    }

    echo json_encode($empresas);
}

elseif ($method === 'POST') {

    if (!isset($_POST['Nombre']) || !isset($_FILES['Img'])) {
        echo json_encode(["message" => "Faltan campos obligatorios"]);
        exit;
    } 

    $nombre = $_POST['Nombre'];
    $descripcion = $_POST['Descripcion'];
    $Img = file_get_contents($_FILES['Img']['tmp_name']);

    $stmt = $conn->prepare("INSERT INTO causas (Nombre, Descripcion,Img) VALUES (:Nombre, :Descripcion,:Img)");
    $stmt->bindParam(":Nombre", $nombre);
    $stmt->bindParam(":Descripcion", $descripcion);
    $stmt->bindParam(":Img", $Img, PDO::PARAM_LOB);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro creado!" : "Error al crear"
    ]);
}

elseif ($method === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);

     if (!isset($data['ID'])) {
        echo json_encode(["message" => "Datos incompletos para eliminado"]);
        exit;
    }

    $id = $data['ID'];

    $stmt = $conn->prepare("
      DELETE FROM causas WHERE ID=:ID
    ");
    $stmt->bindParam(":ID", $id, PDO::PARAM_INT);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro eliminado!" : "Error al eliminado registro!"
    ]);
}
