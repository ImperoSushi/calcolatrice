


<?php
echo "Starting my script" . "<br>";
var_dump($_POST);
if (isset($_POST)) {

    $n1 = $_POST['num1'];
    $n2 = $_POST['num2'];
    $op = $_POST['operator'];

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
            $res = ($n2 != 0) ? $n1 / $n2 : "Errore: divisione per 0"; 
            break;

    }

    echo "<h1>Risultato: " . $res . "</h1>";
    echo '<a href="index.html">Torna indietro</a>';

    }
?>



