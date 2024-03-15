<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resposta do formulario</title>
</head>
<body>
    <?php
        if($_POST) {
            echo("Nome: ".$_POST["nome"]."<br>");
            echo("Email: ".$_POST["email"]."<br>");
            echo("Sexo: ".$_POST["gender"]."<br>");
            echo("Estado civil: ".$_POST["status"]."<br>");
        }
    ?>
</body>
</html>