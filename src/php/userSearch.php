<?php
if(!empty($_POST["uid"])){
    $uid = $_POST["uid"];
    $name = $_POST["sarch"];
try {
    $dbh = new PDO('mysql:host=mysql148.phy.lolipop.lan;dbname=LAA1213637-twitter', "LAA1213637", "[password]");
    $sql = "SELECT * FROM users WHERE name LIKE '$name%' and uid <> '$uid' LIMIT 10";
    $res = $dbh->query($sql);
    foreach($res as $value){
        $data[] = $value;
    }
    echo json_encode($data);
}catch (PDOException $e) {
    echo json_encode($e);
    die();
}
$dbh = null;
}