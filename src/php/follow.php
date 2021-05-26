<?php
if(!empty($_POST["uid"])){
    $uid = $_POST["uid"];
    $followuid = $_POST["followuid"];
try {
    $dbh = new PDO('mysql:host=mysql148.phy.lolipop.lan;dbname=LAA1213637-twitter', "LAA1213637", "[password]");
    $sql = "INSERT INTO follow (uid,followuid) VALUES ('$uid','$followuid')";
    $res = $dbh->query($sql);
    echo json_encode("OK");
}catch (PDOException $e) {
    echo json_encode($e);
    die();
}
$dbh = null;
}