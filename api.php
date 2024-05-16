<?php

    $db_server = "localhost";
    $db_user = "root";
    $db_password = "";
    $db_name = "dayoffdb";
    $conn = "";
    
    try {
        $conn = mysqli_connect($db_server,$db_user,$db_password,$db_name);
    }catch(mysqli_sql_exception) {
        echo "Error DB!";
    }

    // if($conn) {
    //     echo "DB connected";
    // }

    echo "<script>Error</script>";

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: Content-Type');

    $input = json_decode(file_get_contents('php://input'), true);

    $conn->close();
?>