<?php
if(!empty($_POST["uid"])){
    $uid = $_POST["uid"];
try {
    $dbh = new PDO('mysql:host=mysql148.phy.lolipop.lan;dbname=LAA1213637-twitter', "LAA1213637", "pass");
    $sql = "SELECT  follow.uid, name FROM follow LEFT JOIN users ON follow.uid = users.uid WHERE follow.followuid = '".$uid."'";
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

