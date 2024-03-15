// Exercício 1
// Faça um código JavaScript que mostra uma caixa de diálogo (prompt) para o usuário informar sua idade.
// Se o usuário informar uma idade menor que 18 mostrar em uma caixa de alerta a mensagem “Menor de idade”. Se o usuário informar um valor maior ou igual a 18, mostrar mensagem “Maior de idade”.
function confirmIdade() {
    var idade = Number(prompt("Insira sua idade:"));
    if (idade < 18) {
        window.alert("Menor de idade");
    }
    else {
        window.alert("Maior de idade");
    }
}

// Exercício 2
// Crie um formulário de contato e torne os campos: nome, e-mail e assunto obrigatórios, validando-os através de uma função JavaScript. Para cada campo não preenchido mostre uma mensagem de alerta.

function enviarEmail() {
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("assunto").value != "") {
        window.alert("Email enviado");
    }
    else {
        window.alert("Verifique se todos os campos estão preenchidos.")
    }
}

// Exercício 3
// 3. No processo de seleção para cargos de uma empresa, o candidato faz 3 provas, cujos os pesos são:
// •	 Prova 1 = peso 3
// •	 Prova 2 = peso 3
// •	 Prova 3 = peso 4
// Para ser considerado aprovado o candidato deve ter média acima de 7 para o cargo de gerente e acima
// de 8 para o cargo de diretor. Faça uma função JavaXcript para calcular a nota final do candidato e mostra
// em uma caixa de alerta sua situação (APROVADO/REPROVADO) considerando o formulário abaixo.

function prova() {
    var notas = document.getElementsByName("provas");
    var media = (Number(notas[0].value) + Number(notas[1].value) + Number(notas[2].value)) / 3;
    var pesoProva = Number(document.getElementById("cargo").value);
    
    if (pesoProva != null) {
        if (media > pesoProva) {
            document.getElementById("resultado").innerText = "Resultado: APROVADO!!";
        }
        else {
            document.getElementById("resultado").innerText = "Resultado: Reprovado.";
        }
    }
}

// Exercício 4
// Crie a função calculadora() que considera os objetos do formulário (dois valores e a operação que pode ser +, -, * ou /). A função deve fazer o cálculo correspondente a operação e mostrar o resultado em uma caixa de alerta. Considere um formulário como da figura abaixo. Faça a chamada da função no evento onclick do botão
function calcular() {
    valor1 = document.getElementById('valor1').value;
    valor2 = document.getElementById('valor2').value;
    try {
        operacao = document.querySelector('input[name="operacao"]:checked').value;
    }
    catch {
        document.getElementById('resultado').innerText = 'Erro: Selecione uma operação.'
    }

    switch (operacao) {
        case 'Soma':
            document.getElementById('resultado').innerText = `Resultado ${Number(valor1) + Number(valor2)}`;
            break;

        case 'Subtracão':
            document.getElementById('resultado').innerText = `Resultado ${Number(valor1) - Number(valor2)}`;
            break;

        case 'Multiplicação':
            document.getElementById('resultado').innerText = `Resultado ${Number(valor1) * Number(valor2)}`;
            break;

        case 'Divisão':
            if (valor1 != 0 && valor2 != 0) {
                document.getElementById('resultado').innerText = `Resultado ${Number(valor1) / Number(valor2)}`;
            }
            else {
                document.getElementById('resultado').innerText = 'Erro: Impossível dividir por 0'
            }
            break;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    
    // Exercício 9
    // Apresente um exemplo de uso de um evento em elementos de formulário (diferente de onclick).
    
    area = document.getElementById("area");
    
    area.addEventListener('click', mouseClick);
    area.addEventListener('mouseenter', mouseIn);
    area.addEventListener('mouseout', mouseOut);
    
    function mouseClick() {
        area.innerText = "Clicou!"
        area.style.color = "rgb(48,48,48)"
        area.style.background = "rgb(0,230,0)"
    }
    function mouseIn() {
        area.innerText = "Mouse entrou"
        area.style.color = "rgb(48,48,48)"
        area.style.background = "rgb(230,230,0)"
    }
    function mouseOut() {
        area.innerText = "Mouse saiu"
        area.style.color = "rgb(48,48,48)"
        area.style.background = "rgb(230,50,50)"
    }

    // Exercício 10
    // Como uma função JavaScript pode ser chamada em um link? Apresente um exemplo.

    // !! Não funcionou em arquivo externo

    // function mudarTexto() {
    //     document.getElementById("texto").innerHTML = "Texto mudado";
    // }
});

