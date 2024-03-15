<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
</head>
<body>
    <?php
        if ($_POST) {
            $num1 = $_POST["num1"];
            $num2 = $_POST["num2"];
            $operacao = $_POST["operacao"];

            switch ($operacao) {
                case "soma":
                    $resultado = $num1 + $num2;
                    break;

                case "subtracao":
                    $resultado = $num1 - $num2;
                    break;

                case "multiplicacao":
                    $resultado = $num1 * $num2;
                    break;

                case "divisao":
                    if ($num2 != 0) {
                        $resultado = $num1 / $num2;
                    } else {
                        $resultado = "Não é possível dividir por zero.";
                    }
                    break;

                default:
                    $resultado = "Operação inválida.";
                    break;
            }

            echo "Resultado da operação $operacao: $resultado";
        }
    ?>
</body>
</html>