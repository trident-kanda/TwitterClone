<?php
if(!empty($_POST["uid"])){
    $uid = $_POST["uid"];
try {
    $dbh = new PDO('mysql:host=mysql148.phy.lolipop.lan;dbname=LAA1213637-twitter', "LAA1213637", "[password]");
    $sql = 
    "SELECT DISTINCT id,name, body, date
    FROM tweets
    INNER JOIN follow ON tweets.uid = follow.followuid 
	WHERE follow.uid = '".$uid."'
UNION
    SELECT DISTINCT id,name, body, date
	FROM tweets
	WHERE tweets.uid = '".$uid."'
	ORDER BY date DESC
	LIMIT 30";
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

