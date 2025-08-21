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


if (!isset($conn)) {
    echo json_encode(["error" => "Conexión no definida"]);
    exit;
}
//OK
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    global $conn;

    $stmt = $conn->query("SELECT * FROM cuentas_bancarias ORDER BY ID DESC");

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

//OK
elseif ($method === 'POST') {
    if (!isset($_POST['Nombre'], $_POST['Numero'])) {
        echo json_encode(["message" => "Faltan campos obligatorios"]);
        exit;
    }

    $nombre = $_POST['Nombre'];
    $numero = $_POST['Numero'];

    $stmt = $conn->prepare("INSERT INTO cuentas_bancarias (Nombre, Numero) VALUES (:nombre, :numero)");
    $stmt->bindParam(":nombre", $nombre);
    $stmt->bindParam(":numero", $numero);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro creado!" : "Error al crear registro!"
    ]);
}
