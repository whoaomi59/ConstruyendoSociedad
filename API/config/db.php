<?php
class Database {
    private $host = "15.235.82.117";
    private $db_name = "sociefunda_bd";
    private $username = "sociefunda_admin";
    private $password = "JfbzOPpC3~ozLd^K";
    public $conn;

    public function connect() {
        $this->conn = null;
        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username, $this->password
            );
            $this->conn->exec("set names utf8");
        } catch(PDOException $e) {
            echo "Connection error: " . $e->getMessage();
        }
        return $this->conn;
    }
}
