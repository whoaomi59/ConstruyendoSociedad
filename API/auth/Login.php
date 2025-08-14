<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

require_once("../config/db.php");
require __DIR__ . '/../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$db = new Database();
$conn = $db->connect(); // Esto debe devolver un objeto PDO

$secret_key = "secreto_super_seguro";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo     = $_POST["correo"] ?? '';
    $contraseña = $_POST["contraseña"] ?? '';

    $sql = "SELECT ID, Nombre, Correo, Contraseña, Rol FROM usuarios WHERE Correo = :correo";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":correo", $correo, PDO::PARAM_STR);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row) {
        if (password_verify($contraseña, $row["Contraseña"])) {
            $payload = [
                "id"     => $row["ID"],
                "nombre" => $row["Nombre"],
                "email"  => $row["Correo"],
                "rol"    => $row["Rol"],
                "exp"    => time() + (60 * 60) // 1 hora
            ];

            $jwt = JWT::encode($payload, $secret_key, 'HS256');
            echo json_encode(["token" => $jwt]);
        } else {
            echo json_encode(["error" => "Contraseña incorrecta"]);
        }
    } else {
        echo json_encode(["error" => "Usuario no encontrado"]);
    }
}
