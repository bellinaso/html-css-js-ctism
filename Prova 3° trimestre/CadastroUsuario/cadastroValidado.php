<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bem vindo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        body {
            height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .logOn {
            min-width: 20%;
            padding: 2rem;
            border-radius: .7rem;
            background-color: #424242;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: #f2f2f2;
        }
        .logOn h1, h2 {
            color: #3366ff;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <section class="logOn">
        <h1>Cadastro relizado</h1>
        <h2>Seja bem vindo!</h2>
        <?php
            if($_POST) {
                echo('<p>Nome: '.$_POST["firstName"]." ".$_POST["lastName"]."</p>");
                echo("<p>Data de nascimento: ".$_POST["bornDay"]."/".$_POST["bornMonth"]."/".$_POST["bornYear"]."</p>");
                echo('<p style="color: #ff3333;">Email: '.$_POST["userMail"]."</p>");
            }
        ?>
    </section>
</body>
</html>