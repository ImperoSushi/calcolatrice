


<?php
    //echo "Starting my script" . "<br>";


    if (isset($_POST)) {


        $n1 = $_POST['num1'];
        $n2 = $_POST['num2'];
        $op = $_POST['operator'];
        
        $res = null;
        
        //var_dump($_POST);

        switch ($op) {

            case 'add': 
                $res = $n1 + $n2; 
                break;

            case 'sub': 
                $res = $n1 - $n2; 
                break;

            case 'mul': 
                $res = $n1 * $n2; 
                break;

            case 'div': 
                $res = ($n2 != 0) ? $n1 / $n2 : "divisione per 0"; 
                break;

            default:
                echo "Operazione non valida";
            
            exit;

        }
        
        header("Content-Type: application/json");
        echo json_encode(["res" => $res]);
        //var_dump($res);
        
        }
?>



