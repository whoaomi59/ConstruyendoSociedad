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

//OK
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    global $conn;

    $stmt = $conn->query("SELECT * FROM sociefunda_bd.noticias order by ID desc");

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
    if (!isset($_POST['Nombre'], $_POST['Descripcion'])) {
        echo json_encode(["message" => "Faltan campos obligatorios"]);
        exit;
    }

    $Nombre = $_POST['Nombre'];
    $Descripcion = $_POST['Descripcion'];
    $Etiquetas = $_POST['Etiquetas'];
    $Usuario = $_POST['Usuario'];

    $stmt = $conn->prepare("INSERT INTO noticias (Nombre, Descripcion, Etiquetas,Usuario) VALUES (:Nombre, :Descripcion, :Etiquetas,:Usuario)");
    $stmt->bindParam(":Nombre", $Nombre);
    $stmt->bindParam(":Descripcion", $Descripcion);
    $stmt->bindParam(":Etiquetas", $Etiquetas);
    $stmt->bindParam(":Usuario", $Usuario);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro creado!" : "Error al crear registro!"
    ]);
}

if ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);

     if (!isset($data['ID'], $data['Nombre'], $data['Descripcion'])) {
        echo json_encode(["message" => "Datos incompletos para actualizar"]);
        exit;
    }

    $nombre = $data['Nombre'];
    $Descripcion = $data['Descripcion'];
    $Etiquetas = $data['Etiquetas'];
    $id = $data['ID'];

    $stmt = $conn->prepare("
       UPDATE noticias SET Nombre = :Nombre, Descripcion = :Descripcion,Etiquetas=:Etiquetas WHERE ID = :ID
    ");

   $stmt->bindParam(":Nombre", $nombre);
    $stmt->bindParam(":Descripcion", $Descripcion);
    $stmt->bindParam(":Etiquetas", $Etiquetas);
    $stmt->bindParam(":ID", $id, PDO::PARAM_INT);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro actualizado!" : "Error al actualizar registro!"
    ]);
}
