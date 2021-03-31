<?php
if(!empty($_POST["uid"])){
    $uid = $_POST["uid"];
    $name = $_POST["name"];
try {
    $dbh = new PDO('mysql:host=localhost;dbname=test', "", "");
    $sql = "INSERT INTO users (uid,name) VALUES ('$uid','$name')";
    $res = $dbh->query($sql);
    echo json_encode("OK");
}catch (PDOException $e) {
    echo json_encode("BAD");
    die();
}
$dbh = null;
}