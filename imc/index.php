<?php
$estatura = $_POST['estatura'];
$peso = $_POST['peso'];
#$imc = $peso / ($estatura^2);
#echo 'Indice de masa corporal'.$imc ;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IMC</title>
</head>
<body>
<h1>IMC</h1>
    <form action="" method='POST'>
        <h3>Tu estatura en metros</h3>
        <input type="text" placeholder ="ingrese estatura" name='estatura' value="" require><br><br>
        <h3>Tu peso en kg</h3>
        <input type="text" placeholder ="ingrese peso" name='peso' value = "" require><br><br>
        <input type="submit" value="Calcular"><br><br>
    </form>

    <?php
    $estatura = $_POST['estatura'];
    $peso = $_POST['peso'];
    $imc = $peso / ($estatura^2);
    if ($imc < 18.5){
        echo 'Buenas tu IMC es: '.$imc.'<br>';
        echo '<h4> estás bajo de peso</h3>'; 
    }elseif($imc >= 18.5 && $imc <25){
        echo 'Buenas tu IMC es: '.$imc.'<br>';
        echo '<h4> estás normal papi</h3>'; 
    }elseif($imc >= 25 && $imc < 30){
        echo 'Buenas tu IMC es: '.$imc.'<br>';
        echo '<h4> estás con sobrepeso papi</h3>'; 
    }elseif($imc >= 30 && $imc < 40){
        echo 'Buenas tu IMC es: '.$imc.'<br>';
        echo '<h4> estás en obesidad papi</h3>'; 
    }elseif($imc >=  40){
        echo 'Buenas tu IMC es: '.$imc.'<br>';
        echo '<h4> estás en obesidad morbida papi</h3>'; 

    }
    
    ?>

</body>
</html>