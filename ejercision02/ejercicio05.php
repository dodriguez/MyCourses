<?php

if (isset($_GET['numero1']) && isset($_GET['numero2'])) {
    
    $numero1 = $_GET['numero1'];
    $numero2 = $_GET['numero2'];

    for ($i=$numero1; $i <= $numero2 ; $i++) { 
        echo "<h4>$i</h4>";
    }

}else {
    echo "<h1> ingrese numeros</h1>";
}