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

    $stmt = $conn->query("SELECT * FROM voluntario");

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
    if (!isset($_POST['Nombre'], $_POST['Email'])) {
        echo json_encode(["message" => "Faltan campos obligatorios"]);
        exit;
    }

    $Nombre = $_POST['Nombre'];
    $Email = $_POST['Email'];
    $Comentario = $_POST['Comentario'];

    $stmt = $conn->prepare("INSERT INTO voluntario (Nombre, Email, Comentario) VALUES (:Nombre, :Email, :Comentario)");
    $stmt->bindParam(":Nombre", $Nombre);
    $stmt->bindParam(":Email", $Email);
    $stmt->bindParam(":Comentario", $Comentario);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro creado!" : "Error al crear registro!"
    ]);
}


else {
    echo json_encode(["message" => "Método HTTP no soportado"]);
}
