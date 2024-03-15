<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercícios</title>
</head>
<body>
    <h1>Exercício 1</h1>
    <p>
    PHP 3:
    Ano de lançamento: 1998.
    Principais Características:
    Introdução de suporte para classes e objetos.
    Suporte inicial para MySQL.

    PHP 4:
    Ano de lançamento: 2000.
    Principais Características:
    Aprimoramento do suporte a objetos.
    Adição de mecanismo de manipulação de exceções.
    Introdução do Zend Engine.

    PHP 5:
    Ano de lançamento: 2004.
    Principais Características:
    Melhorias significativas no suporte a objetos.
    Introdução de construtores e destrutores de classes.
    Adição de recursos de gerenciamento de exceções mais robustos.
    Introdução do suporte para a biblioteca de objetos DOM.

    PHP 5.3:
    Ano de lançamento: 2009.
    Principais Características:
    Introdução dos namespaces.
    Adição de Late Static Binding.
    Melhorias na manipulação de closures.

    PHP 5.4:
    Ano de lançamento: 2012.
    Principais Características:
    Introdução do short array syntax (sintaxe de array curta).
    Traits para reutilização de código.
    Melhorias no suporte a cliques e servidores embutidos.

    PHP 5.6:
    Ano de lançamento: 2014.
    Principais Características:
    Adição do operador de expensão (...) para argumentos de função.
    Introdução do variadics em funções.
    Melhorias no desempenho com o Zend OPcache.

    PHP 7.0:
    Ano de lançamento: 2015.
    Principais Características:
    Introdução do operador de nave espacial (<=>) para comparação de três vias.
    Melhorias significativas no desempenho com o novo Zend Engine 3.

    PHP 7.4:
    Ano de lançamento: 2019.
    Principais Características:
    Adição de sintaxe de propriedades tipadas.
    Introdução do operador de atribuição de fusão de null (??=).
    Aprimoramentos na sintaxe e desempenho.

    PHP 8.0:
    Ano de lançamento: 2020.
    Principais Características:
    Adição de atributos para metaprogramação.
    Introdução de JIT (Just-In-Time Compilation).
    Novas funcionalidades e melhorias na sintaxe.
    </p>
    <hr>
    <h1>Exercício 2</h1>
    <h2>Formulário com rota</h2>
    <form action="form1.php" method="post">

        <label for="userName">
            Nome:
            <input type="text" name="nome" id="userName" placeholder="Insira seu nome" required>
        </label>
        <br>

        <label for="userEmail">
            Email:
            <input type="email" name="email" id="userEmail" placeholder="Insira seu email" required>
        </label>
        <br>

        <label>
            Sexo:
            <label for="userGenderM">
                <input type="radio" value="m" name="gender" id="userGenderM" required>
                Masculino
            </label>
            <label for="userGenderF">
                <input type="radio" value="f" name="gender" id="userGenderF" required>
                Feminino
            </label>
        </label>
        <br>

        <label>
            Estado civil
            <select name="status" required>
                <option value="solteiro">Solteiro</option>
                <option value="casado">Casado</option>
                <option value="estavel">União estável</option>
                <option value="viuvo">Viúvo</option>
                <option value="divorciado">Divorciado</option>
            </select>
        </label>
        <br>

        <input type="submit" value="Enviar">
    </form>
    <hr>

    <h1>Exercício 3</h1>
    <h2>Calculadora simples</h2>
    <form action="calcular.php" method="post">
        <label for="num1">Número 1:</label>
        <input type="number" name="num1" required>
        <br>

        <label for="num2">Número 2:</label>
        <input type="number" name="num2" required>
        <br>

        <label>Escolha a operação:</label>
        <br>

        <input type="radio" name="operacao" value="soma" required>
        <label for="soma">Soma</label>

        <input type="radio" name="operacao" value="subtracao">
        <label for="subtracao">Subtração</label>

        <input type="radio" name="operacao" value="multiplicacao">
        <label for="multiplicacao">Multiplicação</label>

        <input type="radio" name="operacao" value="divisao">
        <label for="divisao">Divisão</label>
        <br>

        <input type="submit" value="Calcular">

    </form>
    <hr>

    <h1>Exercício 4</h1>
    <h2>Concurso</h2>

    <form action="prova.php" method="post">
        <label for="nota1">
            Nota 1:
            <input type="number" name="nota1" id="nota1" value="0" min="0" max="10">
        </label>
        <br>

        <label for="nota2">
            Nota 2:
            <input type="number" name="nota2" id="nota2" value="0" min="0" max="10">
        </label>
        <br>

        <label for="nota3">
            Nota 3:
            <input type="number" name="nota3" id="nota3" value="0" min="0" max="10">
        </label>
        <br>

        <label for="cargo">
            Cargo da prova:
            <select name="cargo" id="cargo">
                <option value="7">Gerente</option>
                <option value="8">Diretor</option>
            </select>
        </label>

        <input type="submit" value="Enviar">
        </form>
</body>
</html>