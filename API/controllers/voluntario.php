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

if ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);

     if (!isset($data['ID'], $data['Nombre'], $data['Email'])) {
        echo json_encode(["message" => "Datos incompletos para actualizar"]);
        exit;
    }

    $nombre = $data['Nombre'];
    $Descripcion = $data['Email'];
    $Etiquetas = $data['Comentario'];
    $id = $data['ID'];

    $stmt = $conn->prepare("
       UPDATE voluntario SET Nombre = :Nombre, Email = :Email,Comentario=:Comentario WHERE ID = :ID
    ");

   $stmt->bindParam(":Nombre", $nombre);
    $stmt->bindParam(":Email", $Descripcion);
    $stmt->bindParam(":Comentario", $Etiquetas);
    $stmt->bindParam(":ID", $id, PDO::PARAM_INT);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro actualizado!" : "Error al actualizar registro!"
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
      DELETE FROM voluntario WHERE ID=:ID
    ");
    $stmt->bindParam(":ID", $id, PDO::PARAM_INT);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro eliminado!" : "Error al eliminado registro!"
    ]);
}
