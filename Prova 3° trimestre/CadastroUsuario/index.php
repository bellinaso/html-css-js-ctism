<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=0, initial-scale=1.0">
    <title>Cadastro</title>
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
        }

        .logOn p {
            text-align: left;
        }

        .logOn input {
            width: 100%;
            height: 2rem;
            border: none;
            border-radius: .3rem;
            margin-bottom: 1rem;
            text-align: center;
        }

        .submitBtn {
            color: #fff;
            /* text-shadow: 1px 1px 2px #111; */
            font-size: 16pt;
            background-color: #00cc00;
        }

        .erro {
            color: #ff3333;
        }
    </style>
</head>
<body>
    <section class="logOn">
        <h1 style="">Cadastro de cliente</h1>
        <p>Preencha os campos a seguir:</p>
        <form action="cadastroValidado.php" method="post">
            <h2>Nome</h2>
            <p>Nome:<span class="erro">*</span></p>
            <input type="text" name="firstName" placeholder="Insira seu nome" required>
            <p>Sobrenome:<span class="erro">*</span></p>
            <input type="text" name="lastName" placeholder="Insira seu sobrenome" required>
            <h2>Data de nascimento</h2>
            <p>Dia:<span class="erro">*</span></p>
            <input type="number" name="bornDay" id="bornDay" min="0" max="31" placeholder="Insira o dia do seu nascimento" required>
            <p>Mês:<span class="erro">*</span></p>
            <input type="number" name="bornMonth" id="bornMonth" min="0" max="12" placeholder="Insira o mês do seu nascimento" required>
            <p>Ano:<span class="erro">*</span></p>
            <input type="number" name="bornYear" id="bornYear" min="1900" placeholder="Insira o ano do seu nascimento" required>
            <h2>Email</h2>
            <p>Email:<span class="erro">*</span></p>
            <input type="email" name="userMail" placeholder="email@domain.com" required>
            <input type="submit" value="Enviar" class="submitBtn">
        </form>
    </section>
    <script src="js/script.js"></script>
</body>
</html>