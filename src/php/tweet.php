<?php
if(!empty($_POST["body"])){
    $body = $_POST["body"];
    $uid = $_POST["uid"];
    $name = $_POST["name"];
try {
    $dbh = new PDO('mysql:host=localhost;dbname=twitter', "root", "");
    $sql = "INSERT INTO tweets (uid,name,body,date) VALUES ('$uid','$name',$body',now())";
    $res = $dbh->query($sql);
    echo json_encode("OK");
}catch (PDOException $e) {
    echo json_encode("BAD");
    die();
}
$dbh = null;
}