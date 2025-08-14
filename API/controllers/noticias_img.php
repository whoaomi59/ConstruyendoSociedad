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

    $id = isset($_GET['id']) ? intval($_GET['id']) : null;

    if ($id) {
        $stmt = $conn->prepare("SELECT ID, Img, Estado, noticia_id FROM noticias_img WHERE noticia_id = :id");
        $stmt->bindParam(":id", $id, PDO::PARAM_INT);
        $stmt->execute();
    } else {
        $stmt = $conn->query("SELECT ID, Img, Estado, noticia_id FROM noticias_img");
    }

    $empresas = [];

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
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

    if (!isset($_POST['noticia_id']) || !isset($_FILES['Img'])) {
        echo json_encode(["message" => "Faltan campos obligatorios"]);
        exit;
    } 

    $noticia_id = $_POST['noticia_id'];
    $Img = file_get_contents($_FILES['Img']['tmp_name']);

    $stmt = $conn->prepare("INSERT INTO noticias_img (Img, noticia_id) VALUES (:Img, :noticia_id)");
    $stmt->bindParam(":noticia_id", $noticia_id);
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
      DELETE FROM noticias_img WHERE ID=:ID
    ");
    $stmt->bindParam(":ID", $id, PDO::PARAM_INT);

    echo json_encode([
        "message" => $stmt->execute() ? "Registro eliminado!" : "Error al eliminado registro!"
    ]);
}
