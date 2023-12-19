<?php 
    require 'db_connection.php';
    $abc = json_decode(file_get_contents("php://input"));

    //print_r($abc);

    if(isset($abc->data->name) && !empty($abc->data->name) && isset($abc->data->email) && !empty($abc->data->email)){

        $name = $abc->data->name;
        $email = $abc->data->email;

        $sql = "INSERT INTO user VALUES(NULL, '$name', '$email', now())";

        $db->query($sql);

        if($db->affected_rows>0){
            echo json_encode(["msg"=>"Successfully Inserted"]);
        }else{
            echo json_encode(["msg"=>"Problem"]);
        }         
    }else {
        echo json_encode(["msg"=>"Empty Not Allowed"]);
    }
    
?>