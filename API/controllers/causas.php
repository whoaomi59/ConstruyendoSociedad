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

else {
    echo json_encode(["message" => "Método HTTP no soportado"]);
}
