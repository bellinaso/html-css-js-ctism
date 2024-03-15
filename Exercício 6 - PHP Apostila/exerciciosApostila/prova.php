<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado da prova</title>
</head>
<body>
    <?php
        if($_POST) {
            $nota1 = $_POST["nota1"];
            $nota2 = $_POST["nota2"];
            $nota3 = $_POST["nota3"];

            $media = ($nota1 + $nota2 + $nota3)/3;

            if($media > $_POST["cargo"]) {
                echo("Você foi aprovado");
            }
            else {
                echo("Infelizmente você não foi aprovado. :/");
            }
        }
    ?>
</body>
</html>