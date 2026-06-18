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

//OK
if ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);

     if (!isset($data['ID'], $data['Nombre'], $data['Numero'])) {
        echo json_encode(["message" => "Datos incompletos para actualizar"]);
        exit;
    }

    $nombre = $data['Nombre'];
    $numero = $data['Numero'];
    $id = $data['ID'];

    $stmt = $conn->prepare("
       UPDATE cuentas_bancarias SET Nombre = :Nombre, Numero = :Numero WHERE ID = :ID
    ");

   $stmt->bindParam(":Nombre", $nombre);
    $stmt->bindParam(":Numero", $numero);
    $stmt->bindParam(":ID", $id, PDO::PARAM_INT);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro actualizado!" : "Error al actualizar registro!"
    ]);
}
//OK
elseif ($method === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);

     if (!isset($data['ID'])) {
        echo json_encode(["message" => "Datos incompletos para eliminado"]);
        exit;
    }

    $id = $data['ID'];

    $stmt = $conn->prepare("
      DELETE FROM cuentas_bancarias WHERE ID=:ID
    ");
    $stmt->bindParam(":ID", $id, PDO::PARAM_INT);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro eliminado!" : "Error al eliminado registro!"
    ]);
}
